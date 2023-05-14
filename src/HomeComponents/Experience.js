import React, { useEffect, useState, useRef } from "react";
import '../index.css';
import "animate.css/animate.min.css";
import Typing from "./Typing";
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');


const Experience = ({ }) => {

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
        <div className="lg:flex bg-white my-5  border-slate-500 lg:h-56 mx-5 md:mx-36 overflow-hidden rounded-lg">
            {/* <div className="lg:w-56 w-full h-56 overflow-hidden">
                <img className=" w-full rounded" src={job.imgpath} />
            </div> */}
            <div className=" py-4 px-6   flex">
                <div className="my-auto object-contain">
                    <h1 className="text-2xl font-semibold">{job.company}</h1>
                    <h6 className="text-xl italic">{job.title}</h6>
                    <h6 className="text-lg  mb-3">{job.year}</h6>
                    <p className="line-clamp-3">
                        {job.description}
                    </p>
                </div>
            </div>
        </div>

    );

    return (
        <div className=" container w-4/5 mx-auto text-white my-12 h-4/5" id="experiencepage">
            <div className="text-left relative md:mb-12 mb-6">
                <h1 className="font-bold text-4xl leading-normal " >experience</h1>
                <h6 className="text-lg" >internships, clubs, leadership <span className="text-cyan-400">(<ReactRotatingText deletingInterval={40} typingInterval={20} items={['linkedin go crazy', 'my resume>>>', 'ask my former bosses']} pause={3000} />)</span></h6>
            </div>
            <div className="text-black relative" >
                {exp}
            </div>
            <div className="flex">
                <a href="/experience" className="flex px-3 py-2 rounded-xl border-white border-2 text-white font-bold tracking-wider relative mx-auto hover:bg-white hover:text-black">
                    View More
                    <svg xmlns="http://www.w3.org/2000/svg" className="my-auto w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>

                    <div className="rounded-full bg-sky-400 absolute -top-1 -right-1  w-3 h-3"></div>
                    <div className="rounded-full bg-sky-400 absolute -top-1 -right-1 animate-ping w-3 h-3"></div>
                </a>

            </div>
        </div>
    );
};

export default Experience;