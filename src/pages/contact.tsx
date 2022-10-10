import React, { useState, ReactElement } from "react";
import { HeadFC, Link } from "gatsby";

// Icons
import { FiChevronsDown } from "@react-icons/all-files/fi/FiChevronsDown";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";

// Components.
import Navbar from "../components/Navbar";


type SocialTypes = {
    icon: ReactElement,
    link: string    
}


interface ContactPagePropTypes {
    form: {
        fullname: string,
        email: string,
        message: string
    },
    socials: Array<SocialTypes>
}


const ContactPage: React.FC= () => {
    const [ social ] = useState<ContactPagePropTypes["socials"]>([
        {
          icon: <FiLinkedin size={25}/>,
          link: "https://www.linkedin.com/in/kegan-overberg-aa9575173/"
        },
        {
          icon: <FiTwitter size={25}/>,
          link: "https://twitter.com/Kegan90216382"
        },
        {
          icon: <FiGithub size={25}/>,
          link: "https://github.com/keganXi"
        }
    ]);
    const [ fullname, setFullname ] = useState<ContactPagePropTypes["form"]["fullname"]>("")
    const [ email, setEmail ] = useState<ContactPagePropTypes["form"]["email"]>("")
    const [ message, setMessage ] = useState<ContactPagePropTypes["form"]["message"]>("")


    const socialsLinks = (): JSX.Element => {
        return(
          <>
          { social.map(item => <Link to={item.link} target="_blank">{ item.icon }</Link>) }
          </>
        )
    }


    return(
        <div>
            <header>
                <Navbar textColor="text-primary" navColor="bg-white" menuColor="#333241"/>
            </header>

            <main className="sm:flex p-4 sm:p-24">
                <div className="w-full space-y-14 ">
                    <div className="space-y-6">
                        <h1 className="text-2xl sm:text-[35px] font-semibold">Let's get to work?</h1>
                        <p>Have an idea or existing product let's have a quick chat!</p>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-2xl sm:text-[35px] font-semibold">Socials</h1>
                        <div className="flex space-x-6">
                            { socialsLinks() }
                        </div>
                    </div>
                </div>

                <div className="w-full rounded-2xl bg-gray-100 p-6 sm:p-8 mt-14 sm:mt-0">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label>Full name*</label>
                            <input type="text" placeholder="Your first and last name" className="p-2.5 w-full border border-gray-300 rounded-lg" name="full_name" onChange={e => setFullname(e.target.value)} value={fullname} />
                        </div>

                        <div className="space-y-2">
                            <label>Email address*</label>
                            <input type="email" placeholder="Hi@email.com" className="p-2.5 w-full border border-gray-300 rounded-lg" name="full_name" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className="space-y-2">
                            <label>Message*</label>
                            <textarea className="p-2.5 w-full sm:h-[200px] border border-gray-300 rounded-lg" name="full_name" placeholder="How can we help you?" onChange={e => setMessage(e.target.value)} value={message} />
                        </div>

                        <button className="bg-primary rounded-xl px-6 py-3 text-white hover:bg-black">Send</button>
                        
                    </form>
                </div>
            </main>

            <footer></footer>
        </div>
    );
}


export default ContactPage;


export const Head: HeadFC = () => <title>KO | Contact</title>
