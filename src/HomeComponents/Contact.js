import React from "react";
import { useRef } from 'react';
var ReactRotatingText = require('react-rotating-text');



function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max-min))+min;
}

function randomBinary(){
    if (Math.random()>0.5){
        return 1;
    }
    return 0;
}


const Contact = ({ }) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    // }

    function contactToggle(){
        const contactForm = document.getElementById("contactForm");
        const downIcon = document.getElementById("downIcon");
        if(contactForm.classList.contains("hidden")){
            contactForm.classList.remove("hidden");
            downIcon.classList.add("rotate-180")
        }else{
            downIcon.classList.remove("rotate-180")
            contactForm.classList.add("hidden");
        }
    }

    return (
        <div className=" container w-4/5 mx-auto text-white my-12 h-4/5 relative" id="">
            <div className="text-left relative mb-6">
                <h1 className="font-bold text-4xl leading-normal " >contact me</h1>
                <h6 className="text-lg mb-3" ><span className="text-cyan-400"><ReactRotatingText deletingInterval={40} typingInterval={20} items={['Reach out', 'Hit me up', 'Let\'s talk']} pause={3000} /></span></h6>
                {/* <button onClick={contactToggle} className="text-middle mx-auto rounded-lg bg-gradient-to-br from-sky-400 to-sky-950 text-sky-200 relative py-1 px-4 font-bold hover:from-sky-100 hover:to-sky-300 hover:text-sky-500">
                    <svg xmlns="http://www.w3.org/2000/svg" id="downIcon" className="w-6 h-6 " fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button> */}
            </div>
            <div className="flex rounded-lg bg-white p-5 text-black" id="contactForm">
                <div className="mx-auto">
                    <form name="contact" method="post" className="text-xl">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="m-3">
                            <input placeholder="Name" className="p-2 pl-5 w-full bg-gray-700 text-white focus:outline-sky-500 focus:outline-offset-2 caret-sky-400 rounded-md " type="text" name="name" />
                        </p>
                        <p className="m-3">
                            <input placeholder="Email" className="p-2 pl-5 w-full bg-gray-700 text-white focus:outline-sky-500 focus:outline-offset-2 caret-sky-400 rounded-md " type="text" name="email" />
                        </p>
                        <p className="m-4">
                            <label>What service are you looking for? </label>
                            <select name="service[]" className="bg-gray-700 text-white rounded-lg py-2 px-2 w-full" >
                                <option className="p-6" value="none" disabled selected>None</option>
                                <option className="p-2" value="static">Static Website Design</option>
                                <option className="p-2" value="dynamic">Dynamic Website Design</option>
                                <option className="p-2" value="mlai">Machine Learning / AI work</option>
                            </select>
                        </p>
                        <p className="m-3">
                            <p className="text-lg mb-2">Use the area below to note any possible specifics to the desired project, or to schedule any meetings or appointment regarding payment estimates.</p>
                            <textarea className="text-lg text-white rounded-lg p-2 w-full bg-gray-700 caret-cyan-600 focus:outline-offset-2 focus:outline-cyan-600" name="extra"></textarea>    
                        </p>
                        <div className="flex w-full">
                            <p className="mx-auto mt-2">
                                <button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-3 rounded-md text-lg text-white">Send</button>
                            </p>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;