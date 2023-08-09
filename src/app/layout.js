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
        <body suppressHydrationWarning={true}>{children}</body>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></Script>
      </html>
    </StoryblokProvider>
  );
}
