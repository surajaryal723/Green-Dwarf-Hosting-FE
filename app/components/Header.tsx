// import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"
import Button from "./Button"



export default function Header(){
    return <div className="w-full px-[100px] py-[20px] bg-transparent flex items-center justify-between  -mb-[100px] absolute z-10">
        <div className="w-[25%]">
        <Link href={"/"}>
        <h2 className="text-white text-4xl flex gap-x-2 items-center">green dwarf <sup className="text-[14px] opacity-[0.7]">TM</sup></h2>
        </Link>
        </div>
        <nav className="w-[50%] flex items-center justify-center gap-x-8">
            <NavLink linkText="Home" url="/"/>
            <NavLink linkText="About Us" url="/about"/>
            <NavLink linkText="Hosting Plans" url="/plans"/>
            <NavLink linkText="Contact" url="/contact"/>
        </nav>
        <div className="w-[25%] flex items-center justify-end gap-8">
            <Link href={""} className="text-white">Log in</Link>
            <Button variant="primary" size="sm" title="Get Started"/>

        </div>
    </div>
}