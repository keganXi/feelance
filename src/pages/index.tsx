import React, { ReactElement, useState } from "react";
import type { HeadFC } from "gatsby";


// Icons
import { FiChevronsDown } from "@react-icons/all-files/fi/FiChevronsDown";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";

// Components.
import Navbar from "../components/Navbar";
import Image from "../components/Image";


type SocialTypes = {
  icon: ReactElement,
  link: string
}

type WorkTypes = {
  image: string,
  alt: string
  size?: number
}

interface IndexPagePropTypes {
  readonly socials: Array<SocialTypes>,
  readonly work: Array<WorkTypes>
}


const IndexPage: React.FC = () => {
  const [ social ] = useState<IndexPagePropTypes["socials"]>([
    {
      icon: <FiLinkedin size={20}/>,
      link: "#"
    },
    {
      icon: <FiTwitter size={20}/>,
      link: "#"
    },
    {
      icon: <FiGithub size={20}/>,
      link: "#"
    }
  ]);
  const [ work ] = useState<IndexPagePropTypes["work"]>([
    {
      image: "../images/easierjobseeker.png",
      alt: "eaiser job seeker"
    }
  ]);


  const socialsLinks = (): JSX.Element => {
    return(
      <>
      { social.map(item => <a href={item.link}>{ item.icon }</a>) }
      </>
    );
  }

  
  const workList = (item: WorkTypes): JSX.Element => {
    return(
      <div>
        <Image name={item.image} alt={item.alt} />
      </div>
    );
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
          <h1 className="text-2xl sm:text-[35px] font-semibold">Work</h1>
        </div>

        <div className="justify-center sm:flex sm:space-x-10 space-y-10 sm:space-y-0">
          { work.map(item => workList(item)) }
        </div>
      </main>
    </div>
  )
}


export default IndexPage


export const Head: HeadFC = () => <title>Kegan Overberg</title>

