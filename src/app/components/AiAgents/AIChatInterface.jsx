"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Send,
  Image as ImageIcon,
  Loader2,
  X,
  Mic,
  Volume2,
  Square,
  StopCircle,
  ExternalLink,
  Download,
  Trash2,
  Bell,
  Calendar,
  Check,
  Clock,
} from "lucide-react";
import { Chat, Content } from "@google/genai";
import {
  createChatSession,
  sendMessageToGemini,
} from "../../components/lib/geminiService";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { usePathname } from "next/navigation";
import { useUser } from "../../../context/AIAgentUserContext";
import KundliChart from "./KundaliChart";
import LiveVoiceModal from "./LiveVoiceModel";

const ChatInterface = ({
  systemInstruction,
  welcomeMessage,
  themeColor,
  allowImages = false,
  moduleName,
  model = "gemini-2.5-flash",
  tools,
}) => {
  const { profile } = useUser();
  const pathname = usePathname();
  const [chatSession, setChatSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [wasVoiceInput, setWasVoiceInput] = useState(false);

  // Live Voice State
  const [isLiveVoiceOpen, setIsLiveVoiceOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);
  const recognitionRef = useRef(null);

  // Determine effective module name for storage and voice context
  // Fallback to route name (e.g. "/meme" -> "meme") if moduleName prop is missing
  const activeModuleName =
    moduleName ||
    (pathname === "/ai-agents/" ? "Assistant" : pathname.substring(1)) ||
    "Assistant";

  // Unique Storage Key for History Persistence per Agent
  const storageKey = `omnilife_chat_${activeModuleName}`;

  // Initialize Chat Session & Restore History
  useEffect(() => {
    // 1. Load History from LocalStorage
    const savedHistory = localStorage.getItem(storageKey);
    let initialMessages = [];

    if (savedHistory) {
      try {
        initialMessages = JSON.parse(savedHistory);
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }

    if (initialMessages.length === 0) {
      initialMessages = [
        {
          id: "welcome",
          role: "model",
          text: welcomeMessage,
          timestamp: Date.now(),
        },
      ];
    }

    setMessages(initialMessages);

    // 2. Convert UI Messages to Gemini SDK History Format
    const geminiHistory = initialMessages
      .filter((m) => m.id !== "welcome")
      .map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

    // 3. Create Session with History
    const session = createChatSession(
      systemInstruction,
      profile,
      model,
      tools,
      geminiHistory
    );
    setChatSession(session);
  }, [
    systemInstruction,
    model,
    tools,
    activeModuleName,
    profile,
    storageKey,
    welcomeMessage,
  ]);

  // Persist History on Change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    }
  }, [messages, storageKey]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isStreaming, isListening]);

  // Robust Auto-Focus logic
  const focusInput = () => {
    if (!isListening && !isStreaming && !isLiveVoiceOpen) {
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 50);
    }
  };

  useEffect(() => {
    focusInput();
  }, [isStreaming, messages, isListening, isLiveVoiceOpen]);

  useEffect(() => {
    setTimeout(() => {
      textareaRef.current?.focus();
    }, 300);
  }, []);

  const clearHistory = () => {
    if (
      window.confirm(
        `Are you sure you want to clear the memory for ${activeModuleName}?`
      )
    ) {
      localStorage.removeItem(storageKey);
      setMessages([
        {
          id: "welcome",
          role: "model",
          text: welcomeMessage,
          timestamp: Date.now(),
        },
      ]);
      // Re-initialize session to clear SDK context
      const session = createChatSession(
        systemInstruction,
        profile,
        model,
        tools,
        []
      );
      setChatSession(session);
    }
  };

  // Voice Input (Speech to Text)
  const toggleVoiceInput = () => {
    if (isListening) {
      stopListening();
      return;
    }
    startListening();
  };

  const startListening = () => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    cancelSpeech();

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setIsListening(true);
      setWasVoiceInput(true);
    };

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          setInputText((prev) => {
            return event.results[i][0].transcript;
          });
        }
      }
      if (finalTranscript) {
        setInputText(finalTranscript);
      }
    };

    recognition.onerror = (event) => {
      if (event.error === "no-speech") {
        // Silently ignore
      } else if (event.error === "not-allowed") {
        alert(
          "Microphone access blocked. Please check your browser permissions."
        );
      } else {
        console.error("Speech recognition error:", event.error);
      }
      stopListening();
    };

    recognition.onend = () => {
      stopListening();
      setTimeout(() => textareaRef.current?.focus(), 100);
    };

    try {
      recognition.start();
    } catch (e) {
      console.error("Failed to start recognition:", e);
      stopListening();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        /* ignore */
      }
    }
    setIsListening(false);
  };

  // Text to Speech
  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const cleanText = text
        .replace(/\*\*/g, "")
        .replace(/\*/g, "")
        .replace(/#/g, "")
        .replace(/\[.*\]/g, "")
        .replace(/`/g, "")
        .replace(/\{.*\}/s, ""); // Remove JSON blocks if any

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const cancelSpeech = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const handleSetReminder = async (title, timeStr, notes) => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const targetTime = new Date(timeStr).getTime();
      const now = Date.now();
      const diff = targetTime - now;

      if (diff > 0) {
        setTimeout(() => {
          new Notification(`Brilworks: ${title}`, {
            body: notes || "It's time!",
            icon: "https://cdn-icons-png.flaticon.com/512/3239/3239958.png",
            silent: false,
          });
          const audio = new Audio(
            "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3"
          );
          audio.play().catch((e) => console.log("Audio play failed", e));
        }, diff);
        alert(`Reminder set for ${new Date(timeStr).toLocaleTimeString()}`);
      } else {
        alert("The specified time is in the past!");
      }
    } else {
      alert("Notification permission denied.");
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        focusInput();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSend = async () => {
    if ((!inputText.trim() && !selectedImage) || !chatSession || isStreaming)
      return;

    if (isListening) stopListening();
    if (isSpeaking) cancelSpeech();

    const currentText = inputText;
    const currentImage = selectedImage;
    const isVoice = wasVoiceInput;

    setInputText("");
    setSelectedImage(null);
    setWasVoiceInput(false);

    const newMessage = {
      id: Date.now().toString(),
      role: "user",
      text: currentText,
      image: currentImage || undefined,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, newMessage]);

    setIsStreaming(true);
    const responseId = (Date.now() + 1).toString();

    setMessages((prev) => [
      ...prev,
      {
        id: responseId,
        role: "model",
        text: "",
        timestamp: Date.now(),
      },
    ]);

    let fullResponseText = "";
    let generatedImage = undefined;
    let accumulatedGrounding = [];

    try {
      const stream = await sendMessageToGemini(
        chatSession,
        currentText,
        currentImage || undefined
      );

      for await (const chunk of stream) {
        const chunkText = chunk.text || "";
        fullResponseText += chunkText;

        // Check for generated images
        if (chunk.candidates?.[0]?.content?.parts) {
          for (const part of chunk.candidates[0].content.parts) {
            if (part.inlineData) {
              generatedImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            }
          }
        }

        // Check for Grounding Metadata
        const groundingChunks =
          chunk.candidates?.[0]?.groundingMetadata?.groundingChunks;
        if (groundingChunks) {
          groundingChunks.forEach((c) => {
            if (c.web) {
              accumulatedGrounding.push({ title: c.web.title, uri: c.web.uri });
            }
          });
        }

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === responseId
              ? {
                  ...msg,
                  text: fullResponseText,
                  image: generatedImage || msg.image,
                  groundingSources:
                    accumulatedGrounding.length > 0
                      ? accumulatedGrounding
                      : undefined,
                }
              : msg
          )
        );
      }
    } catch (error) {
      console.error("Chat error:", error);
      fullResponseText = "Sorry, I encountered an error. Please try again.";
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === responseId
            ? { ...msg, text: "**Error:** Failed to get response." }
            : msg
        )
      );
    } finally {
      setIsStreaming(false);
      if (isVoice && fullResponseText) {
        speakText(fullResponseText);
      }
    }
  };

  const getThemeStyles = (color) => {
    const styles = {
      purple: {
        btn: "bg-purple-600 hover:bg-purple-500 shadow-purple-500/30",
        bubble: "border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.05)]",
        ring: "focus-within:ring-purple-500/50",
      },
      orange: {
        btn: "bg-orange-600 hover:bg-orange-500 shadow-orange-500/30",
        bubble: "border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)]",
        ring: "focus-within:ring-orange-500/50",
      },
      red: {
        btn: "bg-red-600 hover:bg-red-500 shadow-red-500/30",
        bubble: "border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)]",
        ring: "focus-within:ring-red-500/50",
      },
      teal: {
        btn: "bg-teal-600 hover:bg-teal-500 shadow-teal-500/30",
        bubble: "border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.05)]",
        ring: "focus-within:ring-teal-500/50",
      },
      blue: {
        btn: "bg-blue-600 hover:bg-blue-500 shadow-blue-500/30",
        bubble: "border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]",
        ring: "focus-within:ring-blue-500/50",
      },
      cyan: {
        btn: "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-500/30",
        bubble: "border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)]",
        ring: "focus-within:ring-cyan-500/50",
      },
      rose: {
        btn: "bg-rose-600 hover:bg-rose-500 shadow-rose-500/30",
        bubble: "border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.05)]",
        ring: "focus-within:ring-rose-500/50",
      },
      yellow: {
        btn: "bg-yellow-600 hover:bg-yellow-500 shadow-yellow-500/30",
        bubble: "border-yellow-500/20 shadow-[0_0_15px_rgba(250,204,21,0.05)]",
        ring: "focus-within:ring-yellow-500/50",
      },
      sky: {
        btn: "bg-sky-600 hover:bg-sky-500 shadow-sky-500/30",
        bubble: "border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.05)]",
        ring: "focus-within:ring-sky-500/50",
      },
      green: {
        btn: "bg-green-600 hover:bg-green-500 shadow-green-500/30",
        bubble: "border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.05)]",
        ring: "focus-within:ring-green-500/50",
      },
      indigo: {
        btn: "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/30",
        bubble: "border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)]",
        ring: "focus-within:ring-indigo-500/50",
      },
      emerald: {
        btn: "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/30",
        bubble: "border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]",
        ring: "focus-within:ring-emerald-500/50",
      },
      pink: {
        btn: "bg-pink-600 hover:bg-pink-500 shadow-pink-500/30",
        bubble: "border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.05)]",
        ring: "focus-within:ring-pink-500/50",
      },
      lime: {
        btn: "bg-lime-600 hover:bg-lime-500 shadow-lime-500/30",
        bubble: "border-lime-500/20 shadow-[0_0_15px_rgba(132,204,22,0.05)]",
        ring: "focus-within:ring-lime-500/50",
      },
      amber: {
        btn: "bg-amber-600 hover:bg-amber-500 shadow-amber-500/30",
        bubble: "border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)]",
        ring: "focus-within:ring-amber-500/50",
      },
      slate: {
        btn: "bg-slate-600 hover:bg-slate-500 shadow-slate-500/30",
        bubble: "border-slate-500/20 shadow-[0_0_15px_rgba(100,116,139,0.05)]",
        ring: "focus-within:ring-slate-500/50",
      },
    };
    return styles[color] || styles.blue;
  };

  const themeStyle = getThemeStyles(themeColor);

  return (
    <>
      <div className="flex flex-col h-full bg-transparent relative">
        {/* Header Actions */}
        <div className="absolute top-4 right-6 z-20 flex items-center gap-2">
          <button
            onClick={clearHistory}
            className="p-2.5 rounded-full bg-slate-900/60 hover:bg-red-900/40 text-slate-400 hover:text-red-400 backdrop-blur-md shadow-lg transition-all border border-white/10"
            title={`Clear Memory for ${activeModuleName}`}
          >
            <Trash2 size={18} />
          </button>

          <button
            onClick={() => setIsLiveVoiceOpen(true)}
            className={`p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-cyan-400 backdrop-blur-md shadow-lg transition-all border border-cyan-500/30 flex items-center gap-2.5 pr-5 group hover:shadow-cyan-500/20`}
            title="Start Live Voice Chat"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider group-hover:text-white transition-colors">
              Live Agent
            </span>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide pb-36 pt-16">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === "user" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[95%] sm:max-w-[85%] rounded-2xl md:px-6 px-4 md:py-5 py-3 shadow-xl text-[15px] leading-relaxed backdrop-blur-sm border ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-br-none border-white/10"
                    : `bg-slate-900/80 text-slate-100 rounded-bl-none ${themeStyle.bubble} border-white/5`
                }`}
              >
                {msg.image && (
                  <div className="relative group mb-3">
                    <img
                      src={msg.image}
                      alt="Content"
                      className="w-full h-auto rounded-lg max-h-96 object-cover border border-white/10"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const link = document.createElement("a");
                        link.href = msg.image;
                        link.download = `brilworks-${activeModuleName.toLowerCase()}-${Date.now()}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="absolute top-2 right-2 p-2.5 bg-black/60 hover:bg-black/80 text-white hover:text-cyan-400 rounded-full backdrop-blur-xl border border-white/20 shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      title="Download Image"
                    >
                      <Download size={20} />
                    </button>
                  </div>
                )}
                <div className="prose prose-sm prose-invert max-w-none prose-p:my-1 prose-headings:my-2 prose-strong:text-cyan-300 break-words">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code: (props) => {
                        const { children, className, node, ...rest } = props;
                        const match = /language-(\w+)/.exec(className || "");
                        const lang = match ? match[1] : "";
                        const content = String(children).replace(/\n$/, "");

                        if (lang === "json") {
                          try {
                            const data = JSON.parse(content);

                            if (data.kind === "kundli-chart" && data.houses) {
                              return <KundliChart houses={data.houses} />;
                            }

                            if (data.kind === "scheduled-reminder") {
                              return (
                                <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-4 my-3 flex flex-col gap-3 shadow-lg">
                                  <div className="flex items-start gap-3">
                                    <div className="p-2.5 bg-cyan-900/30 text-cyan-400 rounded-lg">
                                      <Bell size={20} />
                                    </div>
                                    <div>
                                      <h4 className="text-white font-bold text-base m-0">
                                        {data.title}
                                      </h4>
                                      <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                                        <Clock size={12} />
                                        <span>
                                          {new Date(data.time).toLocaleString()}
                                        </span>
                                      </div>
                                      {data.notes && (
                                        <p className="text-slate-400 text-xs mt-1 italic">
                                          {data.notes}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <button
                                    onClick={() =>
                                      handleSetReminder(
                                        data.title,
                                        data.time,
                                        data.notes
                                      )
                                    }
                                    className="w-full py-2 px-3 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
                                  >
                                    <Check size={14} /> Enable Notification
                                  </button>
                                </div>
                              );
                            }
                          } catch (e) {
                            /* fallback */
                          }
                        }

                        return (
                          <code
                            className={`${className} bg-slate-800 px-1 py-0.5 rounded text-cyan-300`}
                            {...rest}
                          >
                            {children}
                          </code>
                        );
                      },
                      table: ({ node, ...props }) => (
                        <div className="overflow-x-auto my-3 border border-slate-700 rounded-lg shadow-inner bg-slate-900/50">
                          <table
                            className="min-w-full divide-y divide-slate-700"
                            {...props}
                          />
                        </div>
                      ),
                      thead: ({ node, ...props }) => (
                        <thead className="bg-slate-800/80" {...props} />
                      ),
                      th: ({ node, ...props }) => (
                        <th
                          className="px-4 py-3 text-left text-xs font-bold text-cyan-400 uppercase tracking-wider"
                          {...props}
                        />
                      ),
                      tbody: ({ node, ...props }) => (
                        <tbody
                          className="divide-y divide-slate-800"
                          {...props}
                        />
                      ),
                      tr: ({ node, ...props }) => (
                        <tr
                          className="hover:bg-slate-800/50 transition-colors"
                          {...props}
                        />
                      ),
                      td: ({ node, ...props }) => (
                        <td
                          className="px-4 py-3 whitespace-nowrap text-sm text-slate-300"
                          {...props}
                        />
                      ),
                      a: ({ node, ...props }) => (
                        <a
                          className="text-cyan-400 hover:text-cyan-300 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                          {...props}
                        />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>

                {msg.groundingSources && msg.groundingSources.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/10">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <ExternalLink size={12} /> Sources
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {msg.groundingSources.map((source, idx) => (
                        <a
                          key={idx}
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-slate-800 hover:bg-cyan-900/50 text-cyan-300 px-2 py-1 rounded border border-white/5 transition-colors truncate max-w-[200px]"
                        >
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.role === "model" && (
                <div className="flex items-center gap-2 mt-2 ml-1 opacity-60 hover:opacity-100 transition-opacity">
                  <button
                    onClick={() =>
                      isSpeaking ? cancelSpeech() : speakText(msg.text)
                    }
                    className={`p-1.5 rounded-full transition-all flex items-center gap-1 ${
                      isSpeaking
                        ? "bg-red-500/20 text-red-500"
                        : "text-slate-500 hover:text-cyan-400 hover:bg-slate-800"
                    }`}
                    title={isSpeaking ? "Stop Speaking" : "Read Aloud"}
                  >
                    {isSpeaking ? (
                      <StopCircle size={14} />
                    ) : (
                      <Volume2 size={14} />
                    )}
                    {isSpeaking && (
                      <span className="text-[10px] font-mono uppercase">
                        Stop Audio
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
          ))}

          {isStreaming && (
            <div className="flex justify-start">
              <div
                className={`bg-slate-900/80 rounded-2xl rounded-bl-none px-6 py-4 border border-white/5 flex items-center gap-3 shadow-lg`}
              >
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                </div>
                <span className="text-sm font-mono text-slate-400 uppercase tracking-widest animate-pulse">
                  Processing...
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Fixed Input Dock */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pt-12 pb-6 px-4">
          {isListening && (
            <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-full pb-4 pointer-events-none">
              <div className="bg-red-500/10 text-red-400 text-xs font-bold px-6 py-2 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse flex items-center gap-3 border border-red-500/50 backdrop-blur-md">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                VOICE INPUT ACTIVE
              </div>
            </div>
          )}

          {selectedImage && (
            <div className="absolute top-0 left-4 -translate-y-full mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300 group">
              <img
                src={selectedImage}
                alt="Preview"
                className="h-24 w-24 object-cover rounded-xl border-2 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] bg-slate-900"
              />
              <button
                onClick={() => {
                  setSelectedImage(null);
                  focusInput();
                }}
                className="absolute -top-2 -right-2 bg-slate-800 text-white rounded-full p-1.5 hover:bg-red-500 shadow-md transition-colors border border-white/10"
              >
                <X size={14} />
              </button>
            </div>
          )}

          <div
            className={`max-w-5xl mx-auto w-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-end md:gap-2 gap-1 transition-all duration-300 ${themeStyle.ring}`}
          >
            {allowImages && (
              <>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageSelect}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-3 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-colors flex-shrink-0 my-1"
                  title="Upload Visual Data"
                >
                  <ImageIcon size={22} />
                </button>
              </>
            )}

            <button
              onClick={toggleVoiceInput}
              className={`p-3 rounded-xl transition-all duration-300 flex-shrink-0 my-1 ${
                isListening
                  ? "bg-red-500/20 text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {isListening ? (
                <Square size={18} fill="currentColor" />
              ) : (
                <Mic size={22} />
              )}
            </button>

            <div className="flex-1 py-2 pt-2 px-1">
              <textarea
                ref={textareaRef}
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={
                  isListening
                    ? "Listening to audio stream..."
                    : "Enter command..."
                }
                className="w-full bg-transparent border-none outline-none resize-none max-h-32 text-slate-100 text-[16px] placeholder:text-slate-500 leading-relaxed font-medium"
                rows={1}
                style={{ minHeight: "24px" }}
              />
            </div>

            <button
              onClick={handleSend}
              disabled={(!inputText && !selectedImage) || isStreaming}
              className={`p-3 rounded-xl transition-all shadow-lg text-white flex-shrink-0 m-1 ${
                (!inputText && !selectedImage) || isStreaming
                  ? "bg-slate-800/50 text-slate-600 cursor-not-allowed"
                  : `${themeStyle.btn}`
              }`}
            >
              {isStreaming ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Send size={20} />
              )}
            </button>
          </div>
        </div>
      </div>

      <LiveVoiceModal
        isOpen={isLiveVoiceOpen}
        onClose={() => setIsLiveVoiceOpen(false)}
        moduleName={activeModuleName}
        systemInstruction={systemInstruction}
      />
    </>
  );
};

export default ChatInterface;
