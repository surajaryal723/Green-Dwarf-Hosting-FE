"use client";
import NavLink from "./NavLink";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function NavLinks() {
  // gsap animation for navlinks

  const navRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("[data-animate-navlink]", {
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-[50%] flex items-center justify-center gap-x-8"
    >
      <NavLink linkText="Home" url="/" />
      <NavLink linkText="About Us" url="/about" />
      <NavLink linkText="Hosting Plans" url="/plans" />
      <NavLink linkText="Contact" url="/contact" />
    </nav>
  );
}
