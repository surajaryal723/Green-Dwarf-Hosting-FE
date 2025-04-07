// this component wraps any element that needs to be animated on X and Y axis

import { ReactNode } from "react";

export default function Boundary({children}:{children:ReactNode}){
    return <div className="w-fit overflow-hidden">
        {children}
    </div>
}