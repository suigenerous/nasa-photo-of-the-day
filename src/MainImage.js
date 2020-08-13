import React from "react";

export default function MainImage (props){
    const {imageURL} = props
    return(
        <img src = {imageURL} alt='altText'/>
    )
}
