import React from "react";
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
        <div className="grid place-items-center h-screen sec" id="Home">
            {/* <div className="absolute "> </div> */}
            <div className="px-3 text-center " style={{}} id="middleblock">
                <img src="/personalshots/Ellipse.png" className="object-contain text-center mx-auto changing w-64 drop-shadow-lg" />
                {/* <br/> */}
                <div style={{}} className="p-2 text-5xl ">
                    <div style={{ animationDelay:"0.7s", textShadow:"1px 1px 3px rgba(0,0,0, 0.3)"}} className="text-pop pb-2 "><b className="px-1  ">nihal shah.</b><span className="px-1" style={{fontWeight:100, marginLeft: 0}}>full stack.</span></div>
                    <div className="text-pop text-lg pb-1" style={{ textShadow:"none", fontWeight:"500"}}>hello・お胚葉・salvē・नमस्ते・jambo</div>
                </div>
                <hr  className="h-px bg-black text-black border-none text-center drop-shadow shadow-black"/>
            </div>
        </div>
    );
};

export default Home;