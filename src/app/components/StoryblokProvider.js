"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Header from "./Header/Header";
import HeaderMenu from "./HeaderMenu";
import MenuLink from "./MenuLink";
import Config from "./Config";
import Layout from "./Layout";
import Footer from "./Footer";
import Article from "./Article";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Header: Header,
  config: Config,
  layout: Layout,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  footer: Footer,
  Article: Article,
};

storyblokInit({
  accessToken: process.env.accessToken,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
