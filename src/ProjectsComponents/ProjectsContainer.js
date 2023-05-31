import React from "react";
import '../index.css';
import Nav from '../Nav';
import ProjectsPage from "./ProjectsPage";
const Container = ({ }) => {
    return (
        <div className="">
            <Nav path="../" />
            <ProjectsPage />
        </div>
    );
};

export default Container;