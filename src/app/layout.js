import "./globals.css";
import "./styles/Homepage.scss";
import "./styles/button.scss";
import "./styles/tab-sticky-style.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import CurrentHeader from "./components/Header/CurrentHeader";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
// import { GoogleTagManager } from '@next/third-parties/google'
import dynamic from "next/dynamic";
import LoadScripts from "./ScriptLoader";
import Script from "next/script";
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
          <Script
            id="gtm-config"
            strategy="afterInteractive"
          >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.googleTagManagerID}');`}</Script>
        </head>
        <body suppressHydrationWarning={true}>
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
