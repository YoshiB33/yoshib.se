import Link from "next/link"
import { useState } from "react"

function NavLink({to, children}) {
    return <a href={to} className={`mx-4 text-white`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-slate-800 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out `}>

            <div className="flex flex-col pl-4">
                <Link className="py-5 text-3xl text-white border-b" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>YoshiB.se</Link>
                <Link className="my-4 text-xl font-medium text-white" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </Link>
                <a className="my-4 text-xl font-normal text-white" href="/projects" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Projects
                </a>
                <Link className="my-4 text-xl font-normal text-white" href="/privacy-policy" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Privacy policy
                </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="sticky top-0 z-40 flex items-center w-full h-20 px-12 py-4 bg-transparent border-b border-slate-800 drop-shadow-md backdrop-blur md:px-16 lg:px-36">
            <MobileNav open={open} setOpen={setOpen}/>
            <h1 className="text-xl text-white ">YoshiB.se</h1>
            <div className="w-auto ml-auto">

                <div className="relative z-50 flex flex-col items-center justify-between w-5 h-5 md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                    <NavLink to="/privacy-policy">
                        Privacy policy
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}