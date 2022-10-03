import React, {} from "react"
import type { HeadFC } from "gatsby"


// Components.
import Navbar from "../components/Navbar";


const IndexPage: React.FC = () => {
  return (
    <div>
      <header className="h-[690px] w-full bg-primary">
        <Navbar />

        <div>

        </div>
      </header>

      <main>

      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Kegan Overberg</title>

