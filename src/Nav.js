import React from "react";
const Nav = ({ }) => {

    function revealNav(){

    }

    return (
        <div className="fixed top-3 right-3 z-30">
            <a class="" href="/">
                <div class="p-2 rounded-full shadow bg-slate-700" >
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Nav;