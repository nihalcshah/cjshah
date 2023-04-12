import React from "react";
import '../index.css';
import '../test.js';
import Sidebar from "./Sidebar";
import Home from './Home';
import Courses from './Courses';
import Skills from './Skills';
import Nav from './Nav';
import Experience from "./Experience";
const Container = ({ }) => {
    return (
        <div className="">
            <Nav />
            <Home />
            <Experience />
            <Courses />
            <Skills />
        </div>
    );
};

export default Container;