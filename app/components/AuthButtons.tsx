"use client"
import Button from "./Button";
import Link from "next/link";
import gsap from "gsap";
import { useLayoutEffect,useRef } from "react";


export default function AuthButtons(){

const containerRef=useRef(null)

useLayoutEffect(()=>{
    const ctx=gsap.context(()=>{
        gsap.to('.auth-btn',{
opacity:1,
duration:1,
ease:'power2.out'
})
    },containerRef)

return ()=>ctx.revert()

},[])

    return <div className="w-[25%] flex items-center justify-end gap-8" ref={containerRef}>
    <Link href={"#"} className="text-white opacity-0 auth-btn">
      Log in
    </Link>
    <Button variant="primary" size="sm" title="Get Started" onClick={()=>alert('Redirect to signup page')} className="opacity-0 auth-btn" />
  </div>
}