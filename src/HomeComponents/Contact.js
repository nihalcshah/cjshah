import React from "react";
import '../index.css';
import { useRef } from 'react';



function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max-min))+min;
}

function randomBinary(){
    if (Math.random()>0.5){
        return 1;
    }
    return 0;
}


const Home = ({ }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    
    return (
        <div className="d-flex section sec p-5" style={{ minHeight: "100vh", overflowX:"hidden"}} id="Home">
            <div className="m-auto row " style={{display:"block"}} >
                <div className="px-3 text-center " style={{}} id="middleblock">
                    <img src="/personalshots/Ellipse.png" className="img-fluid row text-center mx-auto changing" style={{maxWidth:"45%"}}/>
                    {/* <br/> */}
                    <div style={{display:"inline-block",  background:"none",textShadow: "2px 2px 2px rgba(44,38,54, 0.2)", fontSize:"calc(1rem + 3vw)" }} className="row m-auto p-2">
                        <div style={{ padding:0, animationDelay:"0.7s",}} className="text-pop"><b className="px-1 ">nihal shah.</b><span className="px-1" style={{fontWeight:100, marginLeft: 0}}>full stack.</span></div>
                        <div className="text-pop" style={{fontSize:"1.25rem", textShadow:"none", fontWeight:"500", padding:0}}>hello・お胚葉・salvē・नमस्ते・jambo</div>
                    </div>
                    <hr style={{height:"1.5px", opacity:"0.3", backgroundColor:"black"}} className="fadeInLeft"/>
                </div>
            </div>

        </div>
    );
};

export default Home;