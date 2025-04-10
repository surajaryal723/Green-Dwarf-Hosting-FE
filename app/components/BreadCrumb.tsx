export default function Breadcrumb({title}:{title:string}){
    return <div className="w-full p-[100px] flex flex-col justify-center items-center gap-4 bg-[var(--secondary-color)] min-h-[40vh] breadcrumb">
        <h2 className="text-white text-[3rem]">{title}</h2>
        
    </div>
}