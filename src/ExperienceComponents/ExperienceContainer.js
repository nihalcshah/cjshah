import React from "react";
import '../index.css';
import Nav from '../Nav';
import ExperiencePage from "./ExperiencePage";
const Container = ({ }) => {
    return (
        <div className="">
            <Nav path="../" />
            <ExperiencePage />
        </div>
    );
};

export default Container;