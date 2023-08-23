import React from "react";
import '../../index.css';
var ReactRotatingText = require('react-rotating-text');



const Ethics = ({ }) => {
    return (
        <div classname="instrument" id="">
            <>
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 0,
                        paddingTop: "56.2500%",
                        paddingBottom: 0,
                        boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                        marginTop: "1.6em",
                        marginBottom: "0.9em",
                        overflow: "hidden",
                        borderRadius: 8,
                        willChange: "transform"
                    }}
                >
                    <iframe
                        loading="lazy"
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            border: "none",
                            padding: 0,
                            margin: 0
                        }}
                        src="https://www.canva.com/design/DAFZ_8hIMkE/view?embed"
                        allowFullScreen="allowfullscreen"
                        allow="fullscreen"
                    ></iframe>
                </div>
                <h1 className="mt-3">
                    Study the ethicality of the decisions computer scientists and software companies make as they develop solutions to issues in the world around us using Machine Learning and Computer Vision.
                </h1>
            </>

        </div>

    );
};

export default Ethics;