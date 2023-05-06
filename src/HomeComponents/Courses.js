import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {typeout} from "./Typing"



const Courses = ({ }) => {
    // window.addEventListener("scroll", typeout)
    return (
        <div className="sec2 p-5"  id="Courses" style={{minHeight:"100vh"}}>
            <div className="">
                <AnimationOnScroll animateIn="typing">
                <h1 style={{}} className="heading typescroll">courses</h1>
                </AnimationOnScroll>
                <h6>classes I played video games through (this is a joke)</h6>
            </div>
            <br/>
            <div className="container md:columns-3 gap-3">
                <div className="break-after-column p-2">
                    <AnimationOnScroll animateIn="animate__animated animate__backInLeft" scrollableParentSelector="">
                        {/* <div className="p-2 rounded card shadow m-auto" style={{border:"black"}}>
                            <h3 className="card-header" style={{background:"none"}}>Math</h3>
                            <div className="card-body">
                                <p className="card-text">
                                    The foundational mathematics courses necessary for development and analysis of complex systems.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush" style={{background:"none"}}>
                                <li class="list-group-item" style={{background:"none"}}>Research Statistics 1 (RS1)</li>
                                <li class="list-group-item" style={{background:"none"}}>TJ Math 4</li>
                                <li class="list-group-item" style={{background:"none"}}>AP Statistics (RS2)</li>
                                <li class="list-group-item" style={{background:"none"}}>Computational Statistics (RS3)</li>
                                <li class="list-group-item" style={{background:"none"}}>AP Calculus BC</li>
                            </ul>
                        </div> */}
                        <div className="h-full w-full rounded-lg container text-center border-2 border-black">
                            <h3 className=" font-semibold p-2 text-center" style={{}}>Math</h3>
                            <div className="card-body">
                                <p className="card-text text-center p-2 border-b border-black">
                                    The foundational mathematics courses necessary for development and analysis of complex systems.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" style={{ background: "none" }}>
                                <div className="pb-2" >Research Statistics 1 (RS1)</div>
                                <div className="p-2" >TJ Math 4</div>
                                <div className="p-2" >AP Statistics (RS2)</div>
                                <div className="p-2" >Computational Statistics (RS3)</div>
                                <div className="pt-2">AP Calculus BC</div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="break-after-column p-2">
                    <AnimationOnScroll animateIn="animate__animated animate__backInDown" scrollableParentSelector="">
                        <div className="h-full w-full rounded-lg container text-center border-2 border-black">
                            <h3 className=" font-semibold p-2 text-center" style={{}}>CS</h3>
                            <div className="card-body">
                                <p className="card-text text-center p-2 border-b border-black">
                                 Advanced Computer Science courses packed to the brim with algorithms, heuristics, and optimization.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" style={{ background: "none" }}>
                                <div className="pb-2" >AP Computer Science - Data Structures</div>
                                <div className="p-2" >Accelerated Computer Science</div>
                                <div className="p-2" >Artificial Intelligence 1 & 2</div>
                                <div className="p-2" >Computational Statistics (RS3)</div>
                                <div className="p-2">Mobile App Development</div>
                                <div className="pt-2">Web App Development</div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className=" break-after-column p-2">
                    <AnimationOnScroll animateIn="animate__animated animate__backInDown" scrollableParentSelector="">
                        <div className="h-full w-full rounded-lg container text-center border-2 border-black">
                            <h3 className=" font-semibold p-2 text-center" style={{}}>Technical</h3>
                            <div className="card-body">
                                <p className="card-text text-center p-2 border-b border-black">
                                General technical courses that spice up my knowledge with diverse pieces
                                </p>
                            </div>
                            <div className="grid grid-cols-1 items-center divide-y divide-black divide-y-reverse-2 border-t border-black p-2" style={{ background: "none" }}>
                                <div className="pb-2" >Design and Tech</div>
                                <div className="p-2" >Geosystems</div>
                                <div className="p-2" >AP Japanese (Japanese 1 - AP)</div>
                                <div className="pt-2">Humanities 1 & 2</div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
            <br/>
            {/* <div class="hr-sect" ><a href="/courses" style={{textDecoration:"none", textTransform:"uppercase", color:"black"}}>See the courses</a></div> */}
        </div>
    );
};

export default Courses;