import React, {useState, useEffect} from "react";
import {API_KEY, BASE_URL} from './Constants'
import axios from 'axios'

export default function MainImage (props){
    const [imageURL, setImage] = useState();

    useEffect(() => {
        axios.get(`${BASE_URL}?api_key=${API_KEY}`)
          .then(res => {
            setImage(res.data.url)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    return(
        <img src = {imageURL} alt='altText'/>
    )
}
