
import { useState } from 'react';
import React  from "react";
import './../styles/App.css';
import Tabs from './Tabs';

let arr = [
  { title: "Tab 1", content: "This is the content for Tab 1." },
  { title: "Tab 2", content: "This is the content for Tab 2." },
  { title: "Tab 3", content: "This is the content for Tab 3." }
]

const App = () => {
let [contentLine, setContentLIne]=useState("")

  return (
    <div>
      {/* Do not remove the main div */}
      <ul>
        {
          arr.map((item) => (
            <li> <Tabs obj={item} setContentLIne={setContentLIne} /></li>
          ))
        }
      </ul>

      <p>{contentLine}</p>
    </div>
  )
}

export default App
