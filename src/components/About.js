import React from "react";
import  Links  from "./Links";

function About(props) {
  const a = props.bio;
  //if(a != null) return <p>{props.bio}</p>
  return (
    <div id="about">
      <h2>About Me</h2>
      {
        props.bio !== '' && props.bio ? <p>{props.bio}</p> : null
      }
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       <Links github={props.links.github} linkedin={props.links.linkedin} links={props.links} /> 
    </div>
  );
}

export default About;
