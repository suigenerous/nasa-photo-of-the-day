import React, {useState, useEffect} from "react";
import "./App.css";
import MainImage from './MainImage'
import MainText from './MainText'
import axios from 'axios'
import {API_KEY, BASE_URL} from './Constants'

export default function App() {

  const [imageURL, setImageURL] = useState('');
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setImageURL(res.data.url)
          setTextContent(res.data.explanation)
        })
        .catch(err => {
          console.log(err)
        })
    }, [imageURL])

  return (
    <div className="App">
      <MainImage imageURL = {imageURL}/>
      <MainText textContent = {textContent}/>
    </div>
  );
}


