import React, { useState } from "react";


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
        links: Array<LinkTypes>
    },
    general: {
        menu: boolean
    } 
}


const Navbar: React.FC = () => {
    const [ menu, setMenu ] = useState<NavbarPropTypes["general"]["menu"]>(false);
    const [ navOption ] = useState<NavbarPropTypes["navOptions"]>({
        title: "Kegan Overberg",
        links: [
            {
                title: "About",
                link: "/about"
            },
            {
                title: "Work",
                link: "/work"
            },
            {
                title: "Blog",
                link: "/blog"
            },
            {
                title: "Contact",
                link: "/contact"
            }
        ]
    });


    const navLinks = (item: LinkTypes): JSX.Element => {
        return(
            <div className="inline hover:border-b-2 hover:border-b-white pb-2 cursor-pointer">
                <span>{ item.title }</span>
            </div>
        );
    }
    

    const openMenu = (): JSX.Element => {
        return(
            <div className="fixed z-40 bg-primary w-full h-screen text-center space-y-8 p-8">

                <div className="right-5 absolute top-5">
                    <button onClick={() => setMenu(false)}><AiOutlineClose size={25} color="white"/></button>
                </div>

                {
                navOption.links.map(
                    item => <div><a className="text-white font-semibold text-2xl" href={ item.link }>{ item.title }</a></div>
                    )}
            </div>
        );
    }


    return(
        <>
            <nav className="absolute z-20 top-0 w-full bg-transparent py-5 px-4 sm:px-24 flex text-white">
                <div className="w-full">
                    <h4 className="text-base">{ navOption.title }</h4>
                </div>

                <div className="hidden sm:block w-full text-right space-x-12">
                    { navOption.links.map(item => navLinks(item)) }
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


