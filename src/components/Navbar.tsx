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
    

    return(
        <nav className="bg-transparent py-5 px-4 sm:px-20 flex text-white">
            <div className="w-full">
                <h4>{ navOption.title }</h4>
            </div>

            <div className="hidden sm:visible w-full text-right space-x-12">
                { navOption.links.map(item => <span className="cursor-pointer">{ item.title }</span>) }
            </div>
        </nav>
    );
}


export default Navbar;


