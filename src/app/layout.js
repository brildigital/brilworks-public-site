import "./globals.css";
import "./styles/Homepage.scss";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
// import { NextAuthProvider } from "./provider"
import { Inter } from "next/font/google";
// import Script from 'next/script'
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
import Script from "next/script";

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
        </head>
        <body suppressHydrationWarning={true}>
          {/* vector Script */}
          <Script id="vector-script" strategy="afterInteractive">
            {`
          !function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("1a1e4f1f-0942-4b35-bbad-8ef11726a7e4");
        `}
          </Script>
          {/* chat bot Script */}
          <>
            <Script
              defer
              id="chatbot"
            >{`window.chatBotConfig = {agentId:214}`}</Script>
            <Script
              defer
              id="chatbot-widget-script"
              src="https://app.swiftsupport.ai/ChatbotScripts/chatbotBubble.js"
            />
          </>

          <Header />
          {/* <NextAuthProvider> */}
          {children}
          {/* </NextAuthProvider> */}
          <Footer />
          <LoadScripts
            organization={organization}
            website={website}
            gtm={process.env.googleTagManagerID}
            clr={process.env.clearbitScript_URL}
          />
        </body>
        {/* {process.env.VERCEL_ENV === "production" && (
            <>
              <GoogleTagManager  gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
              <Script src={process.env.NEXT_PUBLIC_CLEARBIT_SCRIPT_URL} strategy="lazyOnload" />
              <Script id="organization" type="application/ld+json" strategy="lazyOnload">
                {JSON.stringify(organization)}
              </Script>
              <Script id="website" type="application/ld+json" strategy="lazyOnload">
                {JSON.stringify(website)}
              </Script>
            </>
          )} */}
      </html>
    </StoryblokProvider>
  );
}
