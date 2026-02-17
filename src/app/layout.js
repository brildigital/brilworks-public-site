import "./globals.css";
import "./styles/Homepage.scss";
import CurrentHeader from "./components/Header/CurrentHeader";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import { Figtree } from "next/font/google";
// import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from "next/dynamic";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font",
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className={`${figtree.variable}`}>
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/brilwork/"
          />
          <meta name="robots" content="noindex,nofollow" />
          {/* {process.env.VERCEL_ENV !== "production" && (
            <>
              <Script
                defer
                id="chatbot"
              >{`window.chatBotConfig = {agentId:155}`}</Script>
              <Script
                defer
                id="chatbot-widget-script"
                src="https://app.swiftsupport.ai/ChatbotScripts/chatbotBubble.js"
              />
            </>
          )} */}
        </head>
        <body suppressHydrationWarning={true}>
          <CurrentHeader />
          {children}
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
