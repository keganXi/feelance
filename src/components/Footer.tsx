import React, {} from "react";
import { Link } from "gatsby";

// Components.
import { social } from "../pages/index";
import { navLinks } from "./Navbar";


const Footer: React.FC = () => {
    return(
        <div className="py-6 text-white space-y-10 bg-black">
            <div className="text-center space-y-3">
                <h3 className="font-semibold text-xl">Socials</h3>
                <div className="justify-center flex space-x-4">
                    { social.map(item => <Link to={ item.link }>{ item.icon }</Link>)}
                </div>
            </div>

            <div className="text-center space-y-4">
                <h3 className="font-semibold text-xl">Links</h3>
                <div className="justify-center flex space-x-4">
                    { navLinks.map(item => <Link to={ item.link }>{ item.title }</Link>)}
                </div>
            </div>

            <div className="text-center space-y-4">
               <span className="text-sm text-gray-500">2022 &copy; Kegan Overberg</span>
            </div>
        </div>
    );
}


export default Footer;
