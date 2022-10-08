import React from "react";
import { StaticImage } from "gatsby-plugin-image"


interface ImageTypes {
    name: string,
    alt: string,
}


const Image: React.FC<ImageTypes> = ({ name, alt}) => {
    return(
        <StaticImage src={ name } alt={ alt } />
    );
}


export default Image;
