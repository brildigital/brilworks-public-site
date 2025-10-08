import { ExternalLink, CheckCircle, AlertCircle } from "lucide-react";

export default function SetupGuide() {
  const steps = [
    {
      title: "Create WhatsApp Business Account",
      description:
        "Sign up for a WhatsApp Business Platform account through Meta",
      link: "https://business.facebook.com/wa/manage/home/",
      linkText: "Go to Meta Business",
    },
    {
      title: "Get Your Phone Number ID",
      description:
        "Navigate to WhatsApp > API Setup and copy your Phone Number ID",
      details:
        "This unique identifier is used to send messages from your WhatsApp Business number",
    },
    {
      title: "Generate Access Token",
      description: "Create a permanent access token in your Meta App settings",
      link: "https://developers.facebook.com/docs/whatsapp/business-management-api/get-started",
      linkText: "View Documentation",
    },
    {
      title: "Configure Webhook",
      description: "Set up webhook URL to receive incoming messages",
      details: (
        <>
          Your webhook URL will be:
          <br /> [YOUR_SUPABASE_URL]/functions/v1/whatsapp-webhook
        </>
      ),
    },
    {
      title: "Set Verify Token",
      description: "Create a verification token for webhook security",
      details:
        "Use any random string - you'll need this when configuring your webhook in Meta",
    },
    {
      title: "Subscribe to Messages",
      description:
        'Enable "messages" webhook field in your WhatsApp configuration',
      details: "This allows your agent to receive incoming customer messages",
    },
  ];

  return (
    <div className="md:p-8 p-5">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Getting Started
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Follow these steps to set up your WhatsApp AI Agent. This guide will
          help you configure the WhatsApp Business API and connect it to your
          intelligent agent.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-6 mb-8">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-800 mb-1">
              Important Note
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              You'll need a WhatsApp Business Platform account to use this
              agent. The setup process requires approval from Meta, which
              typically takes 1-2 business days.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group border border-slate-200 rounded-xl md:p-6 p-4 hover:border-green-300 hover:shadow-md transition-all duration-200"
          >
            <div className="flex lg:gap-4 gap-2">
              <div className="flex-shrink-0">
                <div className="lg:w-10 w-8 lg:h-10 h-8  rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-3">{step.description}</p>
                {step.details && (
                  <div className="flex flex-wrap bg-slate-50 border border-slate-200 rounded-lg p-3 mb-3">
                    <p className="text-sm text-slate-700 flex flex-wrap break-all overflow-hidden">
                      {step.details}
                    </p>
                  </div>
                )}
                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    {step.linkText}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:mt-8 sm:mt-6 mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl md:p-6 p-4">
        <div className="flex gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-800 mb-2">
              Ready to Configure?
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Once you've completed the setup steps above, head to the
              Configuration tab to enter your credentials and customize your AI
              agent's behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
