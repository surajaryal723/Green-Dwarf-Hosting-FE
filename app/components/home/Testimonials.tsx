"use client"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import Boundary from "../Boundry"
import TestimonialCard from "./TestimonialCard";



export default function Testimonials(){
   
    gsap.registerPlugin(ScrollTrigger);
    const containerRef=useRef(null)
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);
    useLayoutEffect(()=>{
        const ctx=gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:'top 80%',
                    
                }
            })
            tl.to(".animate-y",{
                y:0,
                duration:0.8,
                ease:'power2.out'
            })
           const testimonialsAnim =  gsap.to('.testimonials',{
                transform:'translateX(calc(-100% - 20px))',
                duration:10,
                repeat:-1,
                ease:'none'
            })

            animationRef.current=testimonialsAnim
           
            

        },containerRef)
        
        return ()=>ctx.revert()
    },[])

    const handleMouseEnter = () => {
        animationRef.current?.pause();
      };
    
      const handleMouseLeave = () => {
        animationRef.current?.play();
      };


      const testimonials = [
        {
          name: 'Emily Roberts',
          testimonial:
            "Switching to this hosting provider was the best decision for my business. The uptime is rock solid, and my website loads faster than ever. Their support team is always available and incredibly helpful. I finally feel like my website is in safe, reliable hands 24/7.",
        },
        {
          name: 'Liam Patterson',
          testimonial:
            "I've tried multiple hosting services, but none compare to this one. Setup was quick, and migrating my site was completely stress-free. Their dashboard is user-friendly, and I haven't experienced a single outage. The performance and support are top-notch. Highly recommended for serious website owners.",
        },
        {
          name: 'Ayesha Khan',
          testimonial:
            "Their customer support is unmatched. I had questions during setup, and they responded instantly with clear, helpful answers. My site loads super fast, and I’ve never had downtime issues. It’s comforting to know my hosting is reliable and backed by a team that actually cares.",
        },
        {
          name: 'Jacob Li',
          testimonial:
            "As a developer, performance and uptime are crucial for my clients. This hosting provider delivers on both. The speed is incredible, and their servers are optimized for the latest technologies. I’ve recommended them to multiple clients and will continue doing so without hesitation.",
        },
        
      ];
      

    return <div className="w-full  bg-[#EFEEEC] py-[100px] flex flex-col overflow-hidden" ref={containerRef}>
        <div className="w-full flex justify-center">
            <Boundary>
            <h2 className="text-[2.2rem] leading-[2.8rem] translate-y-[100%] animate-y text-black">
          Customer Testimonials
        </h2>
            </Boundary>
        </div>
            
        <div className="relative mt-10">
            <div className="absolute inset-0  z-10 testimonials-overlay pointer-events-none"></div>
        <div className="flex gap-[20px]  testimonials " ref={testimonialsRef} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <div className="w-fit flex gap-[20px] shrink-0">
                {testimonials.map((testimonial,idx)=>{
                    return <TestimonialCard key={idx} name={testimonial.name} testimonial={testimonial.testimonial}/>
                })}
            </div><div className="w-fit shrink-0 flex gap-[20px]">
            {testimonials.map((testimonial,idx)=>{
                    return <TestimonialCard key={idx} name={testimonial.name} testimonial={testimonial.testimonial}/>
                })}
            </div>
        </div>
        </div>
    </div>
}