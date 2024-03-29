import React from "react";
import Home from './Home';
import Courses from './Courses';
import Skills from './Skills';
import Nav from '../Nav';
import Experience from "./Experience";
import Freelancing from "./freelancing";
import Footer from "./Footer";
import {typeout} from "./Typing"
import Projects from "./Projects";
import Stack from "./Stack";
import Contact from "./Contact"
const Container = ({ }) => {
    window.addEventListener("scroll", typeout)

    return (
        <div className="">
            <Nav path="./" />
            <Home />
            <Freelancing />
            <Contact />
            <Experience />
            <Projects />
            <Stack />
            <Courses />
            <Skills />
            {/* <Footer /> */}
        </div>
    );
};

export default Container;