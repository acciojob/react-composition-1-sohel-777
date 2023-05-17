
import React from "react";
import { useState } from 'react';

const Tabs= ({arr}) => {
let [contentLine, setContentLIne]=useState("")

  return (
    <>
     <ul>{
        arr.map((item) => (
            <li onClick={()=>setContentLIne(item.content)}>{item.title}</li>
        ))
        }
       
    </ul>
    <p>{contentLine}</p>
    </>
   
  )
}

export default Tabs
