import React, { useState } from "react";
import { Link } from "gatsby";

// Import icons.
import { HiMenu } from "@react-icons/all-files/hi/HiMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";


type LinkTypes = {
    title: string,
    link: string
}


interface NavbarPropTypes {
    readonly navOptions: {
        title: string,
    },
    general: {
        menu?: boolean
        menuColor?: "white" | "#333241",
        navColor?: "bg-primary" | "bg-white",
        textColor?: string,
    } 
}


export const navLinks: Array<LinkTypes> = [
    {
        title: "About",
        link: "/about/"
    },
    {
        title: "Work",
        link: "/work/"
    },
    {
        title: "Contact",
        link: "/contact/"
    }
];


const Navbar: React.FC<NavbarPropTypes["general"]> = ({
    navColor="bg-primary", textColor="text-white", menuColor="white" }) => {
    const [ menu, setMenu ] = useState<NavbarPropTypes["general"]["menu"]>(false);
    const [ navTitle ] = useState<NavbarPropTypes["navOptions"]["title"]>("kegan Overberg");


    const navLinksComp = (item: LinkTypes): JSX.Element => {
        return(
            <div className={`inline hover:border-b-2 ${menuColor === "white"? "hover:border-b-white" : "hover:border-b-primary"} pb-2 cursor-pointer`}>
                <Link className={textColor} to={ item.link }>{ item.title }</Link>
            </div>
        );
    }
    

    const openMenu = (): JSX.Element => {
        return(
            <div className={`top-0 fixed z-40 w-full h-screen text-center space-y-8 p-8 ${textColor} ${navColor}`}>

                <div className="right-5 absolute top-5">
                    <button onClick={() => setMenu(false)}><AiOutlineClose size={25} color={menuColor}/></button>
                </div>

                {
                navLinks.map(
                    item => <div><Link className={`font-semibold text-2xl ${textColor}`} to={ item.link }>{ item.title }</Link></div>
                    )}
            </div>
        );
    }


    return(
        <>
            <nav className={`w-full py-5 px-4 sm:px-24 flex ${navColor} ${textColor}`}>
                <div className="w-full">
                    <Link to="/"><h4 className="text-base">{ navTitle }</h4></Link>
                </div>

                <div className="hidden sm:block w-full text-right space-x-12">
                    { navLinks.map(item => navLinksComp(item)) }
                </div>

                <div className="sm:hidden">
                    <button onClick={() => setMenu(true)}>
                        <HiMenu size={27} />
                    </button>
                </div>
            </nav>

            { menu? openMenu() : null }
        </>
    );
}


export default Navbar;


