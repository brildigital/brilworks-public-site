import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Script from "next/script";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";

storyblokInit({
  accessToken: process.env.accessToken,
  use: [apiPlugin],
});

export default function RootLayout({ children }) {
  if (!children) {
    return "";
  }
  return (
    <StoryblokProvider>
      <html lang="en">
        <head>
          <Script id="tag-manager">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M4XXLBF')`}</Script>
          <Script
            async
            src="https://tag.clearbitscripts.com/v1/pk_f9fe6debac833207b03cd37c138854ec/tags.js"
            referrerpolicy="strict-origin-when-cross-origin"
          ></Script>
        </head>
        <body suppressHydrationWarning={true}>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-M4XXLBF"
              height="0"
              width="0"
              style={{
                display: "none",
                visibility: "hidden",
              }}
            ></iframe>
          </noscript>
          {children}
        </body>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></Script>
      </html>
    </StoryblokProvider>
  );
}
