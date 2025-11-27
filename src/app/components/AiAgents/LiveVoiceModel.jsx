"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Mic,
  MicOff,
  Power,
  Activity,
  Radio,
  Cpu,
  Wifi,
} from "lucide-react";
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

const LiveVoiceModal = ({ isOpen, onClose, moduleName, systemInstruction }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [agentState, setAgentState] = useState("connecting");
  //    "connecting") |
  //     "listening" |
  //     "speaking" |
  //     "processing"
  const [error, setError] = useState(null);

  // Audio Contexts & Nodes
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const processorRef = useRef(null);
  const sourceRef = useRef(null);
  const inputAnalyserRef = useRef(null);

  // Output Audio Refs
  const outputContextRef = useRef(null);
  const outputAnalyserRef = useRef(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef(new Set());

  // Animation
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  // --- Audio Helpers ---
  const createBlob = (data) => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
      int16[i] = Math.max(-1, Math.min(1, data[i])) * 0x7fff;
    }
    const bytes = new Uint8Array(int16.buffer);
    let binary = "";
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return { data: btoa(binary), mimeType: "audio/pcm;rate=16000" };
  };

  const decodeAudioData = async (base64String, ctx) => {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const dataInt16 = new Int16Array(bytes.buffer);
    const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < dataInt16.length; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    return buffer;
  };

  // --- Lifecycle ---
  useEffect(() => {
    if (isOpen) {
      setAgentState("connecting");
      connectLive();
    } else {
      disconnect();
    }
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // --- Visualizer Animation ---
  useEffect(() => {
    if (!isOpen) return;

    const renderVisualizer = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Resize canvas to match display size
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) / 2 - 20;
      const baseRadius = maxRadius * 0.4;

      // Decide which analyser to use based on state
      let analyser = null;
      let primaryColor = "";
      let secondaryColor = "";
      let stateScale = 1;

      if (agentState === "speaking" && outputAnalyserRef.current) {
        analyser = outputAnalyserRef.current;
        primaryColor = "168, 85, 247"; // Purple
        secondaryColor = "236, 72, 153"; // Pink
        stateScale = 1.2;
      } else if (inputAnalyserRef.current) {
        // Listening or Connecting (visualize mic noise if any)
        analyser = inputAnalyserRef.current;
        primaryColor = "6, 182, 212"; // Cyan
        secondaryColor = "59, 130, 246"; // Blue
        stateScale = 1.0;
      }

      if (analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Calculate average volume for core glow
        let sum = 0;
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i];
        }
        const average = sum / bufferLength;
        const volume = average / 255; // 0.0 to 1.0

        // Determine State based on volume if connected
        if (isConnected) {
          if (agentState !== "speaking" && volume > 0.1) {
            // If we are listening and volume is high, visualizer confirms "Hearing"
          }
        }

        // --- Draw Central Core ---
        const coreGradient = ctx.createRadialGradient(
          centerX,
          centerY,
          baseRadius * 0.2,
          centerX,
          centerY,
          baseRadius * (1 + volume * 0.5)
        );
        coreGradient.addColorStop(0, `rgba(${primaryColor}, ${0.2 + volume})`);
        coreGradient.addColorStop(1, `rgba(${secondaryColor}, 0)`);

        ctx.beginPath();
        ctx.arc(
          centerX,
          centerY,
          baseRadius * (1 + volume * 0.5),
          0,
          Math.PI * 2
        );
        ctx.fillStyle = coreGradient;
        ctx.fill();

        // --- Draw Frequency Bars (Circular) ---
        const bars = 60; // Number of bars
        const step = (Math.PI * 2) / bars;

        ctx.lineWidth = 4;
        ctx.lineCap = "round";

        for (let i = 0; i < bars; i++) {
          // Map bar index to frequency index (focus on lower/mid frequencies)
          const dataIndex = Math.floor((i / bars) * (bufferLength * 0.7));
          const value = dataArray[dataIndex];
          const percent = value / 255;
          const barHeight = (maxRadius - baseRadius) * percent * stateScale;

          const angle = i * step;

          // Start point (on base radius)
          const sx = centerX + Math.cos(angle) * (baseRadius + 10);
          const sy = centerY + Math.sin(angle) * (baseRadius + 10);

          // End point
          const ex = centerX + Math.cos(angle) * (baseRadius + 10 + barHeight);
          const ey = centerY + Math.sin(angle) * (baseRadius + 10 + barHeight);

          const alpha = 0.2 + percent * 0.8;
          ctx.strokeStyle = `rgba(${primaryColor}, ${alpha})`;

          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
          ctx.stroke();
        }

        // --- Draw Connecting Ring ---
        ctx.beginPath();
        ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${primaryColor}, 0.3)`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(renderVisualizer);
    };

    renderVisualizer();

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isOpen, isConnected, agentState]);

  // --- Logic ---
  const disconnect = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    try {
      processorRef.current?.disconnect();
    } catch (e) {}
    try {
      sourceRef.current?.disconnect();
    } catch (e) {}
    try {
      inputAnalyserRef.current?.disconnect();
    } catch (e) {}
    try {
      outputAnalyserRef.current?.disconnect();
    } catch (e) {}

    processorRef.current = null;
    sourceRef.current = null;
    inputAnalyserRef.current = null;
    outputAnalyserRef.current = null;

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close().catch(console.error);
    }
    audioContextRef.current = null;

    if (
      outputContextRef.current &&
      outputContextRef.current.state !== "closed"
    ) {
      outputContextRef.current.close().catch(console.error);
    }
    outputContextRef.current = null;

    sourcesRef.current.forEach((s) => {
      try {
        s.stop();
      } catch (e) {}
    });
    sourcesRef.current.clear();

    setIsConnected(false);
    setError(null);
  };

  const connectLive = async () => {
    try {
      setError(null);
      const apiKey = process.env.API_KEY || "";
      const ai = new GoogleGenAI({ apiKey });

      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      // 1. Setup Input Context
      const inputCtx = new AudioContextClass({ sampleRate: 16000 });
      audioContextRef.current = inputCtx;

      const inputAnalyser = inputCtx.createAnalyser();
      inputAnalyser.fftSize = 256;
      inputAnalyser.smoothingTimeConstant = 0.5;
      inputAnalyserRef.current = inputAnalyser;

      // 2. Setup Output Context
      const outputCtx = new AudioContextClass({ sampleRate: 24000 });
      outputContextRef.current = outputCtx;

      const outputAnalyser = outputCtx.createAnalyser();
      outputAnalyser.fftSize = 256;
      outputAnalyser.smoothingTimeConstant = 0.5;
      outputAnalyser.connect(outputCtx.destination);
      outputAnalyserRef.current = outputAnalyser;

      // 3. Get Microphone Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        callbacks: {
          onopen: async () => {
            setIsConnected(true);
            setAgentState("listening");

            if (inputCtx.state === "suspended") await inputCtx.resume();
            if (outputCtx.state === "suspended") await outputCtx.resume();

            const source = inputCtx.createMediaStreamSource(stream);
            sourceRef.current = source;

            // Connect source to analyser for visuals
            source.connect(inputAnalyser);

            // Connect source to processor for data transmission
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            processor.onaudioprocess = (e) => {
              if (isMuted) return;

              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then((session) => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (msg) => {
            const audioData =
              msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData && outputContextRef.current) {
              const buffer = await decodeAudioData(
                audioData,
                outputContextRef.current
              );

              const source = outputContextRef.current.createBufferSource();
              source.buffer = buffer;

              if (outputAnalyserRef.current) {
                source.connect(outputAnalyserRef.current);
              } else {
                source.connect(outputContextRef.current.destination);
              }

              const now = outputContextRef.current.currentTime;
              const start = Math.max(now, nextStartTimeRef.current);
              source.start(start);
              nextStartTimeRef.current = start + buffer.duration;

              setAgentState("speaking");
              sourcesRef.current.add(source);
              source.onended = () => {
                sourcesRef.current.delete(source);
                if (sourcesRef.current.size === 0) {
                  setAgentState("listening");
                }
              };
            }

            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach((s) => {
                try {
                  s.stop();
                } catch (e) {}
              });
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
              setAgentState("listening");
            }
          },
          onclose: () => {
            setIsConnected(false);
            setAgentState("connecting");
          },
          onerror: (err) => {
            console.error(err);
            setError("Connection disrupted.");
            setIsConnected(false);
          },
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Kore" } },
          },
          systemInstruction: `You are the ${moduleName} AI. ${systemInstruction} Keep responses concise and natural.`,
        },
      });
    } catch (e) {
      console.error(e);
      setError("Microphone access failed.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 animate-in fade-in duration-300 font-sans">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] transition-all duration-1000 ${
            agentState === "speaking" ? "bg-purple-900/20" : ""
          }`}
        ></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between py-12 px-6">
        {/* Header HUD */}
        <div className="flex items-start justify-between w-full max-w-lg mx-auto">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <Wifi
                size={16}
                className={isConnected ? "" : "animate-pulse text-red-500"}
              />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-cyan-500/80">
                {isConnected ? "LINK_ESTABLISHED" : "SEARCHING_SIGNAL..."}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-slate-600" />
              <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                MOD: {moduleName.toUpperCase()}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="group relative p-3 rounded-full bg-slate-900/50 border border-slate-700/50 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400 text-slate-400 transition-all backdrop-blur-md"
          >
            <X size={20} />
          </button>
        </div>

        {/* Central Visualizer */}
        <div className="flex-1 flex flex-col items-center justify-center relative w-full">
          {/* Canvas Visualizer */}
          <div className="relative w-full max-w-sm aspect-square">
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Central Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <Activity
                size={32}
                className={`transition-colors duration-500 ${
                  agentState === "speaking"
                    ? "text-purple-300 drop-shadow-[0_0_10px_rgba(216,180,254,0.8)]"
                    : "text-cyan-300 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)]"
                }`}
              />
            </div>
          </div>

          {/* Status Text */}
          <div className="mt-8 text-center space-y-2 h-16">
            {error ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-950/40 border border-red-500/30 rounded text-red-400 text-xs font-mono">
                <Radio size={12} /> {error}
              </div>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 tracking-wider font-display">
                  {agentState === "speaking"
                    ? "TRANSMITTING"
                    : agentState === "listening"
                    ? "LISTENING"
                    : "CONNECTING"}
                </h2>
                <p className="text-cyan-500/60 text-[10px] font-mono uppercase tracking-[0.3em] animate-pulse">
                  {agentState === "speaking"
                    ? "Neural Stream Active"
                    : "Waiting for Audio Input"}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Controls Footer */}
        <div className="w-full max-w-md mx-auto flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`relative group p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
              isMuted
                ? "bg-red-500/10 border-red-500/50 text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                : "bg-slate-900/40 border-slate-700/50 text-slate-300 hover:bg-slate-800/60 hover:border-cyan-500/30 hover:text-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            }`}
          >
            {isMuted ? <MicOff size={28} /> : <Mic size={28} />}
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
              {isMuted ? "Unmute" : "Mute"}
            </span>
          </button>

          <button
            onClick={onClose}
            className="relative group p-6 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 text-white shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:scale-105 transition-all border border-red-400/20"
          >
            <Power size={28} fill="currentColor" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
              Disconnect
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveVoiceModal;
