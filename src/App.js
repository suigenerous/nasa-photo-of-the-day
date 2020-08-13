import React, {useState, useEffect} from "react";
import "./App.css";
import MainImage from './MainImage'
import {API_KEY, BASE_URL} from './Constants'

export default function App() {
  return (
    <div className="App">
      <MainImage/>
    </div>
  );
}


