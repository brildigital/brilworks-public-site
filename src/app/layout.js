import "./globals.css";
import "./styles/Homepage.scss";
import "./styles/button.scss";
import "./styles/tab-sticky-style.scss";
import CurrentHeader from "./components/Header/CurrentHeader";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
// import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from "next/dynamic";
import LoadScripts from "./ScriptLoader";
import ScrollRevealInit from "./components/Common/ScrollRevealInit";
import PostHogProvider from "./components/PostHogProvider";
import {
  organization,
  website,
  localBusiness,
} from "./components/lib/schemaCode";

// FONT SWAP: To revert to Figtree, change plusJakartaSans variable back to "--font-heading"
//            and figtree variable back to "--global-font"
// const figtree = Figtree({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-figtree", // was "--global-font" — kept loaded for easy revert
// });

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

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-enterprise",
  weight: ["400", "500"],
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html
        lang="en"
        className={` ${plusJakartaSans.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      >
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/brilwork/"
          />
          <meta
            name="google-site-verification"
            content="hNJJZ9uUBRBPzUqYVEdl5yrr5nyaY_t6kU6KQyLDU0M"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
          />
        </head>
        <body suppressHydrationWarning={true}>
          {/* <Script
            defer
            id="chatbot"
          >{`window.chatBotConfig = {agentId:214}`}</Script>
          <Script
            defer
            id="chatbot-utility-script"
            src="https://app.swiftsupport.ai/ChatbotScripts/chatbotBubble.js"
          /> */}
          {/* <Header /> */}
          {/* <HeaderV2 /> */}
          <PostHogProvider>
            <CurrentHeader />
            {children}
            <Footer />
            <CookieConsent />
          </PostHogProvider>
          <ScrollRevealInit />
          <LoadScripts
            organization={organization}
            website={website}
            localBusiness={localBusiness}
            gtm={process.env.googleTagManagerID}
            clr={process.env.clearbitScript_URL}
          />
        </body>
      </html>
    </StoryblokProvider>
  );
}
