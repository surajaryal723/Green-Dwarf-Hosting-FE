"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Boundary from "../Boundry";
import Button from "../Button";
import Link from "next/link";

export default function HeroContent() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".animate-y", {
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
      gsap.from(".cta", {
        opacity: 0,
        duration: 0.8,
        delay: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center flex-col gap-5 relative z-5 "
      ref={containerRef}
    >
      <div className="w-full flex justify-center items-center flex-col ">
        <Boundary>
          <h1 className="hero-heading text-white text-[5rem] text-center leading-[6rem] font-[500] animate-y translate-y-[100%]">
            Fast & Scalable Hosting Solutions!
          </h1>
        </Boundary>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-2">
        <Boundary>
          <p className="text-white text-md text-center translate-y-[100%] animate-y hero-desc w-[60%]">
            Green Dwarf Hosting is a leading web hosting solutions provider
            dedicated to delivering reliable, secure, and scalable hosting
            services for businesses of all sizes. With a strong focus on
            performance and customer satisfaction, we offer a comprehensive
            range of services including Shared Hosting, Cloud Hosting, VPS,
            Dedicated Servers, and Managed WordPress Hosting.
          </p>
        </Boundary>
      </div>
      <div className="w-full flex items-center justify-center gap-2 mt-4">
        <Link href={"/contact"} className="cta">
          <Button title="Get Started Now!" variant="primary" size="md" />
        </Link>
      </div>
    </div>
  );
}
