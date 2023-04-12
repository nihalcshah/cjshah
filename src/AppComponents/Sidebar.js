import React from "react";
import '../index.css';

const Sidebar = ({ }) => {
    return (
        <div className="col-2 px-1 position-fixed " id="sticky-sidebar">
            <div className="nav flex-column flex-nowrap vh-100 overflow-auto p-2 text-center" style={{}}>
                <div className="my-auto">
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "4em", opacity: 1 }}></div>
                        <a href="#Home" className="nav-link fs-5" style={{}}>Home</a>
                    </div>
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "2em", opacity: 1 }}></div>
                        <a href="#Courses" className="nav-link" style={{}}>Courses</a>
                    </div>
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "2em", opacity: 1 }}></div>
                        <a href="#Skills" className="nav-link" style={{}}>Skills</a>
                    </div>
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "2em", opacity: 1 }}></div>
                        <a href="#Experience" className="nav-link" style={{}}>Experience</a>
                    </div>
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "2em", opacity: 1 }}></div>
                        <a href="#Projects" className="nav-link" style={{}}>Projects</a>
                    </div>
                    <div className="navline">
                        <div className="vr" style={{ width: "0.2em", height: "2em", opacity: 1 }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;