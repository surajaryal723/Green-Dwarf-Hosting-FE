// define the interface for button props

interface ButtonProps{
    size:'sm'|'md'|'lg',
    title:string,
    variant:'primary'|'secondary',
    onClick?:()=>void,
    className?:string

}

// define tailwind classes for various sizes

const sizeStyles={
    'sm':'text-[1rem] px-4 py-2',
    'md':'text-[1.1rem] py-3 px-8',
    'lg':'text-[1.4rem] py-4 px-10'
}

// define tailwind classes for various button variants

const variantStyles={
    'primary':'bg-[#EFEEEC] text-black hover:bg-white',
    'secondary':'bg-[#153668] text-white hover:bg-blue-900'
}


// define the default styles applied to all the buttons

const defaultStyles='rounded-sm hover:cursor-pointer transition-all ease-linear'

export default function Button(props:ButtonProps){
    return <button onClick={props.onClick} className={`${sizeStyles[props.size]} ${variantStyles[props.variant]} ${defaultStyles} ${props.className}`}>{props.title}</button>
}