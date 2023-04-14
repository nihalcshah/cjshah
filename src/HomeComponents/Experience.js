import React, { useEffect } from "react";
import '../index.css';

function getExperience() {
    var experienceList = {
        "The Brite Group": [
            "Data Science Intern",
            "2022",
            "During my tenure as a paid intern at The Brite Group, a private government contractor known for its frequent collaborations with various US Federal Departments, I was entrusted to work under a designated mentor. My primary responsibility was to devise and construct a Natural Language Processing pipeline utilizing ensemble learning techniques to analyze the overall perception of the American population regarding contentious topics such as the War in Ukraine.",
            "./workplaces/thebritegroup.jpg",
            "NLP・ensemble learning・data processing",
        ],
        "Spraxa Solutions": [
            "Computer Vision Intern",
            "2021",
            "I spent my time at Spraxa working under a mentor to analyze and design a system for shelf detection. The purpose of the internship was to develop an instance segmentation technique to find the stock of a vending machine on each opening. The eventual goal was to maximize accuracy of the model. I trained an instance segmentation model pre-trained on the Mask R-CNN Model.",
            "./workplaces/spraxa.jpg",
            "Computer Vision・Instance Segmentation・Memory Allocation",
        ],
        
    }

    var indents = [];
    for (let k in experienceList) {
        indents.push(
            <div className="p-4">
                <div className="rounded-3 shadow p-2" style={{ background: "none" }}>
                    <div className="row p-3">
                        <div className="col-md-3 ">
                            <div className="p-3 d-flex">
                                <img src={experienceList[k][3]} className="rounded-3 m-auto img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="p-3 m-auto">
                                <p className="text-center">
                                    {experienceList[k][2]}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="p-3 m-auto text-center">
                                <b>Skills</b>
                                <div>
                                    {experienceList[k][4]}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <h6 className="text-center" style={{ letterSpacing: "3px", fontWeight: "400", textTransform:"uppercase" }}>{experienceList[k][0]}・{experienceList[k][1]}</h6>
                        <h1 className="text-center" style={{ letterSpacing: "10px", fontWeight: "500", textTransform:"uppercase" }}>{k}</h1>
                    </div>
                </div>
            </div>
        );
    }
    return indents;
}


const Experience = ({ }) => {
    return (
        <div className="section sec2" style={{ minHeight: "100vh" }} id="">
            <div className="text-center relative">
                <h1 style={{ fontSize: "3rem" }}>work experience</h1>
                <h6 style={{ fontSize: "1rem" }}>internships, clubs, leadership (linkedin go crazy)</h6>
                <br/>
                <a className="buttonFill p-2" style={{position: "relative"}}>view more.</a>
            </div>
            {getExperience().slice()}

        </div>
    );
};

export default Experience;