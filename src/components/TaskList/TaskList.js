import React from "react";
import "./tasklist.css";

export default function TaskList(props){
return(
  <div className="tasklist">
    <div>{props.title}</div>
  </div>
)
} 