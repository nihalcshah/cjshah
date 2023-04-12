import React from "react";
import '../index.css';



function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max-min))+min;
}



const Home = ({ }) => {
    return (
        <div className="d-flex section sec p-5" style={{ minHeight: "100vh"}} id="Home">

            <div className="my-auto row ">
                <div className="col-8 my-auto px-3">
                    
                    <h1 style={{ fontWeight:600, background:"none", textShadow: "2px 2px 4px rgba(4,0,45, 0.3)" ,animationDuration:getRandomInt(3000,300)+"ms" }} className="row display-1 fadeInLeft">
                        NIHAL SHAH
                    </h1>
                    <h5 style={{ fontWeight:600, animationDuration:getRandomInt(3000,300)+"ms" }} className="row chatgpt2">
                        Data Science and Computer Science
                    </h5>
                    <p className="row fadeInLeft fs-6" style={{animationDuration:getRandomInt(3000, 300)+"ms"}}>
                        A software engineer working to expand the work done in
                        cutting-edge computer science fields utilizing complex procedures
                        to develop usable solutions to problems, with the goal of making
                        the world a better place to be in.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Home;