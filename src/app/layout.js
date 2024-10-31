import "./globals.css";
import "./styles/Homepage.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
// import { NextAuthProvider } from "./provider"
import { Inter } from "next/font/google";
import Script from "next/script";
// import { GoogleTagManager } from '@next/third-parties/google'
import { organization, website } from "./components/lib/schemaCode";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font",
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

import Header from "./components/Header/Header";
import LoadScripts from "./ScriptLoader";

const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className={`${inter.variable}`}>
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/brilwork/"
          />
          {process.env.VERCEL_ENV !== "production" && (
            <meta name="robots" content="noindex,nofollow" />
          )}
          {process.env.VERCEL_ENV !== "production" && (
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
          )}
        </head>
        <body suppressHydrationWarning={true}>
          <Header />
          {/* <NextAuthProvider> */}
          {children}
          {/* </NextAuthProvider> */}
          <Footer />
          {/* <LoadScripts
            organization={organization}
            website={website}
            gtm={process.env.googleTagManagerID}
            clr={process.env.clearbitScript_URL}
          /> */}
        </body>
      </html>
    </StoryblokProvider>
  );
}
