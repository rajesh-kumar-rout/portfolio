import { MdClose, MdMenu } from "react-icons/md"
import { siteName } from "./assets/app.json"
import { useState } from "react"

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    const links = [
        {
            label: "Home",
            link: "#home"
        },
        {
            label: "Skills",
            link: "#skills"
        },
        {
            label: "Education",
            link: "#education"
        },
        {
            label: "Projects",
            link: "#projects"
        },
        {
            label: "Contact",
            link: "#contact"
        },
    ]

    return (
        <nav className="border-b border-gray-400 h-16">
            <div className="max-w-5xl px-3 m-auto h-full flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold text-orange-600">{siteName}</a>

                <ul
                    className={`${showMenu ? "flex" : "hidden"} lg:flex flex-col lg:flex-row items-center gap-8 absolute top-16 left-0 right-0 lg:static py-4 lg:py-0 z-50 lg:z-0 border-b lg:border-b-0 border-gray-400 bg-slate-900`}
                >
                    {links.map(link => (
                        <li>
                            <a href={link.link} className="hover:text-orange-600 transition-all duration-300 font-medium text-gray-200">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setShowMenu(!showMenu)}
                    className="border border-orange-600 w-10 h-10 flex items-center justify-center text-orange-600 text-xl rounded-md visible lg:hidden cursor-pointer"
                >
                    {showMenu ? <MdClose size={24} /> : <MdMenu size={24} />}
                </div>
            </div>
        </nav>
    )
}