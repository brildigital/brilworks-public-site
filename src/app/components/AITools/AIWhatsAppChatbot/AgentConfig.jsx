import { useState, useEffect } from "react";
import { Save, Power, Eye, EyeOff, Bot, Key, Loader2 } from "lucide-react";
import { supabase } from "@/app/lib/supabase";

// interface AgentConfigProps {
//   agentStatus: 'inactive' | 'active';
//   onStatusChange: (status: 'inactive' | 'active') => void;
// }

export default function AgentConfig({ agentStatus, onStatusChange }) {
  const [agentId, setAgentId] = useState(null);
  const [agentName, setAgentName] = useState("WhatsApp AI Assistant");
  const [systemPrompt, setSystemPrompt] = useState(
    "You are a helpful and friendly WhatsApp AI assistant. Respond to customer inquiries professionally and concisely. Be warm and empathetic in your responses."
  );
  const [phoneNumberId, setPhoneNumberId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [verifyToken, setVerifyToken] = useState("");
  const [showAccessToken, setShowAccessToken] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState("");

  useEffect(() => {
    loadConfig();
    setWebhookUrl("https://www.brilworks.com/api/whatsapp/");
  }, []);

  const loadConfig = async () => {
    try {
      const { data, error } = await supabase
        .from("agent_config")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error && error.code !== "PGRST116") {
        console.error("Error loading config:", error);
        return;
      }

      if (data) {
        setAgentId(data.id);
        setAgentName(data.name);
        setSystemPrompt(data.system_prompt);
        setPhoneNumberId(data.whatsapp_phone_id || "");
        setAccessToken(data.whatsapp_token || "");
        setVerifyToken(data.whatsapp_verify_token || "");
        onStatusChange(data.is_active ? "active" : "inactive");
      }
    } catch (error) {
      console.error("Error loading config:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const configData = {
        name: agentName,
        system_prompt: systemPrompt,
        whatsapp_phone_id: phoneNumberId || null,
        whatsapp_token: accessToken || null,
        whatsapp_verify_token: verifyToken || null,
      };

      if (agentId) {
        const { error } = await supabase
          .from("agent_config")
          .update(configData)
          .eq("id", agentId);

        if (error) throw error;
      } else {
        const { data, error } = await supabase
          .from("agent_config")
          .insert([configData])
          .select()
          .single();

        if (error) throw error;
        if (data) setAgentId(data.id);
      }

      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    } catch (error) {
      console.error("Error saving config:", error);
      alert("Failed to save configuration. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const toggleAgent = async () => {
    if (!agentId) {
      alert("Please save configuration first");
      return;
    }

    try {
      const newStatus = agentStatus === "inactive";
      const { error } = await supabase
        .from("agent_config")
        .update({ is_active: newStatus })
        .eq("id", agentId);

      if (error) throw error;
      onStatusChange(newStatus ? "active" : "inactive");
    } catch (error) {
      console.error("Error toggling agent:", error);
      alert("Failed to update agent status. Please try again.");
    }
  };

  const isConfigComplete = phoneNumberId && accessToken && verifyToken;

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="md:p-8 p-5">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Agent Configuration
        </h2>
        <p className="text-slate-600">
          Configure your WhatsApp AI agent's behavior and credentials
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-xl md:p-6 p-4">
          <div className="flex items-start gap-3 mb-4">
            <Bot className="w-5 h-5 text-slate-700 mt-1" />
            <div className="flex-1">
              <label
                htmlFor="agentName"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Agent Name
              </label>
              <input
                id="agentName"
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter agent name"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Bot className="w-5 h-5 text-slate-700 mt-1" />
            <div className="flex-1">
              <label
                htmlFor="systemPrompt"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                System Prompt
              </label>
              <textarea
                id="systemPrompt"
                value={systemPrompt}
                onChange={(e) => setSystemPrompt(e.target.value)}
                rows={6}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Define your agent's personality and behavior..."
              />
              <p className="text-xs text-slate-500 mt-2">
                This prompt defines how your AI agent will respond to messages
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl md:p-6 p-4">
          <div className="flex items-center gap-2 mb-4">
            <Key className="w-5 h-5 text-amber-700" />
            <h3 className="text-lg font-semibold text-slate-800">
              WhatsApp Credentials
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="phoneNumberId"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Phone Number ID
              </label>
              <input
                id="phoneNumberId"
                type="text"
                value={phoneNumberId}
                onChange={(e) => setPhoneNumberId(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your WhatsApp Phone Number ID"
              />
            </div>

            <div>
              <label
                htmlFor="accessToken"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Access Token
              </label>
              <div className="relative">
                <input
                  id="accessToken"
                  type={showAccessToken ? "text" : "password"}
                  value={accessToken}
                  onChange={(e) => setAccessToken(e.target.value)}
                  className="w-full px-4 py-2.5 pr-12 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your WhatsApp Access Token"
                />
                <button
                  type="button"
                  onClick={() => setShowAccessToken(!showAccessToken)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showAccessToken ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="verifyToken"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Webhook Verify Token
              </label>
              <input
                id="verifyToken"
                type="text"
                value={verifyToken}
                onChange={(e) => setVerifyToken(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your webhook verification token"
              />
              <p className="text-xs text-slate-500 mt-2">
                Use this same token when configuring your webhook in Meta
              </p>
            </div>

            {webhookUrl && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Webhook URL (Configure in Meta)
                </label>
                <div className="bg-slate-100 border border-slate-300 rounded-lg px-4 py-2.5">
                  <code className="text-sm text-slate-700 break-all">
                    {webhookUrl}
                  </code>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  Use this URL when configuring your webhook in Meta Business
                  Platform
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl md:p-6 p-4">
          <div className="flex items-center gap-2 mb-4">
            <Bot className="w-5 h-5 text-green-700" />
            <h3 className="text-lg font-semibold text-slate-800">
              API Integration Endpoint
            </h3>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Database API Endpoint
            </label>
            <div className="bg-slate-100 border border-slate-300 rounded-lg px-4 py-2.5">
              <code className="text-sm text-slate-700 break-all">
                https://jhckqsdepgmrsmwwuour.supabase.co/functions/v1/whatsapp-api
              </code>
            </div>
            <div className="text-xs text-slate-600 mt-3 space-y-2">
              <p className="font-semibold">
                Your webhook should call this endpoint:
              </p>
              <div className="bg-white rounded p-2 border border-slate-200">
                <p className="mb-1">
                  <strong>POST</strong> - Store incoming message & get history:
                </p>
                <code className="text-xs">
                  {
                    '{ "from": "+1234567890", "message": "text", "messageId": "optional" }'
                  }
                </code>
              </div>
              <div className="bg-white rounded p-2 border border-slate-200">
                <p className="mb-1">
                  <strong>PUT</strong> - Store AI response:
                </p>
                <code className="text-xs">
                  {'{ "to": "+1234567890", "response": "AI response text" }'}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between gap-4 md:pt-4 p-0">
          <button
            onClick={toggleAgent}
            disabled={!isConfigComplete || !agentId}
            className={`w-full sm:w-fit flex items-center md:justify-start justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              !isConfigComplete || !agentId
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : agentStatus === "active"
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-lg"
                : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-md hover:shadow-lg"
            }`}
          >
            <Power className="w-5 h-5" />
            {agentStatus === "active" ? "Deactivate Agent" : "Activate Agent"}
          </button>

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="w-full sm:w-fit flex items-center md:justify-start justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl font-semibold hover:from-slate-800 hover:to-slate-900 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-5 h-5" />
                {isSaved ? "Saved!" : "Save Configuration"}
              </>
            )}
          </button>
        </div>

        {!isConfigComplete && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-sm text-yellow-800">
              Please complete all WhatsApp credential fields before activating
              your agent
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
