import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Typing from "./Typing";

function reveal() {
    var skills = document.getElementById("Skills");
    var skillpieces = skills.querySelectorAll(".col-lg-3");
    for (var i = 0; i < skillpieces.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = skillpieces[i].getBoundingClientRect().top;
        var elementVisible = -50;
        if (elementTop < windowHeight + elementVisible) {
            skillpieces[i].classList.add("element");
        } else {
            // skillpieces[i].classList.remove("element");
        }
    }
}
window.addEventListener("scroll", reveal);


function getSkills(){
    var s_list = {
        "Programming Language": [
            "Python",
            "Java",
            "JavaScript",
            "C++",
            "C",
            "R",
        ],
        "Frameworks": [
            "Django",
            "Node.js",
            "React",
        ],
        "Machine Learning": [
            "K-Nearest Neighbors (KNN)",
            "K-Means",
            "Support Vector Machines (SVM)",
            "Artificial Neural Networks (NN)",
            "Recurrent Neural Networks (RNN)",
            "Convolutional Neural Networks (CNN)",
            "Non-Max Supression (NMS)",
            "Derivation of Backpropogation"
        ],
        "Computer Vision": [
            "Object Detection",
            "Object Recognition",
            "Instance Segmentation",
            "Canny Edge Detection", 
                   
        ],
        "NLP": [
            "Feature Classification",
            "Relationship Extraction"
        ],
        "libraries": [
            "NumPy",
            "scikit-learn",
            "OpenCV",
            "Pandas",
            "Selenium",
        ],
        "Databasing":[
            "MariaDB",
            "MySQL",
            "Postgres"
        ]
    }
    
    var indents = [];
    for (let k in s_list) {
        for (var j = 0; j < s_list[k].length; j++) {
            indents.push(
                <div className="m-3 col-lg-3" style={{ backgroundColor: "transparent" }}>
                    <div className="rounded-lg shadow p-3" >
                        <h6 className="card-title text-center" style={{ background: "none" }}>{s_list[k][j]}</h6>
                    </div>
                </div>
            );
            if(indents.length>10){
                break;
            }
        }
    }
    return indents;
}

const Skills = ({ }) => {
    return (
        <div className="sec p-5" style={{ minHeight: "100vh" }} id="Skills">
            <div className="my-auto">
                <div className="">
                <AnimationOnScroll animateIn="typing">
                    <h1 style={{}} className="heading">skills+libraries+abilities</h1>
                </AnimationOnScroll>
                    <h6>all that mumbo jumbo</h6>
                </div>
                <br />
                <div className="grid grid-flow-row grid-cols-3" id="skillslist">
                    {getSkills().slice()} 
                    <a className="" style={{border:"none", textDecoration:"none"}} href="/skills"><div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "black" }}><div className="card-body" ><h6 className="my-auto" style={{ background: "none", color:"white"}}><b>+ More</b></h6></div></div></a>
                </div>
            </div>
        </div>
    );
};

export default Skills;