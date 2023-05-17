
import React from "react";

const Tabs= (props) => {
  return (
    <p onClick={()=>(props.setContentLIne(props.obj.content))}>
        {props.obj.title}
        
    </p>
  )
}

export default Tabs
