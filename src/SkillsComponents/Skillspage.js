import React from "react";
import '../index.css';
import Nav from '../Nav';
import { AnimationOnScroll } from 'react-animation-on-scroll';
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
        "Programming Languages": [
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
        "Databasing": [
            "MariaDB",
            "MongoDB",
            "MySQL",
            "Postgres",
            "Data Cleaning"
        ]
    }

    var indents = [];
    for (let k in s_list) {
        var inner_indents = [];
        for (var j = 0; j < s_list[k].length; j++) {
            inner_indents.push(
                <div className="m-3 col-lg-3" style={{ backgroundColor: "transparent" }}>
                    <div className="rounded-lg shadow-md shadow-indigo-400 p-3 " >
                        <h6 className="card-title text-center text-lg font-semibold">{s_list[k][j]}</h6>
                    </div>
                </div>
            );
            if (indents.length > 10) {
                break;
            }
        }
        indents.push(
            <div className="m-5">
                <h3 className="card-title text-xl2 font-semibold m-2" style={{ background: "none" }}>{k}</h3>
                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3">
                    {inner_indents.slice()}
                </div>
            </div>

        )
    }
    return indents;
}
const Skillpage = ({ }) => {
    return (
        <div className="instrument" id="Skills">
            <div className="fixed h-screen w-screen bg-gradient-to-br from-slate-950 via-indigo-950 via-80% to-slate-950 bg-fixed overflow-hidden">
                <svg className="opacity-25" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                    <defs>
                        <linearGradient id="bg">
                            <stop offset="0%" style={{ stopColor: "rgba(130, 158, 249, 0.06)" }}></stop>
                            <stop offset="50%" style={{ stopColor: "rgba(76, 190, 255, 0.6)" }}></stop>
                            <stop offset="100%" style={{ stopColor: "rgba(115, 209, 72, 0.2)" }}></stop>
                        </linearGradient>
                        <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                    </defs>
                    <g>
                        <use xlinkHref="#wave" opacity=".3">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="10s"
                                calcMode="spline"
                                values="270 230; -334 180; 270 230"
                                keyTimes="0; .5; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use xlinkHref="#wave" opacity=".6">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="8s"
                                calcMode="spline"
                                values="-270 230;243 220;-270 230"
                                keyTimes="0; .6; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                        <use opacty=".9">
                            <animateTransform
                                attributeName="transform"
                                attributeType="XML"
                                type="translate"
                                dur="6s"
                                calcMode="spline"
                                values="0 230;-140 200;0 230"
                                keyTimes="0; .4; 1"
                                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                repeatCount="indefinite" />
                        </use>
                    </g>
                </svg>
            </div>
            <div className="relative pt-10">
                <div className="text-white">
                    <h1 style={{}} className="text-4xl font-bold text-center">skills</h1>
                    <h6 className="text-center text-lg font-semibold">a comprehensive list of <span className="text-fuchsia-400"><ReactRotatingText deletingInterval={40} typingInterval={20} items={['donut-munching', 'trampoline-bouncing', 'netflix-binging']} pause={3000} /></span>skills</h6>
                    <h6 className="text-center text-lg font-semibold">(50+ Skills and Abilities)</h6>
                </div>
                <br />
                <div className="w-4/5 mx-auto text-indigo-200" id="skillslist" >
                    {getSkills().slice()}
                </div>
            </div>

        </div>
    );
};

export default Skillpage;