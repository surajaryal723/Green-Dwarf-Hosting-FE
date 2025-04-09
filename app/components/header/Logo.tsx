"use client";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";



export default function Logo(){

    // reference for logo
    const logoRef = useRef(null);

    
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to(logoRef.current, {
          y:0,
          duration:0.5,
         
          ease:'expo.out'
          
        });
      }, logoRef);
  
      return () => ctx.revert(); //cleanup on unmount
    }, []);


    return <div className="w-[25%] overflow-hidden logo-container">
      <Link href={"/"}>
    <h2 className="text-white translate-y-[100%] text-4xl  flex gap-x-2 items-center logo-text" ref={logoRef}>
      green dwarf <sup className="text-[14px] opacity-[0.7]">TM</sup>
    </h2>
  </Link>
    </div>
}