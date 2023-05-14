import React from "react";
import '../index.css';
import Nav from '../Nav';
import Skillpage from "./Skillspage";
const Container = ({ }) => {
    return (
        <div className="">
            <Nav path="../" />
            <Skillpage />
        </div>
    );
};

export default Container;