import React, {} from "react";
import type { HeadFC } from "gatsby";


import { FiChevronsDown } from "@react-icons/all-files/fi/FiChevronsDown";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { FiGithub } from "@react-icons/all-files/fi/FiGithub";


// Components.
import Navbar from "../components/Navbar";


const IndexPage: React.FC = () => {
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
              <a href="#"><FiLinkedin size={20}/></a>
              <a href="#"><FiTwitter size={20}/></a>
              <a href="#"><FiGithub size={20}/></a>
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

      <main>

      </main>
    </div>
  )
}


export default IndexPage


export const Head: HeadFC = () => <title>Kegan Overberg</title>

