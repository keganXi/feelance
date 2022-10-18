import React, { useState, useRef } from "react";
import { HeadFC, Link } from "gatsby";
import emailjs from "@emailjs/browser";

// Components.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { social } from "./index";


interface ContactPagePropTypes {
    form: {
        fullname: string,
        email: string,
        message: string,
        submit: boolean,
        alertMsg: string
    },
}


const ContactPage: React.FC= () => {
    const form: React.MutableRefObject<any> = useRef();
    const [ fullname, setFullname ] = useState<ContactPagePropTypes["form"]["fullname"]>("");
    const [ email, setEmail ] = useState<ContactPagePropTypes["form"]["email"]>("");
    const [ message, setMessage ] = useState<ContactPagePropTypes["form"]["message"]>("");
    const [ submit, setSubmit ] = useState<ContactPagePropTypes["form"]["submit"]>(false);
    const [ alertMsg, setAlertMsg ] = useState<ContactPagePropTypes["form"]["alertMsg"]>("");


    const socialsLinks = (): JSX.Element => {
        return(
          <>
          { social.map(item => <Link to={item.link} target="_blank">{ item.icon }</Link>) }
          </>
        );
    }


    const sendEmail = (e: any): void => {
        e.preventDefault();

        emailjs.sendForm('service_6z0jfv8', 'contact_form', form.current, 'c7oUhfTW29jDCzdtt')
        .then((result) => {
            // Show message indicating email has been sent and clear states.
            setAlertMsg("Your message has been sent! You can expect a reply within 24 hours.");
            setFullname("");
            setEmail("");
            setMessage("");
            setSubmit(true);
        }, (error) => {
            setAlertMsg("Oops! something went wrong :( Please try again.");
            setSubmit(true);
        });
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
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="space-y-2">
                            <label>Full name*</label>
                            <input type="text" placeholder="Your first and last name" className="p-2.5 w-full border border-gray-300 rounded-lg" name="from_name" onChange={e => setFullname(e.target.value)} value={fullname} required />
                        </div>

                        <div className="space-y-2">
                            <label>Email address*</label>
                            <input type="email" placeholder="Hi@email.com" className="p-2.5 w-full border border-gray-300 rounded-lg" name="email_address" onChange={e => setEmail(e.target.value)} value={email} required />
                        </div>

                        <div className="space-y-2">
                            <label>Message*</label>
                            <textarea className="p-2.5 w-full sm:h-[200px] border border-gray-300 rounded-lg" name="message" placeholder="How can we help you?" onChange={e => setMessage(e.target.value)} value={message} required/>
                        </div>

                        { (submit? <p className="text-primary text-sm">{ alertMsg }</p> : null )}

                        <button type="submit" className="bg-primary rounded-xl px-6 py-3 text-white hover:bg-black">Send</button>
                        
                    </form>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}


export default ContactPage;


export const Head: HeadFC = () => <title>KO - Contact</title>
