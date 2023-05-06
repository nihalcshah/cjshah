import React from "react";
const Nav = ({ }) => {
    return (
        <div style={{position: "absolute"}}>
            <a class="cornerdrop" style={{border:"none", background:"none"}} href="/">
                <div class="p-2 rounded shadow" style={{backgroundColor:"none"}}>
                    <div className="row">
                    <img src="/pageicons/unnamed.png" class="img-fluid" alt="" />
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg> */}
                    

                    </div>
                </div>
                
            </a>
            {/* <div class="collapse navbar-collapse justify-content-end navdrop" id="navbarSupportedContent">
                
                <ul class="navbar-nav mr-auto ml-auto text-center" style={{width:"100vw"}}>
                    <li class="nav-item fs-4">
                        <button class="img-fluid" type="button" style={{border:"none", background:"none", width:"3rem"}} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                        </div>
                        
                    </button>
                    </li>
                    <li class="nav-item fs-4">
                        <a class="nav-link active h2 hoverscroll" aria-current="page" href="">Experience</a>
                    </li>
                    <li class="nav-item fs-4">
                        <a class="nav-link active h2 hoverscroll" aria-current="page" href="">Courses</a>
                    </li>
                    <li class="nav-item fs-4">
                        <a class="nav-link active h2 hoverscroll" aria-current="page" href="">Skills</a>
                    </li>
                    <li class="nav-item fs-4">
                        <a class="nav-link active h2 hoverscroll" aria-current="page" href="https://github.com/nihalcshah/">My Github <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github mb-1" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg></a>
                    </li>
                </ul>
            </div> */}
        </div>
    );
};

export default Nav;