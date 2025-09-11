import "./globals.css";
import "./styles/Homepage.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
// import { NextAuthProvider } from "./provider"
import { Inter, Figtree } from "next/font/google";
import Script from "next/script";
// import { GoogleTagManager } from '@next/third-parties/google'
import { organization, website } from "./components/lib/schemaCode";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font-v1",
});
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font",
});

// const urbanist = Urbanist({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--global-font",
// });

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

import CurrentHeader from "./components/Header/CurrentHeader";
// import LoadScripts from "./ScriptLoader";

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
          {/* <Header /> */}
          {/* <HeaderV2 /> */}
          <CurrentHeader />
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
