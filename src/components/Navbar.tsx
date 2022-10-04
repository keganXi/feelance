import React, { useState } from "react";


interface LinkTypes {
    title: string,
    link: string
}


interface NavbarPropTypes {
    readonly navOptions: {
        title: string,
        links: Array<LinkTypes>
    }
}


const Navbar: React.FC = () => {
    const [ navOption, setNavOption ] = useState<NavbarPropTypes["navOptions"]>({
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


    const navLinks = (item: LinkTypes) => {
        return(
            <div className="inline hover:border-b-2 hover:border-b-white pb-2 cursor-pointer">
                <span>{ item.title }</span>
            </div>
        );
    }
    

    return(
        <nav className="absolute z-20 top-0 w-full bg-transparent py-5 px-4 sm:px-24 flex text-white">
            <div className="w-full">
                <h4 className="text-base">{ navOption.title }</h4>
            </div>

            <div className="hidden sm:block w-full text-right space-x-12">
                { navOption.links.map(item => navLinks(item)) }
            </div>
        </nav>
    );
}


export default Navbar;


