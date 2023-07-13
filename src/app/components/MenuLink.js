import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const MenuLink = ({ blok }) => (
  <Link
    href={blok.link.cached_url}
    {...storyblokEditable(blok)}
    className="uppercase"
  >
    {blok?.logo?.filename && (
      <div className="flex_30_mega_menu">
        <img src={blok?.logo?.filename} width="60" alt="fintech" />
      </div>
    )}
    {blok.name}
  </Link>
);
export default MenuLink;
