"use client"

import Link from "next/link";
import Image from "next/image";

import MenuImage from "@/assets/menu.svg"
import CloseImage from "@/assets/close.svg"
import {useState} from "react";
import {navLinks} from "@/lib/constants";
import {twMerge} from "tailwind-merge";


const NavItems = () => {
    return (
        <div>
            <ul className={"nav-ul"}>
                {navLinks.map(({name, id, href}
                ) => (
                    <li key={id} className={"nav-li"}>
                        <Link href={href} className={"nav-li_a"} onClick={() => {
                        }}>
                            {name}
                        </Link>
                    </li>
                ))}


            </ul>
        </div>
    )

}


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className={" fixed top-0 text-white left-0 right-0 z-50 bg-black/90"}>
            <div className={"mx-auto max-w-7xl"}>
                <div className={"flex justify-between items-center py-5 mx-auto c-space"}>
                    <Link href={"/"}
                          className={"text-neutral-400 font-bold text-xl hover:text-white transition-colors"}>
                        <p> Rahul </p>
                    </Link>
                    <button onClick={handleClick} aria-label={"Toggle menu"}
                            className={"text-neutral-400 hover:text-white focus:outline-none md:hidden flex"}>
                        <Image src={isOpen ? CloseImage : MenuImage} alt={"Toggle menu"}
                               className={"w-6 h-6 text-white"}/>
                    </button>
                    {/*NAVIGATION ITEMS - START*/}

                    {/* DESKTOP NAV*/}
                    <nav className={"hidden md:flex"}>
                        <NavItems/>
                    </nav>
                    {/*NAVIGATION ITEMS - END*/}

                </div>
            </div>

            {/*MOBILE NAV*/}
            <div className={twMerge("nav-sidebar", isOpen ? "max-h-screen" : "max-h-0")}>
                <nav className={"p-5"}>
                    <NavItems/>
                </nav>
            </div>

        </header>
    )
}
