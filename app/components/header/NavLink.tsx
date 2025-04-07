"use client";
import Link from "next/link";


export default function NavLink({
  linkText,
  url,
}: {
  linkText: string;
  url: string;
}) {
  

  return (
    <Link
      className="text-white text-[1rem] overflow-hidden"
      href={url}
    >
      <span className="inline-block translate-y-[100%]" data-animate-navlink>
        {linkText}
      </span>
    </Link>
  );
}
