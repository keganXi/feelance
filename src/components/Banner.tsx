import React, {} from "react";
import { Link } from "gatsby";


const Banner: React.FC = () => {
    return(
        <div className="text-center">
            <h1 className="text-2xl sm:text-[60px]">Let's get to work!</h1><br></br>
            <div className="sm:mt-6">
                <Link to="/contact/">
                <button className="bg-primary border-white border-2 rounded-lg text-white px-8 py-3 text-xl duration-200 hover:bg-black">Contact</button></Link>
            </div>
           
        </div>
    );
}


export default Banner;
