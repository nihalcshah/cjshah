import React from "react";
import '../index.css';
import Nav from '../Nav';

import { AnimationOnScroll } from 'react-animation-on-scroll';


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
            "Android Studios"
        ],
        "Machine Learning": [
            "K-Nearest Neighbors (KNN)",
            "K-Means",
            "Random Forest",
            "Support Vector Machines (SVM)",
            "Artificial Neural Networks (NN)",
            "Recurrent Neural Networks (RNN)",
            "Convolutional Neural Networks (CNN)",
            "Non-Max Supression (NMS)",
            "Derivation of Backpropogation",
            "Ensemble Learning",
            "Transform Learning", 

        ],
        "Computer Vision": [
            "Object Detection",
            "Object Recognition",
            "Instance Segmentation",
            "Canny Edge Detection",
            "YOLO",
            "HOG",

        ],
        "NLP": [
            "Feature Classification",
            "Relationship Extraction",
            "transformers",
            "English Lexicon Analysis",
            "Feature Hybridization",
            "NLTK"
        ],
        "libraries": [
            "NumPy",
            "scikit-learn",
            "OpenCV",
            "Pandas",
            "Selenium",
            "PyTorch",
            "Seaborn",
            "XGBoost",
            "Keras",
            "Tensorflow"
        ],
        "Databasing":[
            "MariaDB",
            "MySQL",
            "Postgres",
            "Data Management"
        ]
    }
    
    var indents = [];
    for (let k in s_list) {
        var inner_indents= [];
        for (var j = 0; j < s_list[k].length; j++) {
            inner_indents.push(
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
        indents.push(
            <div className="m-5">
                <h3 className="card-title text-xl2 font-semibold m-2" style={{ background: "none" }}>{k}</h3>
                <div className="grid grid-flow-row grid-cols-3">
                    {inner_indents.slice()}
                </div>
            </div>
            
        )
    }
    return indents;
}
const Skillpage = ({ }) => {
    return (
        <div className="sec p-5" style={{ minHeight: "100vh" }} id="Skills">
            <div className="my-auto">
                <div className="">
                    <h1 style={{}} className="heading typing text-xl3 font-bold text-center">Skills</h1>
                    <h6 className="text-center text-lg font-semibold">a comprehensive list of reasons why anyone would ever want me</h6>
                    <h6 className="text-center text-lg font-semibold">(50+ Skills and Abilities)</h6>
                </div>
                <br />
                <div className="" id="skillslist">
                    {getSkills().slice()} 
                </div>
            </div>
        </div>
    );
};

export default Skillpage;