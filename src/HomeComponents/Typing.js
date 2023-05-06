import React, { useEffect, useState, useRef } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

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

export function typeout() {
    var pieces = document.querySelectorAll(".typescroll");
    for (var i = 0; i < pieces.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = pieces[i].getBoundingClientRect().top;
        console.log(pieces[i])
        var elementVisible = 0;
        if (elementTop < windowHeight + elementVisible) {
            console.log(elementTop)
            console.log(windowHeight)
            console.log(elementTop < windowHeight)
            pieces[i].classList.add("typing");
        }
    }
}

export default Typing;