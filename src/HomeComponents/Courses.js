import React from "react";
import '../index.css';

const Courses = ({ }) => {
    return (
        <div className="section sec p-5"  id="Courses" style={{minHeight:"100vh"}}>
            <div className="">
                <h1 style={{fontSize:"4rem", fontWeight:"350"}}>courses</h1>
                <h6>classes I played video games through (this is a joke)</h6>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-4 p-2 d-flex">
                    <div className="p-2 rounded card shadow m-auto" style={{border:"black"}}>
                        <div className="card">
                            <h3 className="card-header">Math</h3>
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
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2 d-flex">
                    <div className="p-2 rounded card shadow m-auto" style={{border:"black"}}>
                        <div className="card">
                            <h3 className="card-header">CS</h3>
                            <div className="card-body">
                                <p className="card-text">
                                    Advanced Computer Science courses packed to the brim with algorithms, heuristics, and optimization.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush" style={{background:"none"}}>
                                <li class="list-group-item" style={{background:"none"}}>AP Computer Science - Data Structures</li>
                                <li class="list-group-item" style={{background:"none"}}>Accelerated Computer Science</li>
                                <li class="list-group-item" style={{background:"none"}}>Artificial Intelligence 1 & 2</li>
                                <li class="list-group-item" style={{background:"none"}}>Computer Vision 1 & 2</li>
                                <li class="list-group-item" style={{background:"none"}}>Mobile App Development</li>
                                <li class="list-group-item" style={{background:"none"}}>Web App Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2 d-flex">
                    <div className="p-2 rounded card shadow m-auto" style={{border:"black"}}>
                        <div className="card">
                            <h3 className="card-header">Technical</h3>
                            <div className="card-body">
                                <p className="card-text">
                                    General technical courses that spice up my knowledge with diverse pieces
                                </p>
                            </div>
                            <ul class="list-group list-group-flush" style={{background:"none"}}>
                                <li class="list-group-item" style={{background:"none"}}>Design and Tech</li>
                                <li class="list-group-item" style={{background:"none"}}>Geosystems</li>
                                <li class="list-group-item" style={{background:"none"}}>AP Japanese and below</li>
                                <li class="list-group-item" style={{background:"none"}}>Humanities 1 & 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div class="hr-sect" ><a href="/courses" style={{textDecoration:"none", textTransform:"uppercase", color:"black"}}>See the courses</a></div>
        </div>
    );
};

export default Courses;