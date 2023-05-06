import React, { useEffect, useState, useRef } from "react";
import '../index.css';
import "animate.css/animate.min.css";
import Typing from "./Typing";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Experience = ({ }) => {

    const experienceList = [
        {
            "company":"The Brite Group",
            "year": "2022",
            "title": "Data Science Intern",
            "description":"During my tenure as a paid intern at The Brite Group, a private government contractor known for its frequent collaborations with various US Federal Departments, I was entrusted to work under a designated mentor. My primary responsibility was to devise and construct a Natural Language Processing pipeline utilizing ensemble learning techniques to analyze the overall perception of the American population regarding contentious topics such as the War in Ukraine.",
            "imgpath": "./workplaces/thebritegroup.jpg",
            "skills": "NLP・ensemble learning・data processing"
        },
        {
            "company":"Spraxa Solutions",
            "year": "2021",
            "title": "Computer Vision Intern",
            "description": "I spent my time at Spraxa working under a mentor to analyze and design a system for shelf detection. The purpose of the internship was to develop an instance segmentation technique to find the stock of a vending machine on each opening. The eventual goal was to maximize accuracy of the model. I trained an instance segmentation model pre-trained on the Mask R-CNN Model.",
            "imgpath": "./workplaces/spraxa.jpg",
            "skills": "Computer Vision・Instance Segmentation・Memory Allocation"
        },
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // console.log(currentImageIndex)
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //     setCurrentImageIndex(currentImageIndex === experienceList.length - 1 ? 0 : currentImageIndex + 1);
    //     }, 3000);

    //     return () => clearInterval(intervalId);
    // }, [currentImageIndex, experienceList]);

    const handleScroll = (event) => {
        const { scrollLeft, scrollWidth, clientWidth } = event.target;
        const maxScrollLeft = scrollWidth - clientWidth;
        const percentScrolled = scrollLeft / maxScrollLeft;
        const newIndex = Math.floor(percentScrolled * experienceList.length);
        console.log(newIndex)
        setCurrentImageIndex(newIndex);
    };

    const exp = experienceList.map((job, index) => 
        <div className={index === currentImageIndex ? 'dc active ' : 'dc'} style={{ minWidth: "60vw" }} key={index} >
            <AnimationOnScroll animateIn="animate__animated animate__pulse" scrollableParentSelector="">
                <div className="rounded-3 p-2" style={{ background: "none" }}>
                    <div className="p-3">
                        <div className=" ">
                            <div className="p-3">
                                <img src={job.imgpath} className="rounded-xl m-auto img-fluid" />
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 m-auto">
                                <p className="text-center">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 m-auto text-center">
                                <b>Skills</b>
                                <div>
                                    {job.skills}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <h6 className="text-center" style={{ letterSpacing: "0.2vw", fontWeight: "400", textTransform: "uppercase" }}>{job.company}・{job.year}</h6>
                        <h1 className="text-center experience-title" style={{ letterSpacing: "0.25vw", fontWeight: "500", textTransform: "uppercase" }}>{job.title}</h1>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    );

    return (
        <div className="section sec" style={{ minHeight: "100vh" }} id="">
            <div className="text-center relative">
                <Typing header="work experience" />
                <h6 style={{ fontSize: "1rem" }}><u>internships, clubs, leadership (linkedin go crazy)</u></h6>
                <br />
                <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a>
            </div>
            <div style={{maxWidth:"80vw"}} className="image-container mx-auto shadow-lg rounded-xl my-5" id="horz" onScroll={handleScroll}>
                {exp}

            </div>

        </div>
    );
};

export default Experience;