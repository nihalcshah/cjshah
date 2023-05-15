import React, { useEffect, useState, useRef } from "react";
import "animate.css/animate.min.css";
import Typing from "./Typing";
import "../magic.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
var ReactRotatingText = require('react-rotating-text');
const isSafari = window.navigator.userAgent.indexOf('Safari') != -1

const Stack = () => {
    return (
        <div className=" container w-4/5 md:my-4 box-decoration-clone mx-auto text-white overflow-hidden" id="projectspage" style={{}} >
            <div className="text-left relative">
                <h1 className="font-bold text-4xl leading-normal " >my stack</h1>
                <h6 className="text-lg" >why don't you use <span className="text-cyan-300"><ReactRotatingText deletingInterval={40} typingInterval={40} items={['bootstrap', 'angular', 'common sense']}s pause={3000}/></span></h6>
                {/* <a className="buttonFill p-2" style={{ position: "relative" }}>view more.</a> */}
                
            </div>
            <div className="grid grid grid-cols-1 text-white relative ">
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/tailwind.png" className="shadow shadow-cyan-400 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-10 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">Tailwind.css</div>
                        <div>CSS Framework</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/node.png" className="shadow shadow-green-400 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">Node.js</div>
                        <div>Backend</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/react.png" className="shadow shadow-cyan-400 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">React.js</div>
                        <div>Frontend</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/python.png" className="shadow shadow-blue-600 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">Python</div>
                        <div>Development</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/mysql.png" className="shadow shadow-blue-600 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">MySQL</div>
                        <div>Databasing</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/aws.png" className="shadow shadow-amber-600 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">AWS</div>
                        <div>Cloud Computing</div>
                    </div>
                </div>
                <div className="flex mx-auto my-3 stackdev">
                    <div className="relative h-16 w-16 mr-4 my-1">
                        <img src="stacklogos/ec2.png" className="shadow shadow-orange-600 h-16 w-16 md:h-10 md:w-10 object-contain rounded-lg image" />
                        <div className="absolute h-12 w-12 md:h-8 md:w-8 object-contain left-1/4 top-0 rounded-lg bg-neutral-500 opacity-25 imgbg"></div>
                    </div>
                    <div className="my-auto text-left desc">
                        <div className="text-xl font-semibold">EC2</div>
                        <div>Cloud Virtual Machine Management</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stack;