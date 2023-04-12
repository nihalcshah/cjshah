import React from "react";
import '../index.css';

const Courses = ({ }) => {
    return (
        <div className="section d-flex sec p-5"  id="Courses">
            <div className="row">
                <div className="my-auto col-sm-3 rounded coursetitle d-flex" style={{ zIndex:"2"}} >
                    <div className="m-auto text-center align-self-center">
                        <h3 style={{ fontWeight: 600 }} className=" h2">Coursework</h3>
                        <div className="align-items-center">
                                <a href="/courses" className="btnstyle p-2">Learn More.</a>
                        </div>
                    </div>
                    
                </div>
                <br />
                <div className=" my-auto col-sm-9 g-2 py-3 coursecards shadow d-flex " style={{ minHeight: "60vh", borderRadius: "0px 15px 15px 0px"}} id="">
                    <div className="mx-1 row my-auto" style={{}}>
                        <div className="col-lg-3 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Artificial Intelligence 1 & 2</h4>
                                    <h6 className="card-subtitle">2021-22</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Computer Vision 1 & 2</h4>
                                    <h6 className="card-subtitle">2021-22</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Computational Statistics</h4>
                                    <h6 className="card-subtitle">2023</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">AP Computer Science</h4>
                                    <h6 className="card-subtitle">2020-21</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Mobile App Development</h4>
                                    <h6 className="card-subtitle">2023</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Web App Development</h4>
                                    <h6 className="card-subtitle">2022-23</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h4 className="card-title">Computer Systems</h4>
                                    <h6 className="card-subtitle">2022-23</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Courses;