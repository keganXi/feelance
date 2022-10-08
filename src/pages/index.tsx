import React, { ReactElement, useState } from "react";
import type { HeadFC } from "gatsby";

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


type FeedbackTypes = {
  name: string,
  comment: string,
  company: string 
}


interface IndexPagePropTypes {
  readonly socials: Array<SocialTypes>,
  readonly feedback: Array<FeedbackTypes>
}


const IndexPage: React.FC = () => {
  const [ social ] = useState<IndexPagePropTypes["socials"]>([
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
  ]);
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


  const socialsLinks = (): JSX.Element => {
    return(
      <>
      { social.map(item => <a href={item.link} target="_blank">{ item.icon }</a>) }
      </>
    )
  }

  
  const feedbackCards = (item: FeedbackTypes): JSX.Element => {
    return(
      <div className="bg-white cursor-pointer p-5 rounded-xl shadow-sm w-full sm:w-[320px] space-y-2">
        <h3 className="font-semibold text-xl">{ item.name }</h3>
        <span className="text-gray-400 text-md">{ item.company }</span>
        <p>"{ item.comment }"</p>
      </div>
    )
  }


  return (
    <div>
      <header className="h-[690px] w-full bg-primary">
        <Navbar />

        <div className="h-full flex text-center text-white font-semibold">
          <div className="m-auto space-y-1">
            <h1 className="text-[30px] sm:text-[60px]">Strategize Build Deploy</h1>
            <p className="sm:text-xl">Building amazing products that scale.</p>
            <br />

            <div className="justify-center flex space-x-6">
              { socialsLinks() }
            </div>

            <br />
            <button className="bg-primary border-white border-2 rounded-lg text-white px-8 py-3 text-xl duration-200 hover:bg-white hover:text-primary">Let's talk</button>
          </div>

          <div className="absolute justify-center flex w-full bottom-20">
            <span className="cursor-pointer">
              <FiChevronsDown size={30} color="white"/>
            </span>
          </div>
        </div>
      </header>

      <main className="p-4 sm:p-10 bg-neutral-100">

        <div className="my-10 text-center">
          <h1 className="text-2xl sm:text-[35px] font-semibold">Clients & Employers</h1>
        </div>

        <div className="justify-center sm:flex sm:space-x-10 space-y-10 sm:space-y-0">
          { feedback.map(item => feedbackCards(item))}
        </div>
      </main>
    </div>
  )
}


export default IndexPage


export const Head: HeadFC = () => <title>KO | Fullstack Developer</title>

