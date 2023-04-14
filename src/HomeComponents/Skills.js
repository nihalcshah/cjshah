import React from "react";
import '../index.css';

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
            "React"
        ],
        "Machine Learning": [
            "K-Nearest Neighbors (KNN)",
            "K-Means",
            "Support Vector Machines (SVM)",
            "Artificial Neural Networks (NN)",
            "Recurrent Neural Networks (RNN)",
            "Convolutional Neural Networks (CNN)",
            "Non-Max Supression (NMS)"
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
        ]
    }
    
    var indents = [];
    for (let k in s_list) {
        for (var j = 0; j < s_list[k].length; j++) {
            indents.push(<div className="col-lg-3"><div className="card shadow" style={{ backgroundColor: "transparent" }}><div className="card-body" ><h6 className="card-title" style={{ background: "none" }}>{s_list[k][j]}</h6></div></div></div>);
        }
    }
    return indents;
}

const Skills = ({ }) => {
    return (
        <div className="section d-flex sec2 p-5" style={{ minHeight: "100vh" }} id="Skills">
            <div className="my-auto">
                <h3 style={{ fontWeight: 600 }} className="row h3">Skills</h3>
                <br />
                <div className="row g-3" id="skillslist">
                    {getSkills().slice()} 
                    <a className="col-lg-3" style={{border:"none", textDecoration:"none"}} href=""><div className="card" style={{ backgroundColor: "black" }}><div className="card-body" ><h6 className="my-auto" style={{ background: "none", color:"white"}}><b>+ More</b></h6></div></div></a>
                </div>
            </div>
        </div>
    );
};

export default Skills;