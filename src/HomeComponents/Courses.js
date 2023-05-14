import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { typeout } from "./Typing"
var ReactRotatingText = require('react-rotating-text');




const Courses = ({ }) => {
    function expandMath() {
        const mathelement = document.getElementById("expandedMath");
        if (mathelement.classList.contains("hidden")) {
            mathelement.classList.remove("hidden");
            document.getElementById("mathexpand").classList.add("hidden");
            document.getElementById("mathclose").classList.remove("hidden");
        } else {
            mathelement.classList.add("hidden");
            document.getElementById("mathclose").classList.add("hidden");
            document.getElementById("mathexpand").classList.remove("hidden");
        }
    }

    function expandCS() {
        const cselement = document.getElementById("expandedCS");
        if (cselement.classList.contains("hidden")) {
            cselement.classList.remove("hidden");
            document.getElementById("csexpand").classList.add("hidden");
            document.getElementById("csclose").classList.remove("hidden");
        } else {
            cselement.classList.add("hidden");
            document.getElementById("csclose").classList.add("hidden");
            document.getElementById("csexpand").classList.remove("hidden");
        }
    }

    function expandTech() {
        const techelement = document.getElementById("expandedTech");
        if (techelement.classList.contains("hidden")) {
            techelement.classList.remove("hidden");
            document.getElementById("techexpand").classList.add("hidden");
            document.getElementById("techclose").classList.remove("hidden");
        } else {
            techelement.classList.add("hidden");
            document.getElementById("techclose").classList.add("hidden");
            document.getElementById("techexpand").classList.remove("hidden");
        }
    }

    return (
        <div className="container w-4/5 mx-auto text-white my-12 h-fit">
            <div className="text-left relative md:mb-12 mb-6">
                <h1 className="font-bold text-4xl leading-normal " >courses</h1>
                <h6 className="text-lg" >classes i <span className="text-cyan-400"><ReactRotatingText deletingInterval={40} typingInterval={20} items={['played video games', 'slept', 'zoned out']} pause={3000} /></span>through (this is a joke) </h6>
            </div>
            <div className="container md:columns-3 gap-3 relative text-black">
                <div className="break-after-column p-2 relative">
                    <div className="h-full w-full rounded-lg container text-center bg-white pb-4">
                        <button onClick={expandMath}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-4 w-6 h-6" id="mathexpand" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="hidden absolute top-4 right-4 w-6 h-6 " id="mathclose" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>

                        </button>
                        <div className="w-full h-42 p-5 text-left">
                            <h3 className=" font-semibold pb-2 flex" style={{}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="my-auto me-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
                                </svg>
                                <div className="mx-1">
                                    Math
                                </div>
                            </h3>
                            <div className="card-body">
                                <p className="card-text text-left ">
                                    The foundational mathematics courses necessary for development and analysis of complex systems.
                                </p>
                            </div>
                        </div>

                        <div className="hidden grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" id="expandedMath" style={{ background: "none" }}>
                            <div className="pb-2" >Research Statistics 1 (RS1)</div>
                            <div className="p-2" >TJ Math 4</div>
                            <div className="p-2" >AP Statistics (RS2)</div>
                            <div className="p-2" >Computational Statistics (RS3)</div>
                            <div className="pt-2">AP Calculus BC</div>
                        </div>
                    </div>
                </div>
                <div className="break-after-column p-2">
                    <div className="h-full w-full rounded-lg container text-center bg-white pb-4 relative">
                        <button onClick={expandCS}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-4 w-6 h-6" id="csexpand" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="hidden absolute top-4 right-4 w-6 h-6 " id="csclose" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <div className="w-full h-42 p-5 text-left">
                            <h3 className=" font-semibold pb-2 flex" style={{}}>
                                <svg xmlns="http://www.w3.org/2000/svg"　className="my-auto me-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                                <div className="mx-1">
                                    CS
                                </div>
                            </h3>
                            <div className="card-body">
                                <p className="card-text text-left ">
                                    Advanced Computer Science courses packed to the brim with algorithms, heuristics, and optimization.
                                </p>
                            </div>
                        </div>
                        <div id="expandedCS" className="hidden grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" style={{ background: "none" }}>
                            <div className="pb-2" >AP Computer Science - Data Structures</div>
                            <div className="p-2" >Accelerated Computer Science</div>
                            <div className="p-2" >Artificial Intelligence 1 & 2</div>
                            <div className="p-2" >Computational Statistics (RS3)</div>
                            <div className="p-2">Mobile App Development</div>
                            <div className="pt-2">Web App Development</div>
                        </div>
                    </div>
                </div>
                <div className="break-after-column p-2">
                    <div className="h-full w-full rounded-lg container text-center bg-white pb-4 relative">
                        <button onClick={expandTech}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-4 right-4 w-6 h-6" id="techexpand" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="hidden absolute top-4 right-4 w-6 h-6 " id="techclose" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </button>
                        <div className="w-full h-42 p-5 text-left">
                            <h3 className=" font-semibold pb-2 flex" style={{}}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="my-auto me-3" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>
                                <div className="mx-1">
                                    Techical
                                </div>
                            </h3>
                            <div className="card-body">
                                <p className="card-text text-left ">
                                    General technical courses that spice up my knowledge with diverse pieces
                                </p>
                            </div>
                        </div>
                        <div id="expandedTech" className=" hidden grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" style={{ background: "none" }}>
                            <div className="pb-2" >Design and Tech</div>
                            <div className="p-2" >Geosystems</div>
                            <div className="p-2" >AP Japanese (Japanese 1 - AP)</div>
                            <div className="pt-2">Humanities 1 & 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Courses;