"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ArticleSkeleton } from "./Blog/ArticleSkeleton";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Header from "./Header/Header";
// import HeaderMenu from "./HeaderMenu";
// import MenuLink from "./MenuLink";
// import Config from "./Config";
import Layout from "./Layout";
import dynamic from "next/dynamic";
import Article from "./Article";
// const HeaderMenu = dynamic(() => import('./HeaderMenu'));
// const MenuLink = dynamic(() => import('./MenuLink'));
// const Config = dynamic(() => import('./Config'));
const Footer = dynamic(() => import('./Footer'));
// const Article = dynamic(() => import('./Article'));
const PopularArticles = dynamic(() => import('./PopularArticles'));

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Header: Header,
  // config: Config,
  layout: Layout,
  // header_menu: HeaderMenu,
  // menu_link: MenuLink,
  footer: Footer,
  article: Article,
  popular_articles: PopularArticles,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  if (!children) {
    <ArticleSkeleton />;
  }
  return children;
}
