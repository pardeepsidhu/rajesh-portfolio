"use client"
import Image from "next/image";
import First from "../components/first"
import Second from "../components/second"
import Third from "../components/third"
import { useState } from "react";


export default function Home() {
  const [theme,setTheme]=useState("light")
  return (
    <div >
      {/* <input type="switch">dark mode</input> */}
      <button 
      onClick={()=>setTheme(theme==="dark"?"light":"dark")}
      className="bg-sky-500 p-4 text-3xl w-full m-auto"
        >change theme
        </button>
      
      <Second  theme={theme}/>
      <Third theme={theme}/>
      <First  theme={theme}/>
    </div>
  );
}
