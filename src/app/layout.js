import "./globals.css";
import "./styles/Homepage.scss";
import "./styles/button.scss";
import CurrentHeader from "./components/Header/CurrentHeader";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import { NextAuthProvider } from "./provider";
import { Figtree, Plus_Jakarta_Sans, Inter } from "next/font/google";
// import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from "next/dynamic";

// FONT SWAP: To revert to Figtree, change plusJakartaSans variable back to "--font-heading"
//            and figtree variable back to "--global-font"
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree", // was "--global-font" — kept loaded for easy revert
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font", // was "--font-heading" — now the primary site font
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

const Footer = dynamic(() => import("./components/Footer"));
const CookieConsent = dynamic(
  () => import("./components/CookieConsent/CookieConsent"),
  { ssr: false }
);

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <NextAuthProvider>
      <html lang="en" className={`${figtree.variable} ${plusJakartaSans.variable} ${inter.variable}`}>
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
          <CookieConsent />
        </body>
      </html>
      </NextAuthProvider>
    </StoryblokProvider>
  );
}
