import React, { ReactElement, useState } from "react";
import { HeadFC, Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

// Icons
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";
import { MdDeveloperMode } from "@react-icons/all-files/md/MdDeveloperMode";
import { CgWebsite } from "@react-icons/all-files/cg/CgWebsite";
import { BsHammer } from "@react-icons/all-files/bs/BsHammer";
import { BsChevronDoubleDown } from "@react-icons/all-files/bs/BsChevronDoubleDown";


// Components.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";


type SocialTypes = {
  icon: ReactElement,
  link: string
}


type FeedbackTypes = {
  name: string,
  comment: string,
  company: string 
}


type ServiceTypes = {
  icon: ReactElement,
  title: string,
  description: string
}


interface IndexPagePropTypes {
  readonly feedback: Array<FeedbackTypes>,
  readonly services: Array<ServiceTypes>
}


export const social: Array<SocialTypes> = [
  {
    icon: <FiLinkedin size={20}/>,
    link: "https://www.linkedin.com/in/kegan-overberg-aa9575173/"
  },
  {
    icon: <FiTwitter size={20}/>,
    link: "https://twitter.com/Kegan90216382"
  },
  {
    icon: <FiGithub size={20}/>,
    link: "https://github.com/keganXi"
  }
];


const IndexPage: React.FC = () => {
  const [ feedback ] = useState<IndexPagePropTypes["feedback"]>([
    {
      name: "Chris W",
      comment: "I have worked with Kegan on a number of projects and think very highly of him and his ability.His passion for web technology is second to none. He is well skilled in all areas of Full Stack Development including well tested code. All in all he is a great guy and you should not hesitate to add him to your team!",
      company: "TherapyGuide"
    },
    {
      name: "Armand B",
      comment: "It was a nice experience to work with Kegan. I noticed he is autonomous, he is able to take decision on his own and he managed to create a good design and software, with a minimum of instructions, while proposing helpful features, he is good at was he is doing. Know what he does, solved a lot of issues and he is proactive.",
      company: "EasierJobSeeker"
    },
    {
      name: "Nolan S",
      comment: "First class work, extremely helpful. Highly recommended developer who I will be happy to continue working with",
      company: "Scrap Cars"
    },
    {
      name: "Rajesh C",
      comment: "Working with Kegan is awesome. Always willing to work and most importantly always available for communication.",
      company: "Sentriq Industries"
    }
  ]);
  const [ services ] = useState<IndexPagePropTypes["services"]>([
    {
      icon: <CgWebsite />,
      title: "Web Development",
      description: "Whether it's starting from scratch or a complete overhaul, We can develop a website that is fast, reliable and has a design that stands out and fits your brand so you can have a strong online presence."
    },
    {
      icon: <BsHammer />,
      title: "Web Maintenance",
      description: "Developing new features, updating the websites content and just making sure everything runs smoothly is important when it comes to maintaining a wesbite. "
    },
    {
      icon: <MdDeveloperMode />,
      title: "Tailormade Solution",
      description: "Standing out from competition is important, you have to make sure that you offer a service that is different, efficient and scalable and that is a tailormade solution, Utilising modern web technologies we can take your requirements and turn it into a lasting product."
    }
  ])


  const socialsLinks = (): JSX.Element => {
    return(
      <>
      { social.map(item => <Link to={item.link} target="_blank">{ item.icon }</Link>) }
      </>
    )
  }

  
  const feedbackCards = (item: FeedbackTypes): JSX.Element => {
    return(
      <div className="bg-white p-5 rounded-xl shadow-sm w-full sm:w-[320px] space-y-2">
        <h3 className="font-semibold text-xl">{ item.name }</h3>
        <span className="text-gray-400 text-md">{ item.company }</span>
        <p className="text-sm">"{ item.comment }"</p>
      </div>
    )
  }


  const serviceCards = (item: ServiceTypes): JSX.Element => {
    return(
      <div className="w-full sm:w-[350px] space-y-2 relative">
        <div className="absolute top-2 right-5">
          { item.icon }
        </div>
        <h5 className="text-xl">{ item.title }</h5>
        <p className="text-base text-gray-500">{ item.description }</p>
      </div>
    );
  }


  return (
    <div>
      <header className="h-screen w-full bg-primary">
        <div className="absolute z-20 w-full">
          <Navbar />
        </div>

        <div className="h-screen flex text-center text-white font-semibold">
          <div className="m-auto space-y-1">
            <h1 className="text-[30px] sm:text-[60px]">Strategize Build Deploy</h1>
            <p className="sm:text-xl">Building amazing products that scale.</p>
            <br />

            <div className="justify-center flex space-x-6">
              { socialsLinks() }
            </div>

            <br />
            <Link to="/contact/">
            <button className="bg-primary border-white border-2 rounded-lg text-white px-8 py-3 text-xl duration-200 hover:bg-white hover:text-primary">Let's talk</button></Link>

            <div className="w-full justify-center sm:flex hidden">
              <div className="absolute bottom-10 cursor-pointer">
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}><BsChevronDoubleDown size={25}/></ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-10 bg-white space-y-20 sm:space-y-52 sm:my-16">

        <div className="hidden sm:block h-[900px] w-[450px] rounded-r-full bg-orange-300 opacity-20 absolute left-0" id="services"></div>

        {/* <div>
          <div className="my-10 text-center">
            <h1 className="text-2xl sm:text-[35px] font-semibold">Clients & Employers</h1>
          </div>

          <div className="justify-center sm:flex sm:space-x-10 space-y-10 sm:space-y-0">
            { feedback.map(item => feedbackCards(item))}
          </div>
        </div> */}


        <div className="space-y-8 sm:space-y-24 mt-16 sm:mt-0">
          <div className="text-center">
            <h1 className="text-2xl sm:text-[35px]">Services</h1>
          </div>

          <div className="sm:flex sm:space-x-14 space-y-10 sm:space-y-0 text-2xl justify-center">
            { services.map(item => serviceCards(item)) }
          </div>
        </div>


        <div>
          <Banner />
        </div>

      </main>

      <footer className="sm:mt-28">
        <Footer />
      </footer>
    </div>
  )
}


export default IndexPage


export const Head: HeadFC = () => <title>KO - Fullstack Developer</title>

