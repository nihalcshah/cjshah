import React from "react";
import '../index.css';
import Nav from '../Nav';
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');



const ExperiencePage = ({ }) => {


    const experienceList = [
        {
            "company": "The Brite Group",
            "year": "Summer '22",
            "title": "Data Science Intern",
            "description": "During my tenure as a paid intern at The Brite Group, a private government contractor known for its frequent collaborations with various US Federal Departments, I was entrusted to work under a designated mentor. My primary responsibility was to devise and construct a Natural Language Processing pipeline utilizing ensemble learning techniques to analyze the overall perception of the American population regarding contentious topics such as the War in Ukraine.",
            "imgpath": "./workplaces/thebritegroup.jpg",
            "skills": "NLP・ensemble learning・data processing"
        },
        {
            "company": "Spraxa Solutions",
            "year": "Fall '21",
            "title": "Computer Vision Intern",
            "description": "I spent my time at Spraxa working under a mentor to analyze and design a system for shelf detection. The purpose of the internship was to develop an instance segmentation technique to find the stock of a vending machine on each opening. The eventual goal was to maximize accuracy of the model. I trained an instance segmentation model pre-trained on the Mask R-CNN Model.",
            "imgpath": "./workplaces/spraxa.jpg",
            "skills": "Computer Vision・Instance Segmentation・Memory Allocation"
            ,
        }
    ]
    const exp = experienceList.map((job, index) =>

        <div className="rounded-2xl bg-pink-300 bg-blend-overlay projectCard my-6">
            <div className="rounded-2xl flex bg-pink-200 bg-blend-overlay p-3 shadow-xl">
                <img src={job.imgpath} className="h-20 w-20 md:h-20 object-contain rounded-2xl mr-4 my-1" />
                <div className="my-auto text-left">
                    <div className="text-xl font-semibold">{job.company}</div>
                    <div>{job.year}</div>
                    <div className="w-full text-sm italic line" >{job.title}</div>
                </div>
            </div>
            <div className=" mx-auto p-4 projectdesc">
                <div>
                    <h1　className="text-sm tracking-widest font-semibold text-center uppercase">{job.skills}</h1>
                    <p className="p-2">
                        {job.description}
                    </p>
                </div>
            </div>
        </div>

    );

    return (
        <div className="instrument" id="Projects">
            <div className="fixed h-screen w-screen bg-gradient-to-br from-pink-300 via-fuchsia-300 via-80% to-purple-300 bg-fixed overflow-hidden">
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
            <div className="relative w-4/6 pt-10 mx-auto">
                <div className="text-pink-950">
                    <h1 style={{}} className="text-6xl font-bold mb-5"> experience </h1>
                    <h5 className="text-md  pb-3 border-b border-pink-950">As a developing engineer, it will take quite some time for my space of official work positions to be filled up. However, my meagre experience has rewarded me with bounds of information regarding working as a developer full time.</h5>
                </div>
                <br />
                <div className=" mx-auto text-pink-950" id="" >
                    {exp}
                </div>
            </div>

        </div>
    );
};

export default ExperiencePage;