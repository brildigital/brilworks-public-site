"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ path, onClick, name, className }) => {
  const pathname = usePathname();

  return (
    <Link href={path} onClick={onClick} className={className}>
      {pathname.startsWith("/portfolio/") ? (
        <p
          className={`!mb-0 w-full whitespace-nowrap font-Urbanist ${
            pathname === path ? "page-active-blue" : "hover:!text-vividBlue"
          }`}
        >
          {name}
        </p>
      ) : (
        <p
          className={`!mb-0 w-full whitespace-nowrap ${
            pathname === path ? "page-active" : "hover:text-themeColor"
          }`}
        >
          {name}
        </p>
      )}
    </Link>
  );
};

export default MenuItem;
