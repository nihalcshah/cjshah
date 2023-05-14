import React from "react";
import "animate.css/animate.min.css";
var ReactRotatingText = require('react-rotating-text');




const Footer = ({ }) => {

    return (
        <div className="container relative flex w-screen">
            <div className="flex mx-auto text-white">
                <div className="flex mx-auto p-4">
                    <div className="m-3 mr-4">
                        Nihal Shah (c) 
                    </div>
                    <a className="m-3">
                        linkedIn
                    </a>
                    <a className="m-3">
                        Github
                    </a>
                    <a className="m-3">
                        cjshah logo
                    </a>
                </div>
            </div>
            
        </div>

    );
};

export default Footer;