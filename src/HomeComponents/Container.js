import React from "react";
import Sidebar from "./Sidebar";
import Home from './Home';
import Courses from './Courses';
import Skills from './Skills';
import Nav from '../Nav';
import Experience from "./Experience";
import Freelancing from "./freelancing";
import {typeout} from "./Typing"
const Container = ({ }) => {
    window.addEventListener("scroll", typeout)

    return (
        <div className="">
            <Nav />
            <Home />
            <Freelancing />
            <Experience />
            <Courses />
            <Skills />
        </div>
    );
};

export default Container;