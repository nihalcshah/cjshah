import React from "react";
import '../index.css';

function filtering(clicked) {
    // const filterval = clicked['target'].innerHTML;
    // let skillslist = document.getElementById("skillslist");
    // let buttonparams = skillslist.getElementsByClassName("card-subtitle");
    // for (let n = 0; n < buttonparams.length; n++) {
    //     console.log(buttonparams[n]['innerText'])
    //     if (buttonparams[n]['innerText'] != filterval) {
    //         buttonparams[n].parentNode.style['display'] = "none"
    //     }
    // }
    // let sktag = document.getElementById("Skills");
    // let filtbtns = sktag.getElementsByClassName("filteredlist");
    // for (let n = 0; n < filtbtns.length; n++) {
    //     console.log(filtbtns[n]['innerText'] );
    //     if (filtbtns[n]['innerText'].localeCompare(filterval) === 0) {
    //         console.log("sdf")
    //         filtbtns[n].style['display'] = "inline"
    //     }
    // }
    // skillslist.getElementsByClassName("filteredlist")[0].style['display'] = "inline";
    // console.log(skillslist.getElementsByClassName("filteredlist")[0].style['display'])
}

function unfiltering(clicked) {
    // console.log("sdf")
    // console.log(clicked['target'])
    // let skillslist = document.getElementById("skillslist");
    // let buttonparams = skillslist.getElementsByClassName("card-subtitle");
    // for (let n = 0; n < buttonparams.length; n++) {
    //     buttonparams[n].parentNode.style['display'] = "block";
    // }
    // clicked['target'].style['display'] = "none";
    // console.log(clicked);
    // console.log("sdf")
    // skillslist.getElementsByClassName("filteredlist")[0].style['display'] = "none";
}

function reveal() {
    var skills = document.getElementById("Skills");
    // console.log("dsf")
    var skillpieces = skills.querySelectorAll(".col-lg-3");


    for (var i = 0; i < skillpieces.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = skillpieces[i].getBoundingClientRect().top;
        var elementVisible = -50;
        // console.log(elementTop)
        if (elementTop < windowHeight + elementVisible) {
            // console.log(skillpieces[i])
            skillpieces[i].classList.add("element");
        } else {
            // skillpieces[i].classList.remove("element");
        }
    }
}

window.addEventListener("scroll", reveal);

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
console.log(s_list)
var indents = [];
var splitindents;
for (let k in s_list) {
    for (var j = 0; j < s_list[k].length; j++) {
        indents.push(<div className="col-lg-3"><div className="card shadow" style={{ backgroundColor: "transparent" }}><div className="card-body" ><h6 className="card-title" style={{ background: "none" }}>{s_list[k][j]}</h6></div></div></div>);
    }
}
splitindents = indents.slice(4)
console.log(splitindents)
console.log(indents.length)

const getIndent = ({}) =>{
    return({indents})
}

const Skills = ({ }) => {
    return (
        <div className="section d-flex sec2 p-5" style={{ minHeight: "100vh" }} id="Skills">
            <div className="my-auto">
                <h3 style={{ fontWeight: 600 }} className="row h3">Skills</h3>
                <div className="g-3 " id="" style={{}}>
                    <button className="card-subtitle filteredlist rounded-5 text-center mt-3 px-2 m-1" id="b1" onClick={(e) => unfiltering(e)} style={{ backgroundColor: "black", color: "white", paddingTop: "0.4rem", paddingBottom: "0.2rem" }}><h6 className="filter">Programming Language</h6></button>
                    <button className="card-subtitle filteredlist rounded-5 text-center mt-3 px-2 m-1" id="b2" onClick={(e) => unfiltering(e)} style={{ backgroundColor: "black", color: "white", paddingTop: "0.4rem", paddingBottom: "0.2rem" }}><h6 className="filter">NLP</h6></button>
                </div>
                <br />
                <div className="row g-3" id="skillslist">
                    {indents.slice()} 
                    <a className="col-lg-3" style={{border:"none", textDecoration:"none"}} href=""><div className="card" style={{ backgroundColor: "black" }}><div className="card-body" ><h6 className="my-auto" style={{ background: "none", color:"white"}}><b>+ More</b></h6></div></div></a>
                </div>
                {/* <button className="text-center" onClick={document.getElementById("skillslist").ge}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/></svg></button> */}
            </div>
        </div>
    );
};

export default Skills;