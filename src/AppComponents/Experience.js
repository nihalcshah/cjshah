import React, {useEffect} from "react";
import '../index.css';
import './animate.js'

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function checkSlide(slides) {
    slides.forEach(slide => {
        // console.log(slide)
        const slideInAt = (window.scrollY + window.innerHeight) - slide.offsetHeight / 2;
        console.log(slideInAt)
        const slideBottom = slide.offsetTop + slide.offsetHeight;
        const isHalfShown = slideInAt > slide.offsetTop;
        const isNotScrolledPast = window.scrollY < slideBottom;
        if (isHalfShown && isNotScrolledPast) {
        slide.classList.add('active');
        } else {
        slide.classList.remove('active');
        }
    });
}

const Experience = ({ }) => {
    useEffect(()=> {
        console.log("Sdfds")
        const slides = document.querySelectorAll(".inline");
        console.log(slides)
        window.addEventListener('scroll', debounce(checkSlide(slides)));

    }, []) 

    return (
        <div className="section d-flex p-4 sec2" style={{minHeight:"60vh"}} id="">
            <script type="text/babel" src="./animations.js"></script>
            <div className="horizontal-snap mx-auto">
                <div className="inline px-1" style={{width: "82vw"}}>
                    <h1 className="display-3">The Brite Group</h1>
                    <div className="h5"><i>Data Science Intern</i></div>
                    <div className="h4"><u>Summer 2022</u></div>

                    <p className="h6" style={{marginTop:"5vh"}}>Utilized ensemble learning techniques to create a Natural Language Processing pipeline for Entity Recognition and Relationship Classification.</p>
                </div>
                <div className="inline px-1" style={{width: "82vw"}}>
                    <h1 className="display-3">Spraxa Solutions</h1>
                    <div className="h5"><i>Computer Vision Intern</i></div>
                    <div className="h4"><u>2021-22</u></div>

                    <p className="h6" style={{marginTop:"5vh"}}>Worked with Instance Segmentation and other computer vision processes to create a usable model for shelf detection with limited computing power.</p>
                </div>
                <div className="inline px-1" style={{width: "82vw"}}>
                    <h1 className="display-3">Pentabotix</h1>
                    <div className="h5"><i>Lead Programmer</i></div>
                    <div className="h4"><u>2020-23</u></div>

                    <p className="h6" style={{marginTop:"0vh"}}>Designed complex software engineering algorithms and solutions to gather information from, then manipulate a multi-faceted robot to perform tasks regardless of unanticipated physical interference.</p>
                </div>
                <div className="inline px-1" style={{width: "82vw"}}>
                    <h1 className="display-3">Libra</h1>
                    <div className="h5"><i>Data Management Specialist</i></div>
                    <div className="h4"><u>2020</u></div>

                    <p className="h6" style={{marginTop:"0vh"}}>Designed backend data management through SQL for ease in data loading for training and testing using Libra, a machine-learning library created to simplify training through simple one liners</p>
                </div>
                <div className="inline px-1" style={{width: "80vw"}}>
                    <h1 className="display-3">Codefy</h1>
                    <div className="h5"><i>Operations Manager</i></div>
                    <div className="h4"><u>2020</u></div>
                    <p className="h6" style={{marginTop:"0vh"}}>Worked as the Operations Manager at Codefy to coordinate classes and meetings between Tutors and Students, as well as manage large scale logistics between students worldwide.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;