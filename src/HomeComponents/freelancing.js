import React, { useEffect, useState, useRef } from "react";
import "animate.css/animate.min.css";
import Typing from "./Typing";
import "../magic.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Freelancing = () => {
    useEffect(() => {
        const track = document.querySelector('plan')//To access the div with class slide track
        console.log("track", track);
    });
    return (
        <div className="sec2 container p-5" style={{ minHeight: "100vh"}} id="">
            <div className="text-center relative mb-12">
                <AnimationOnScroll animateIn="typing">
                    <h1 className="font-bold text-4xl leading-normal " style={{textShadow:"1px 1px 3px rgba(0,0,0, 0.3)"}}>freelancing</h1>
                </AnimationOnScroll>
                <h6 className="text-lg underline underline-offset-8" style={{textShadow:"1px 1px 3px rgba(0,0,0, 0.3)"}}>lets work together</h6>
                {/* <br/> */}
                {/* <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a> */}
            </div>
            <div className="grid  grid-cols-2 place-content-center">
                <div className="relative w-sm-80 h-80">
                    <div className="object-scale-down absolute shadow-lg shadow-indigo-500/40 -bottom-7 -right-10 h-fit magictime swap plan bg-gradient-to-br from-indigo-900 to-transparent rounded-xl p-1 opacity-40" >
                        <div className="h-full w-full bg-white rounded-lg container text-center">
                            <h1 className="card-header font-semibold text-3xl p-2 text-center" style={{}}>static plan</h1>
                            <div className="card-body">
                                <p className="card-text text-center p-2">
                                    Decorational website with limited functionality, made to get information out.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-center divide-y  divide-y-reverse-2 border-t p-2" style={{ background: "none" }}>
                                <div className="pb-2" >React or Next.js</div>
                                <div className="p-2" >Simple and Easy to Maintain</div>
                                <div className="p-2" >No Additional Development Costs</div>
                                <div className="p-2" >Fast Delivery Time</div>
                                <div className="p-2" ><p className="text-4xl font-bold">$150</p> min</div>
                                {/* <div className="pt-2"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative w-sm-80 h-80">

                </div>
                <div className="relative w-sm-80 h-80">

                </div>
                <div className="relative w-sm-80 h-80">
                    <div className="absolute shadow-lg shadow-indigo-500/40 -top-7 -left-10 h-fit magictime swap plan bg-gradient-to-br from-indigo-900 to-transparent rounded-xl p-1 opacity-40" >
                        <div className="h-full w-full bg-white rounded-lg container text-center">
                            <h1 className="card-header font-semibold text-3xl p-2 text-center" style={{}}>dynamic plan</h1>
                            <div className="card-body">
                                <p className="card-text text-center p-2">
                                    Fully-functional website developed for the purposes of managing and manipulating data
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-center divide-y  divide-y-reverse-2 border-t p-2" style={{ background: "none" }}>
                                <div className="pb-2">Forms, Backend Functions, Authorizations</div>
                                <div className="p-2">Longer Development Time</div>
                                <div className="p-2">Ease of Updating and Use</div>
                                <div className="p-2">Optional Additional Development Costs</div>
                                <div className="p-2" ><p className="text-4xl font-bold">$400</p> min</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="absolute w-3/6 -bottom-40 -right-40 magictime swap plan bg-gradient-to-br from-indigo-900 to-transparent rounded-xl p-1 opacity-40" >
                            <div className="h-full w-full bg-white rounded-lg container text-center">
                                <h1 className="card-header font-semibold text-3xl p-2 text-center" style={{}}>static plan</h1>
                                <div className="card-body">
                                    <p className="card-text text-center p-2">
                                        Decorational website with limited functionality, made to get information out. 
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 items-center divide-y  divide-y-reverse-2 border-t p-2" style={{background: "none"}}>
                                    <div className="pb-2" >Research Statistics 1 (RS1)</div>
                                    <div className="p-2" >TJ Math 4</div>
                                    <div className="p-2" >AP Statistics (RS2)</div>
                                    <div className="p-2" >Computational Statistics (RS3)</div>
                                    <div className="pt-2">AP Calculus BC</div>
                                </div>
                            </div>                    
                        </div>                    */}

            </div>

        </div>
    );
};

export default Freelancing;