import "./index.css"
// import React from "react";

const Portfolio = ()=>{
    return(
    <div>
        <div className="introduction">
            <div>
                <h1>I am a software</h1>
                <h1> <b>engineer</b></h1>
            </div>
            <img src='/Images/njangos.jpg' alt=" showing a book for trevor noah" className="jango"/>
        </div>
         <div className="about">
            <h2>About Me</h2>
            <p> Growing up I was intrigued on how gaming apps worked. I realized it helped in brainstorming and relaxing one's mind after a long day of working and studying. I developed interest in getting to know more about the technology behind gaming apps. This gave me the desire to pursue a career in software development to acquire the  necessary skills . 

I am eager to connect with other software developers in this field so as  to be able to support my growth in this career.
</p>
         </div>
         <div className="skills">
            <h2>Skills</h2>
            <p> Ability to integrate frontend applications with various APIs and services .
            </p>
            <p>Capable of adding onClick listeners to widgets and handling user interaction .
            </p>
            <p>Skilled in defining classes to model real-world entities and abstract concepts .
            </p>
            <p>Well skilled in utilizing objects to represent and manipulate data effectively .
            </p>
            <p>Well conversant with sql statements and able to access and edit information . 
            </p>
            <p>Expertise in React.js  for building  interactive UI interface .
            </p>
         </div>





    </div>

    );
}


export default Portfolio;