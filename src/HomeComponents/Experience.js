import React, { useEffect, useState, useRef } from "react";
import '../index.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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
            <div className="p-4 inline " style={{width:"100vw"}}>
                <AnimationOnScroll animateIn="animate__animated animate__pulse" scrollableParentSelector="">
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
                        <h6 className="text-center" style={{ letterSpacing: "0.2vw", fontWeight: "400", textTransform: "uppercase" }}>{experienceList[k][0]}・{experienceList[k][1]}</h6>
                        <h1 className="text-center experience-title" style={{ letterSpacing: "0.25vw", fontWeight: "500", textTransform: "uppercase" }}>{k}</h1>
                    </div>
                </div>
                </AnimationOnScroll>
            </div>
        );
    }
    return indents;
}

const Typing = (props) => {
    const [animated, setAnimated] = useState(false);
    const textRef = useRef();

    useEffect(() => {
        const checkScroll = () => {
            console.log("CurrentRef", textRef.current)
            console.log()
            const textTop = textRef.current.getBoundingClientRect().top;
            console.log(textTop)
            console.log("Window pos: " +window.scrollY + window.innerHeight)
            console.log("Texttop: "+ textTop)
            if (window.scrollY + window.innerHeight > textTop) {
                
                setAnimated(true);
                window.removeEventListener('scroll', checkScroll);
            }
        };
        
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    });
    const animationClass = animated ? 'typing' : '';

    return (
        <h1 style={{}} ref={textRef} className={`heading ${animationClass}`}>{props.header}</h1>
    )
}
 
const Experience = () => {
    const [animated, setAnimated] = useState(false);
    const alignScroll = useRef()
    console.log(alignScroll.current)

    useEffect(() => {
        const checkScroll = () => {
            console.log("CurrentRef", alignScroll.current)
            console.log()
            const textTop = alignScroll.current.getBoundingClientRect().top;
            console.log(textTop)
            console.log("Window pos: " +window.scrollY + window.innerHeight)
            console.log("Texttop: "+ textTop)
            if (window.scrollY + window.innerHeight > textTop) {
                
                setAnimated(true);
                window.removeEventListener('scroll', checkScroll);
            }
        };
        
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    });

    return (
        <div className="section sec2" style={{ minHeight: "100vh" }} ref={alignScroll} id="">
            <div className="text-center relative">
                {/* <AnimationOnScroll animateIn="typing"> */}
                <Typing header="work experience" />
                {/* </AnimationOnScroll> */}
                <h6 style={{ fontSize: "1rem" }}><u>internships, clubs, leadership (linkedin go crazy)</u></h6>
                <br />
                <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a>
            </div>
            <div style={{}} className="horizontal-snap" id="horz">
                {getExperience().slice()}
            </div>

        </div>
    );
};

export default Experience;