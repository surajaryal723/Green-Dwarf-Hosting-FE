"use client";

import Link from "next/link";
import Boundary from "./Boundry";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
         
        },
      });
      tl.to(".animate-y", {
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      className="w-full px-[100px] py-[30px] flex items-center bg-[var(--primary-color)] footer"
      ref={containerRef}
    >
      <div className="w-1/2 ftl">
        <Boundary>
          <h4 className="text-white translate-y-[100%] animate-y">
            Copyright &copy; <span>{new Date().getFullYear()}</span> - Green
            Dwarf Hosting. All Rights Reserved!
          </h4>
        </Boundary>
      </div>
      <div className="w-1/2 flex items-center justify-end gap-4 ftr">
        <Boundary>
          <Link
            href={"/"}
            className="text-white translate-y-[100%] inline-block animate-y"
          >
            Home
          </Link>
        </Boundary>
        <Boundary>
          <Link
            href={"/about"}
            className="text-white translate-y-[100%] inline-block animate-y"
          >
            About
          </Link>
        </Boundary>
        <Boundary>
          <Link
            href={"/plans"}
            className="text-white translate-y-[100%] inline-block animate-y"
          >
            Hosting Plans
          </Link>
        </Boundary>
        <Boundary>
          <Link
            href={"/contact"}
            className="text-white translate-y-[100%] inline-block animate-y"
          >
            Contact
          </Link>
        </Boundary>
      </div>
    </footer>
  );
}
