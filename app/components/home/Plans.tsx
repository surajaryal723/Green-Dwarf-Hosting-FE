"use client"

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import Boundary from "../Boundry";
import PlanCard from "./PlanCard";



export default function Plans() {
    gsap.registerPlugin(ScrollTrigger);
    const containerRef=useRef(null)

    useLayoutEffect(()=>{
        const ctx=gsap.context(()=>{
            const tl=gsap.timeline({
                scrollTrigger:{
                    trigger:containerRef.current,
                    start:'top 70%',
                    
                }
            })
            tl.to(".animate-y",{
                y:0,
                duration:0.8,
                ease:'power2.out'
            },'anim').to('[data-hosting-plan-animate]',{
                y:0,
                duration:0.8,
                stagger:0.2,
                ease:'power2.out'
            },'anim')

        },containerRef)

        return ()=>ctx.revert()
    },[])

  return (
    <div className="w-full min-h-screen  plans flex flex-col p-[100px] items-center" ref={containerRef} style={{backgroundImage:"url('/gradient.png')"}}>
     <div className="w-full flex justify-center">
     <Boundary>
        <h2 className="text-[2.2rem] leading-[2.8rem] translate-y-[100%] animate-y text-white">
          Popular Hosting Plans
        </h2>
      </Boundary>
     </div>
      <div className="w-full flex  gap-5 py-20 justify-center overflow-hidden">
        <PlanCard recommended={false} title="Web Hosting Starter" price="$4.99" features={['1 website','10 GB NvMe storage','cPanel control panel','30-day money back gurantee']}/>
        <PlanCard recommended={false} title="Web Hosting Economy" price="$5.99" features={['1 website','25 GB NvMe storage','cPanel control panel','Free domain','Free email','Free SSL Certificate - 1 year','30-day money back gurantee']}/>
        <PlanCard recommended={true} title="Web Hosting Deluxe" price="$7.99" features={['10 websites','50 GB NvMe storage','cPanel control panel','Free domain','Free email','Free SSL Certificate - lifetime','30-day money back gurantee']}/>
        <PlanCard recommended={false} title="Cloud Startup" price="$15.99" features={['10 websites','50 GB NvMe storage','cPanel control panel','Free domain','Free email','Free SSL Certificate - lifetime','30-day money back gurantee','100 mailboxes - free for 1 year','Daily and on-demand backups','Dedicated IP address','Priority Support']}/>
      </div>
    </div>
  );
}
