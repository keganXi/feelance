import React, {} from "react";
import type { HeadFC } from "gatsby";

import { FiChevronsDown } from "@react-icons/all-files/fi/FiChevronsDown";


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
            <br></br>
            <button className="bg-white hover:bg-neutral-200 rounded-lg text-primary px-8 py-3 text-xl hover:shadow-xl duration-200">Let's talk</button>
          </div>

          <div className="absolute justify-center flex w-full bottom-20">
            <span className="cursor-pointer">
              <FiChevronsDown size={30} color="white"/>
            </span>
          </div>
        </div>

        
      </header>

      <main>
        Hello World

      </main>
    </div>
  )
}


export default IndexPage


export const Head: HeadFC = () => <title>Kegan Overberg</title>

