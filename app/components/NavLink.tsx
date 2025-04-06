import Link from "next/link"



export default function NavLink({linkText,url}:{linkText:string,url:string}){
return <Link className="text-white text-[1rem]" href={url}>{linkText}</Link>
}