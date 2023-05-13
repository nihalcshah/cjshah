import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Typing from "./Typing";
var ReactRotatingText = require('react-rotating-text');

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


function getSkills() {
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
        "Databasing": [
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
            if (indents.length > 10) {
                break;
            }
        }
    }
    return indents;
}

const Skills = ({ }) => {
    return (
        <div className="container w-4/5 mx-auto text-white my-12 h-fit">
            <div className="text-left relative md:mb-12 mb-6">
                <h1 className="font-bold text-3xl leading-normal " >skills+libraries+abilities</h1>
                <h6 className="text-lg" >who knew i could ever <span className="text-cyan-400"><ReactRotatingText deletingInterval={40} typingInterval={20} items={['skateboard', 'fly a drone', 'achieve 100% accuracy on my svm model']} pause={3000} /></span> </h6>
            </div>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 relative" id="skillslist">
                <div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "white" }}><div className="card-body" ><h6 className="my-auto text-base md:text-lg" style={{ background: "none", color: "black" }}><b>Web Development</b></h6></div></div>
                <div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "white" }}><div className="card-body" ><h6 className="my-auto text-base md:text-lg" style={{ background: "none", color: "black" }}><b>UI/UX Design</b></h6></div></div>
                <div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "white" }}><div className="card-body" ><h6 className="my-auto text-base md:text-lg" style={{ background: "none", color: "black" }}><b>Machine Learning</b></h6></div></div>
                <div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "white" }}><div className="card-body" ><h6 className="my-auto text-base md:text-lg" style={{ background: "none", color: "black" }}><b>Data Management</b></h6></div></div>
                <div className="m-3 col-lg-3 rounded-lg shadow p-3" style={{ backgroundColor: "white" }}><div className="card-body" ><h6 className="my-auto text-base md:text-lg" style={{ background: "none", color: "black" }}><b>Computer Vision</b></h6></div></div>
                <a className="" style={{ border: "none", textDecoration: "none" }} href="/skills"><div className="m-3 col-lg-3 rounded-lg shadow p-3 text-base md:text-lg bg-gradient-to-br to-sky-700 from-cyan-500" ><div className="card-body" ><h6 className="my-auto"><b>+ More</b></h6></div></div></a>
            </div>
        </div>

    );
};

export default Skills;