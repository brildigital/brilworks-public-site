"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Header from "./Header";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Header: Header,
};

storyblokInit({
  accessToken: "gasBbmVVImrrTRQLlShorwtt",
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
