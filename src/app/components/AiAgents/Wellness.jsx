"use client";
import React, { useState } from "react";
import AIAgentLayout from "./AIAgentLayout";
import ChatInterface from "./AIChatInterface";
import { Mood } from "../../lib/enums";
import { Smile, Frown, Meh, Sun, CloudRain } from "lucide-react";

const Wellness = () => {
  const [currentMood, setCurrentMood] = useState(null);

  const moodIcons = [
    {
      type: Mood.HAPPY,
      icon: Smile,
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      type: Mood.CALM,
      icon: Sun,
      color: "text-yellow-500",
      bg: "bg-yellow-100",
    },
    {
      type: Mood.STRESSED,
      icon: CloudRain,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      type: Mood.SAD,
      icon: Frown,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      type: Mood.ANXIOUS,
      icon: Meh,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
  ];

  return (
    <AIAgentLayout title="Mental Wellness" showBack>
      <div className="flex flex-col h-full">
        <div className="p-4 bg-white border-b border-slate-100">
          <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wide">
            How are you feeling?
          </h3>
          <div className="flex justify-between px-2">
            {moodIcons.map((m) => (
              <button
                key={m.type}
                onClick={() => setCurrentMood(m.type)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  currentMood === m.type
                    ? "scale-110 opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className={`p-3 rounded-full ${m.bg} ${m.color}`}>
                  <m.icon size={24} />
                </div>
                <span className="text-xs font-medium text-slate-600">
                  {m.type}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <ChatInterface
            key={currentMood}
            themeColor="teal"
            moduleName="Mental Wellness"
            systemInstruction={`You are an empathetic, calm mental wellness companion. The user is currently feeling: ${
              currentMood || "Unknown"
            }. Offer breathing exercises, mindfulness tips, or just listen. Never give medical advice; suggest a professional for serious issues. Tone: Gentle, slow, understanding.`}
            welcomeMessage={
              currentMood
                ? `I see you're feeling ${currentMood.toLowerCase()}. I'm here for you. Do you want to talk about it or try a breathing exercise?`
                : "Hello. I'm here to listen. How are you feeling right now?"
            }
          />
        </div>
      </div>
    </AIAgentLayout>
  );
};

export default Wellness;
