"use client";
import {
  CheckCircle2,
  MessageSquare,
  Send,
  Settings,
  XCircle,
  Zap,
} from "lucide-react";
import React, { useState } from "react";
import SetupGuide from "./AIWhatsAppChatbot/SetupGuide";
import ConversationView from "./AIWhatsAppChatbot/ConversationView";
import AgentConfig from "./AIWhatsAppChatbot/AgentConfig";
import { useMediaQuery } from "react-responsive";

const AIWhatsappAgent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeTab, setActiveTab] = useState("setup"); //<'setup' | 'config' | 'conversations'>
  const [agentStatus, setAgentStatus] = useState("inactive"); //<'inactive' | 'active'>

  return (
    <div className="min-h-screen bg-navyBlue">
      <div className="container main-section-padding max-w-7xl mx-auto">
        <header className="md:mt-8 mt-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-2xl shadow-lg">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex gap-3">
                  <h1 className="lg:text-3xl text-2xl font-bold text-gray-200">
                    WhatsApp AI Agent
                  </h1>

                  {!isMobile &&
                    (agentStatus === "active" ? (
                      <div className="flex items-center gap-1 bg-white px-2 rounded-md my-1">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span className="text-sm font-medium text-slate-700">
                          Active
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 bg-white px-2 rounded-md my-1">
                        <XCircle className="w-5 h-5 text-slate-400" />
                        <span className="text-sm font-medium text-slate-500">
                          Inactive
                        </span>
                      </div>
                    ))}
                </div>
                <p className="text-sm sm:text-base text-slate-200">
                  Intelligent automated responses for WhatsApp Business
                </p>
              </div>
            </div>
            {/* <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200"> */}

            {/* </div> */}
          </div>
        </header>

        <div className="mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-1 inline-flex gap-1">
            <button
              onClick={() => setActiveTab("setup")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "setup"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span className="sm:block hidden">Setup Guide</span>
            </button>
            <button
              onClick={() => setActiveTab("config")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "config"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Settings className="w-4 h-4" />
              <span className="sm:block hidden">Configuration</span>
            </button>
            <button
              onClick={() => setActiveTab("conversations")}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === "conversations"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <Send className="w-4 h-4" />
              <span className="sm:block hidden">Conversations</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200">
          {activeTab === "setup" && <SetupGuide />}
          {activeTab === "config" && (
            <AgentConfig
              agentStatus={agentStatus}
              onStatusChange={setAgentStatus}
            />
          )}
          {activeTab === "conversations" && <ConversationView />}
        </div>
      </div>
    </div>
  );
};

export default AIWhatsappAgent;
