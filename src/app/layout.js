import "./globals.css";
import "./styles/Homepage.css";
import "./styles/button.scss";
import "./styles/tab-sticky-style.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { PostHogProvider } from "./provider";
import CurrentHeader from "./components/Header/CurrentHeader";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import { Figtree, Roboto } from "next/font/google";
import Script from "next/script";
// import { GoogleTagManager } from '@next/third-parties/google'
import {
  organization,
  website,
  localBusiness,
} from "./components/lib/schemaCode";
import dynamic from "next/dynamic";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--global-font",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
});

import LoadScripts from "./ScriptLoader";

const Footer = dynamic(() => import("./components/Footer"));

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en" className="scroll-smooth">
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta
            property="article:publisher"
            content="https://www.facebook.com/brilwork/"
          />
          <meta name="robots" content="index, follow" />
          <link rel="preload" href="/images/v2/hero-pg-main.webp" as="image" />
          <link rel="preconnect" href="https://d14lhgoyljo1xt.cloudfront.net" />
          <link rel="preconnect" href="https://api.storyblok.com" />
          <link rel="preconnect" href="https://a.storyblok.com" />
          <Script
            src={`https://www.googletagmanager.com/gtm.js?id=${process.env.googleTagManagerID}`}
            strategy="afterInteractive"
          />
        </head>
        <body
          suppressHydrationWarning={true}
          className={`${figtree.variable} ${roboto.variable}`}
        >
          <Script id="vector-script" strategy="lazyOnload">
            {`
          !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("1a1e4f1f-0942-4b35-bbad-8ef11726a7e4");
        `}
          </Script>
          {/* <Script
            defer
            id="chatbot"
          >{`window.chatBotConfig = {agentId:214}`}</Script>
          <Script
            defer
            id="chatbot-widget-script"
            src="https://app.swiftsupport.ai/ChatbotScripts/chatbotBubble.js"
          /> */}
          {/* <Header /> */}
          {/* <HeaderV2 /> */}
          <CurrentHeader />
          <PostHogProvider>{children}</PostHogProvider>
          <Footer />
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
