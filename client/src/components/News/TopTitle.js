import { NavLink } from "react-router-dom"

export default function TopTitle({title , topic}){
    return(
        <NavLink to={topic}>
        <div className="group border-l-red-600 border-l-[2px] mb-2 hover:border-l-black">
            <h3 className=" pl-2 text-2xl font-semibold font-sans font-text text-red-500 group-hover:text-black">{title}</h3> 
        </div>
        </NavLink>
    )
}