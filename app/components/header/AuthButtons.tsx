"use client";
import Button from "../Button";
import Link from "next/link";

import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import Boundary from "../Boundry";

export default function AuthButtons() {
  const [menuActive, setMenuActive] = useState(false);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".auth-btn", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-[25%]  flex items-center justify-end gap-8 relative"
      ref={containerRef}
    >
      <Link href={"#"} className="text-white opacity-0 auth-btn">
        Log in
      </Link>
      <Button
        variant="primary"
        size="sm"
        title="Get Started"
        onClick={() => alert("Redirect to signup page")}
        className="opacity-0 auth-btn"
      />
      <div
        className={`hamburger lg:hidden ${menuActive ? "is-active" : ""} `}
        onClick={() => {
          setMenuActive((prev) => !prev);
        }}
        id="hamburger-1"
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className={`mobile-menu ${menuActive ? 'translate-x-0' : 'translate-x-[200%]'} py-[100px] px-[30px] h-screen bg-[var(--primary-color)] fixed inset-0 flex flex-col lg:hidden gap-8 transition-all ease-in duration-300`}>

        <Boundary>
          <Link href={"/"}>
          <h4 className="text-white  text-4xl">Home</h4>
          </Link>
        </Boundary>
        <Boundary>
          <Link href={"/about"}>
          <h4 className="text-white  text-4xl">About</h4>
          </Link>
        </Boundary>
        <Boundary>
          <Link href={"/plans"}>
          <h4 className="text-white  text-4xl">Plans</h4>
          </Link>
        </Boundary>
        <Boundary>
          <Link href={"/contact"}>
          <h4 className="text-white  text-4xl">Contact</h4>
          </Link>
        </Boundary>
      </div>
    </div>
  );
}
