
import { useState,useEffect } from "react"
import './App.css'
import {fetchDataFromApi} from "./utils/api";
function App() {
 
  const apiTestimg = () =>{
    fetchDataFromApi('/movie/popular')
  }
  return (
   <div>APP</div>
  )
}

export default App
