import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Script from "next/script";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "./components/StoryblokProvider";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
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
          <meta
            property="article:publisher"
            content="https://www.facebook.com/brilwork/"
          />
          {process.env.VERCEL_ENV !== "production" ? (
            <meta name="robots" content="noindex,nofollow" />
          ) : null}
          {process.env.VERCEL_ENV === "production" && (
            <>
              <Script id="tag-manager">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','${process.env.googleTagManagerID}')`}</Script>
              <Script id="facebook-pixel-tracker">
                {`!function(f,b,e,v,n,t,s)
             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
             n.queue=[];t=b.createElement(e);t.async=!0;
             t.src=v;s=b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t,s)}(window, document,'script',
             'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '${process.env.facebook_pixelID}');
             fbq('track', 'PageView');
             `}
              </Script>
              <Script
                async
                src={`${process.env.clearbitScript_URL}`}
                referrerpolicy="strict-origin-when-cross-origin"
              ></Script>
            </>
          )}
        </head>
        <body suppressHydrationWarning={true}>
          {process.env.VERCEL_ENV === "production" && (
            <>
              <noscript>
                <iframe
                  src={`https://www.googletagmanager.com/ns.html?id=${process.env.googleTagManagerID}`}
                  height="0"
                  width="0"
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                ></iframe>
              </noscript>
              <noscript>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src={`https://www.facebook.com/tr?id=${process.env.facebook_pixelID}&ev=PageView&noscript=1`}
                />
              </noscript>
            </>
          )}
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
