import React, { useEffect, useState, useRef } from "react";
import "animate.css/animate.min.css";
import Typing from "./Typing";
import "../magic.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');
const isSafari = window.navigator.userAgent.indexOf('Safari') != -1

const Freelancing = () => {
    useEffect(() => {

        if(isSafari){
            
        }
    });
    return (
        <div className=" container w-4/5 md:my-4 box-decoration-clone mx-auto text-white" style={{}} id="freelancingpage">
            <div className="text-left relative md:mb-12 mb-6">
                <h1 className="font-bold text-4xl leading-normal " >freelancing</h1>
                <h6 className="text-lg" >i'm a <span className="text-cyan-400"><ReactRotatingText deletingInterval={40} typingInterval={40} items={['hardworking', 'great', 'lazy...']}s pause={3000}/></span>partner</h6>
                {/* <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a> */}
                
            </div>
            <div className="grid md:grid-cols-2 place-content-center gap-5">
                    <div className="object-scale-down shadow-xl shadow-cyan-500/40 h-fit magictime spaceInLeft plan bg-gradient-to-br from-cyan-600 to-transparent rounded-xl p-1 opacity-40" >
                        <div className="h-full w-full bg-white text-black rounded-lg container text-center">
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
                                <div className="p-2" ><p className="text-4xl font-bold">$150</p> starting</div>
                                {/* <div className="pt-2"></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg shadow-indigo-500/40 h-fit magictime spaceInRight plan bg-gradient-to-bl from-indigo-500 to-transparent rounded-xl p-1 opacity-40" >
                        <div className="h-full w-full bg-white rounded-lg text-black container text-center">
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
                                <div className="p-2" ><p className="text-4xl font-bold">$950</p> starting</div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Freelancing;