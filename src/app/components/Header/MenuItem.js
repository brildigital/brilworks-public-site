"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ path, onClick, name, className, theme }) => {
  const pathname = usePathname();
  const isEnterprise = theme === "enterprise";

  return (
    <Link href={path} onClick={onClick} className={className}>
      <p
        className={`!mb-0 w-full whitespace-normal font-normal ${
          pathname === path
            ? isEnterprise
              ? "!text-[#2F6BFF] !font-semibold"
              : "page-active"
            : isEnterprise
              ? "text-[#0B1E33] hover:!text-[#2F6BFF]"
              : "hover:!text-themeColor"
        }`}
        style={isEnterprise ? { fontFamily: "var(--font-body)" } : undefined}
      >
        {name}
      </p>
    </Link>
  );
};

export default MenuItem;
