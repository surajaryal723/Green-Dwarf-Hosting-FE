"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import Button from "../Button";
import Boundary from "../Boundry";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";



export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
      tl.to(
        ".animate-y",
        {
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        },
        "anim"
      );
      tl.to(
        ".animate-opacity",
        {
          opacity: 1,
          duration: 0.8,
        },
        "anim"
      );
      tl.to('.about-img',{
        clipPath:'polygon(0px 100%, 100% 100%, 100% 0px, 0px 0px)',
        duration:1
      },'anim')
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full p-[100px] flex justify-between bg-[#EFEEEC] about"
      ref={containerRef}
    >
      <div className="w-1/2 flex flex-col gap-4 ab-left">
        {/* about content heading */}

        <div>
          <Boundary>
            <h2 className="text-[2.2rem] leading-[2.8rem] translate-y-[100%] animate-y section-heading">
              About Green Dwarf Hosting
            </h2>
          </Boundary>
         
        </div>

        {/* about content paragraph */}

        <div>
          <Boundary>
            <p className="translate-y-[100%] animate-y">
            Green Dwarf Hosting is a reliable and eco-friendly web hosting company dedicated to helping

individuals and businesses establish a strong online presence. With a focus on sustainability,

speed, and top-notch customer support, Green Dwarf Hosting offers a range of hosting solutions—from shared and cloud hosting to dedicated servers. Our mission is to make web

hosting simple, affordable, and environmentally conscious, empowering clients to grow their

digital footprint while minimizing their carbon impact.
            </p>
          </Boundary>
         
        </div>

        <div className="opacity-0 animate-opacity">
          <Boundary>
            <Link href="/about">
            <Button
              variant="secondary"
              size="md"
              title="Get More Information"
            />
            </Link>
          </Boundary>
        </div>
      </div>
      <div className="w-1/2 flex justify-end ab-right">
      <Image src={'/about.svg'} alt="about-image" height={"100"} width={"100"} className="w-[80%] about-img" style={{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'}}/>
      </div>
    </div>
  );
}
