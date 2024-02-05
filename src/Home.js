import React from "react";
import { useRef, useEffect, useState } from 'react';
import "./index.css"
import { Card, Tooltip } from 'flowbite-react';
import { experienceConstant } from "./Information";
import Nav from "./Nav";



function Home() {

  const [imgCoords1, setImgCoords1] = useState([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
  const [imgCoords2, setImgCoords2] = useState([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
  const [imgCoords3, setImgCoords3] = useState([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
  const [imgClasses, setImgClasses] = useState("fade-in")
  useEffect(() => {
    setInterval(() => {
      setImgClasses("opacity-100")

      setImgCoords1([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
      setImgCoords2([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
      setImgCoords3([Math.floor(Math.random() * 90), Math.floor(Math.random() * 90), "cycle (" + Math.floor(Math.random() * 7 + 1) + ").jpg"])
      setImgClasses("fade-in")
    }, 2000);
  }, [])

  function toggleTheme() {
    var rElem = document.getElementById("root");

    const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`

    const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`
    console.log(rElem)
    if (rElem.classList.contains("dark")) {
      document.getElementById("switch-toggle").innerHTML = lightIcon
      document.getElementById("switch-toggle").classList.add('bg-indigo-500', '-translate-x-2')
      document.getElementById("switch-toggle").classList.remove('bg-gray-700', 'translate-x-full')
      rElem.classList.remove("dark")
    } else {
      document.getElementById("switch-toggle").innerHTML = darkIcon
      document.getElementById("switch-toggle").classList.remove('bg-indigo-500', '-translate-x-2')
      document.getElementById("switch-toggle").classList.add('bg-gray-700', 'translate-x-full')
      rElem.classList.add("dark")
    }
  }

  return (
    <div className=" text-white overflow-x-hidden bg-gradient-to-r from-blue-400 to-violet-600 dark:to-indigo-900 dark:from-indigo-950  max-w-screen h-screen font-classifier font-bold">

      {/* Navigation Component */}
      <Nav /> 

      {/* Dark Mode Controlling */}
      <button className="fixed right-10 md:right-20 bottom-10 z-50 w-10 h-5 rounded-full bg-indigo-200/70 flex items-center transition duration-300  focus:outline-none shadow" onClick={toggleTheme} >
        <div className="w-6 h-6 relative rounded-full transition duration-500 transform bg-gray-700 translate-x-full p-1 text-white" id="switch-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>

        </div>
      </button>

      {/* Title Page */}
      <div className="flex w-full h-[calc(100dvh)] relative dark:bg-indigo-950 bg-white flex" >
        {/* Wave Animation */}
        <div className="absolute w-screen h-full bottom-0">
          <svg className="opacity-[70%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="bg1">
                <stop offset="0%" stopColor="currentColor" className="text-blue-400 dark:text-blue-800"></stop>
                <stop offset="50%" stopColor="currentColor" className="text-indigo-500 dark:text-indigo-800" ></stop>
                <stop offset="100%" stopColor="currentColor" className="text-violet-500 dark:text-violet-950"></stop>
              </linearGradient>
              <path id="wave1" fill="url(#bg1)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
            </defs>
            <g>
              <use xlinkHref="#wave1" opacity=".3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave1" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use opacity=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
            </g>
          </svg>
        </div>
        {/* Information */}
        <div className="w-full h-full m-auto flex bg-[url('../public/img/contd.svg')] dark:bg-[url('../public/img/whitecontd.svg')]" style={{ backgroundRepeat: "round space" }}>
          <div className="m-auto relative p-8 pb-2 z-10 ">
            {/* Title  */}
            <div className="bg-white/40 p-4 dark:bg-indigo-950/60 rounded-xl">
              <div className="filltext hidden md:block">
                <h2 className="text-7xl pb-4 tracking-[1.5rem] font-bold bg-gradient-to-r opacity-80 dark:opacity-100 from-blue-400 to-violet-400 bg-clip-text text-transparent">NIHAL CJ SHAH</h2>
                <h2 className="text-7xl pb-4 tracking-[1.5rem] font-bold bg-gradient-to-r from-blue-400 to-violet-500 dark:from-blue-600 dark:to-violet-600 bg-clip-text text-transparent">NIHAL CJ SHAH</h2>
              </div>
              <div className="filltext md:hidden">
                <h2 className="text-5xl pb-4 tracking-[1rem] font-bold bg-gradient-to-r opacity- from-blue-300 to-violet-300 bg-clip-text text-transparent">CJ SHAH</h2>
                <h2 className="text-5xl pb-4 tracking-[1rem] font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">CJ SHAH</h2>
              </div>

              <div className="tracking-widest text-xl md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-500 italic">I like making stuff.</div>
            </div>
            {/* Button Row */}
            <div className="pt-6 flex gap-x-6 text-indigo-500 dark:text-blue-300 place-content-center">
              <Tooltip content="Github">
                <div className=" ">
                  <a className="p-2 block bg-white dark:bg-indigo-800 shadow-md rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500" href="https://github.cjshah.org" target="_blank_">
                    <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                </div>
              </Tooltip>
              <Tooltip content="LinkedIn">
                <div className="">
                  <a href="https://www.linkedin.com/in/cj-at-psu/" target="_blank_" className="p-2 block bg-white dark:bg-indigo-800 shadow-md rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                  </a>
                </div>
              </Tooltip>
              <Tooltip content="My Resume">
                <div className="">
                  <a href="./NCSResume.docx" download target="_blank_" className="p-2 block bg-white dark:bg-indigo-800 shadow-md rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-violet-500">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                    </svg>
                  </a>
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Piece */}
      <div id="opener" className="flex flex-col md:flex-row md:p-0 py-10 w-screen h-fit md:min-h-[25rem] relative">
        <div className="absolute w-screen z-10 h-full bottom-0 rotate-180">
          <svg className="opacity-[50%] dark:opacity-40 md:dark:opacity-[80%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="bg2">
                <stop offset="0%" stopColor="currentColor" className="text-blue-300 dark:text-blue-500"></stop>
                <stop offset="50%" stopColor="currentColor" className="text-indigo-200 dark:text-indigo-400" ></stop>
                <stop offset="100%" stopColor="currentColor" className="text-violet-300 dark:text-violet-400"></stop>
              </linearGradient>
              <path id="wave2" fill="url(#bg2)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
            </defs>
            <g>
              <use xlinkHref="#wave2" opacity=".3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave2" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use opacty=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
            </g>
          </svg>
        </div>
        <div className="m-auto flex md:flex-row flex-col md:w-5/6">
          <div className="flex flex-col m-auto z-20 md:w-1/3 p-5 md:p-10 md:pr-0">
            <img src="img/headshots/louvrewhite.jpg" className="dark:shadow-2xl mix-blend-luminosity relative rounded-full w-56 aspect-square m-auto" />
          </div>
          <div className="flex flex-col z-20 md:w-7/12 p-5 md:p-10">
            <div className="my-auto">
              <div className="text-5xl md:text-6xl md:text-left text-center font-bold mb-4 md:mb-2">Hi, I'm CJ.</div>
              <div className="text-xl md:text-2xl md:text-left text-center font-bold">Scroll down to learn more about my life, including my projects, work experience, and hobbies.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="flex flex-col w-screen h-fit relative bg-white dark:bg-indigo-950/40">
        <div className="w-full min-h-[20rem] px-8 pt-8 z-20 md:p-16 pb-10 m-auto flex flex-col bg-[url('../public/img/contd.svg')] dark:bg-[url('../public/img/whitecontd.svg')]" style={{ backgroundRepeat: "round space" }}>
          <div className="w-full h-full rounded-2xl bg-blend-darken bg-white/60 dark:bg-transparent pt-5 px-5">
            <div className="absolute left-0 bottom-0 w-screen h-full z-10">
              <svg className="opacity-[30%] dark:opacity-[100%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
                x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
                <defs>
                  <linearGradient id="bg3">
                    <stop offset="0%" stopColor="currentColor" className="text-blue-500 dark:text-slate-800"></stop>
                    <stop offset="50%" stopColor="currentColor" className="text-indigo-400 dark:text-indigo-800" ></stop>
                    <stop offset="100%" stopColor="currentColor" className="text-violet-500 dark:text-blue-800"></stop>
                  </linearGradient>
                  <path id="wave3" fill="url(#bg3)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
                </defs>
                <g>
                  <use xlinkHref="#wave3" opacity=".3">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="10s"
                      calcMode="spline"
                      values="270 230; -334 180; 270 230"
                      keyTimes="0; .5; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite" />
                  </use>
                  <use xlinkHref="#wave3" opacity=".6">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="8s"
                      calcMode="spline"
                      values="-270 230;243 220;-270 230"
                      keyTimes="0; .6; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite" />
                  </use>
                  <use opacty=".9">
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="translate"
                      dur="6s"
                      calcMode="spline"
                      values="0 230;-140 200;0 230"
                      keyTimes="0; .4; 1"
                      keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                      repeatCount="indefinite" />
                  </use>
                </g>
              </svg>
            </div>
            {/* Title */}
            <div  className="w-full flex z-40 flex-col md:items-end relative h-fit ">
              <div className="text-indigo-400 md:text-indigo-600 text-center md:text-right md:text-indigo-900 text-5xl md:text-8xl text-shadow relative">Projects</div>
              <div className="hidden md:block text-indigo-400 text-center md:text-right text-4xl md:text-8xl text-shadow absolute bottom-[0.1rem] left-[0.1rem] md:right-[0.25rem]">Projects</div>
            </div>
            {/* Subtitle */}
            <div className="w-full flex z-40 flex-col md:items-end relative pt-3 h-fit">
              <div className="text-center text-indigo-400 text-3xl md:text-3xl text-shadow bottom-[0.1rem] right-[0.1rem] italic ">imagination gone wild</div>
            </div>
            {/* Project 1 */}
            <div className="w-fit shadow-xl mx-auto z-40 mt-8 rounded-2xl flex flex-col md:flex-row p-4 bg-indigo-400/[75%]">
              <div className="px-3 pl-0 m-auto md:px-4 py-2 w-full md:w-fit rounded-xl flex bg-indigo-400 md:my-auto">
                <img src="img/logos/workplaces/sizemeup.png" className="p-1  br-white md:p-0 w-20 h-20 aspect-square m-auto md:my-auto md:hidden" />
                <div className="mx-auto flex flex-col border-l-2 md:border-none pl-4 md:p-0">
                  <div className="text-2xl mx-auto underline underline-offset-4">SizeMeUp</div>
                  <div className="text-4xl mx-auto pt-2">2023</div>
                </div>
              </div>
              <div className="pl-4 w-fit flex m-auto md:pt-0 pt-2">
                <div className="text-xl text-indigo-900 dark:text-white m-auto">A computer-vision-based approach to predicting clothing sizes from a single photo to minimize return costs for online retailers. </div>
              </div>
              <img src="img/logos/workplaces/sizemeup.png" className="w-20 aspect-square m-auto md:my-auto hidden md:block" />
            </div>
            {/* Project 2 */}
            <div className="w-fit shadow-xl relative mx-auto z-40 mt-8 rounded-2xl flex flex-col md:flex-row p-4 bg-indigo-400/[75%]">
              <div className="px-3 pl-0 m-auto md:px-4 py-2 w-full md:w-fit rounded-xl flex bg-indigo-400 md:my-auto">
                <img src="img/logos/workplaces/tonio.png" className="w-20 h-20 bg-black rounded-xl aspect-square m-auto md:my-autoz md:hidden" />
                <div className="mx-auto flex flex-col border-l-2 md:border-none pl-4 md:p-0">
                  <div className="text-2xl mx-auto underline underline-offset-4">Tone.io</div>
                  <div className="text-4xl mx-auto pt-2">2023</div>
                </div>
              </div>
              <div className="pl-4 w-fit flex m-auto md:pt-0 pt-2">
                <div className="text-xl text-indigo-900 dark:text-white m-auto">A React API and development project for creating color tone palettes that display tones for paint matching.</div>
              </div>
              <img src="img/logos/workplaces/tonio.png" className="w-20 h-20 bg-black rounded-xl aspect-square m-auto md:my-auto hidden md:block" />
            </div>
            <a href="#" className="shadow-xl flex relative mx-auto z-40 border-2 border-indigo-400 mt-5 px-2 mb-0 bg-white text-indigo-400 hover:bg-indigo-400 hover:text-white dark:bg-indigo-400 dark:text-indigo-950 dark:hover:text-white dark:hover:bg-blue-950 rounded-lg w-fit stroke-2 " >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="pr-2 w-8 h-8" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <div className="text-xl my-auto">Explore Sites</div>
            </a>
          </div>
        </div>
      </div>

      {/* Academics */}
      <div id="academics" className="flex flex-col w-screen min-h-[30rem] relative">
        <div className="absolute w-screen h-full bottom-0 rotate-180">
          <svg className="opacity-[50%] md:dark:opacity-[80%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="bg2">
                <stop offset="0%" stopColor="currentColor" className="text-blue-300 dark:text-blue-500"></stop>
                <stop offset="50%" stopColor="currentColor" className="text-indigo-200 dark:text-indigo-400" ></stop>
                <stop offset="100%" stopColor="currentColor" className="text-violet-300 dark:text-violet-400"></stop>
              </linearGradient>
              <path id="wave2" fill="url(#bg2)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
            </defs>
            <g>
              <use xlinkHref="#wave2" opacity=".3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave2" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use opacty=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
            </g>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Image + Academics */}
          <div className="flex flex-col md:w-1/2 md:py-10 py-5 ">
            <div className="relative mb-4 md:mb-auto m-auto">
              <img src="img/landscape/FrankfurtTownDark.jpg" className="relative w-20 md:w-60 opacity-80 mix-blend-luminosity aspect-square object-fit rounded-full" />
              <img src="img/landscape/FrankfurtTownDark.jpg" className=" absolute w-20 top-0 -left-[0.5rem] top-[0.5rem] opacity-80 mix-blend-lighten md:w-60 aspect-square object-fit rounded-full" />
            </div>
            <div className="m-auto text-center md:text-left  relative mt-0">
              <div className="relative text-black dark:text-white opacity-50 dark:opacity-0">
                <div className="text-5xl md:text-7xl">Academics</div>
                <div className="text-3xl italic">let's learn...</div>
              </div>
              <div className="dark:text-indigo-400 text-white absolute -top-[0.2rem] -left-[0.2rem] ">
                <div className="text-5xl md:text-7xl">Academics</div>
                <div className="text-3xl italic">let's learn...</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-auto pb-5 text-black dark:text-white px-6 md:p-0 relative md:w-1/2 ">
            {/* Clubs */}
            <div className="relative float-left mb-5 rounded-lg shadow-xl p-4 bg-white dark:bg-indigo-500/80 w-3/4 md:w-1/2">
              <div className="text-2xl md:text-3xl pb-2">Clubs</div>
              <div className="pb-2">Leadership and Unique Projects in Clubs from TJHSST and Beyond</div>
              <hr className="py-1" height="4" />
              <div className="flex pb-0 pt-1">
                <div className="mx-auto gap-x-5 flex">
                  <div className="p-1 bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8 dark:invert" src="img/logos/usg.png" />
                  </div>
                  <div className="p-1 m-auto bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8" src="img/logos/codefy.png" />
                  </div>
                </div>
              </div>
            </div>
            {/* Courses  */}
            <div className="relative place-self-end md:mx-auto rounded-lg p-4 drop-shadow-xl bt-2 bg-white dark:bg-indigo-500/80 w-3/4 md:w-1/2">
              <div className="text-2xl md:text-3xl pb-1">Courses</div>
              <div>TJHSST’s advanced and innovative coursework paired with interesting classes taken at Penn State</div>
            </div>
          </div>
        </div>
        {/* Expansion Link */}
        <a href="#" className="flex relative mx-auto mb-[3rem] px-2 bg-white text-blue-400 hover:bg-black dark:bg-indigo-500 dark:text-indigo-950 dark:hover:text-white dark:hover:bg-blue-950 rounded-lg w-fit stroke-2 " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="pr-2 w-8 h-8" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <div className="text-xl my-auto">View More</div>
        </a>
      </div>

      {/* Education */}
      <div  className="flex flex-col w-screen h-fit relative bg-white dark:bg-indigo-950/40">
        <div id="education" className="w-full h-fit p-8 md:p-16 m-auto flex flex-col bg-[url('../public/img/contd.svg')] dark:bg-[url('../public/img/whitecontd.svg')]" style={{ backgroundRepeat: "round space" }}>
          <div className="flex md:flex-row flex-col m-auto gap-y-6 md:gap-x-6">
            {/* Penn State */}
            <div className="p-4 px-6 md:p-6 md:py-8 w-full md:w-1/2 m-auto rounded-2xl bg-indigo-500/90 flex">
              <img className="w-12 md:w-32 aspect-square outline-indigo-100 outline outline-4 outline-offset-4 object-cover m-auto rounded-full " src="https://centrehistory.org/wp-content/uploads/2021/07/Old-Main-1024x682.jpg" />
              <div className="pl-6 flex w-fit flex-col">
                <div className="flex text-2xl md:text-3xl gap-x-2">
                  <div>Penn State</div>
                  <div className="italic font-semibold my-auto text-lg md:text-2xl">2023-Now</div>
                </div>
                <div className="font-normal hidden md:block">Working towards a <span className="font-extrabold underline text-amber-400">B.S. in Computer Science and Math</span> while developing a strong focus in pitches and computer-science-centered marketing.</div>
                <div className="text-md md:hidden">Computer Science + Math</div>
              </div>
            </div>
            {/* TJ */}
            <div className="p-4 px-6 md:p-6 md:py-8 w-full md:w-1/2 m-auto rounded-2xl bg-indigo-500/90 flex">
              <img className="w-12 md:w-32 aspect-square outline-indigo-100 outline outline-4 outline-offset-4 object-cover my-auto md:m-auto rounded-full object-center" src="https://tjhsst.fcps.edu/sites/default/files/styles/superhero/public/media/hero/tj5.jpg?h=e2bcc475&itok=51ZGVDhv" />
              <div className="pl-6 flex w-fit flex-col">
                <div className="flex text-2xl md:text-3xl gap-x-2">
                  <div>TJHSST</div>
                  <div className="italic font-semibold my-auto text-lg md:text-2xl">2019-2023</div>
                </div>
                <div className="font-normal md:block hidden">My time spent at one of the nation's top schools on an <span className="font-extrabold underline text-amber-400">AI/ML Track</span> with courses taught by numerous former professors and industry leaders.</div>
                <div className="text-md md:hidden">AI/ML Track</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div id="experience" className="flex flex-col w-screen min-h-[30rem] relative">
        <div className="absolute w-screen h-full bottom-0">
          <svg className="opacity-[50%] md:dark:opacity-[80%]" version="1.1" xmlns="http://www.w3.org/2000/svg"
            x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="bg2">
                <stop offset="0%" stopColor="currentColor" className="text-blue-300 dark:text-blue-500"></stop>
                <stop offset="50%" stopColor="currentColor" className="text-indigo-200 dark:text-indigo-400" ></stop>
                <stop offset="100%" stopColor="currentColor" className="text-violet-300 dark:text-violet-400"></stop>
              </linearGradient>
              <path id="wave2" fill="url(#bg2)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
            </defs>
            <g>
              <use xlinkHref="#wave2" opacity=".3">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="10s"
                  calcMode="spline"
                  values="270 230; -334 180; 270 230"
                  keyTimes="0; .5; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use xlinkHref="#wave2" opacity=".6">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="8s"
                  calcMode="spline"
                  values="-270 230;243 220;-270 230"
                  keyTimes="0; .6; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
              <use opacty=".9">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="translate"
                  dur="6s"
                  calcMode="spline"
                  values="0 230;-140 200;0 230"
                  keyTimes="0; .4; 1"
                  keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                  repeatCount="indefinite" />
              </use>
            </g>
          </svg>
        </div>
        {/* Experience content */}
        <div className="flex flex-col w-full px-16 py-10 h-full z-30">
          <div className="text-5xl m-auto md:m-0 md:text-7xl pb-4">Experience</div>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="rounded-lg bg-indigo-300 text-black dark:text-white p-4 dark:bg-gradient-to-r from-indigo-800 to-indigo-900 via-70">
              <h3 className="text-2xl pb-1 ">The Brite Group <span className="font-medium">|</span> <span className="italic font-medium"> 2022</span></h3>
              <div className="mt-2"><i>Data Science Intern</i></div>
              <div className="font-normal text-clip text-ellipsis line-clamp-2 md:line-clamp-none">
                Contractor work for use in projects with the <span className="font-bold text-violet-700 dark:text-amber-400 dark:text-amber-400">US Dept. of Defense</span> and the <span className="font-bold text-violet-700 dark:text-amber-400">US Dept. of Education</span> to create
                <span className="font-bold text-violet-700 dark:text-amber-400"> a Natural Language Processing</span> framework. Created for high-detail sentiment extraction with through the use of <span className="font-bold text-violet-700 dark:text-amber-400">transformers</span> and <span className="font-bold text-violet-700 dark:text-amber-400">BERT</span >.
              </div>
              <hr className="py-1 mt-3" height="4" />
              <div className="flex pb-0 pt-1">
                <div className="mx-auto gap-x-5 flex">
                  <div className="p-1 bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8 invert dark:invert-0" src="https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-ptyrjxdo.png" />
                  </div>
                  <div className="p-1 m-auto bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8 invert dark:invert-0" src="https://friconix.com/png/fi-xnsuxl-tensorflow.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-indigo-300 text-black dark:text-white dark:bg-gradient-to-r from-indigo-800 to-indigo-900 via-70 p-4">
              <h3 className="text-2xl pb-1 ">Spraxa Solutions<span className="font-medium">|</span> <span className="italic font-medium"> 2021</span></h3>
              <div className="mt-2"><i>Computer Vision Intern</i></div>
              <div className="font-normal text-clip text-ellipsis line-clamp-2 md:line-clamp-none">
                Created and designed an instance-segmentation model exercising shelf detection using <span className="font-bold text-violet-700 dark:text-amber-400">OpenCV</span>, <span className="font-bold text-violet-700 dark:text-amber-400">Tensorflow</span>, and <span className="font-bold text-violet-700 dark:text-amber-400">Keras</span> to apply the <span className="font-bold text-violet-700 dark:text-amber-400">YOLOv5</span> algorithm for use in  restock-analysis to reduce shipping costs.
              </div>
              <hr className="py-1 mt-3" height="4" />
              <div className="flex pb-0 pt-1">
                <div className="mx-auto gap-x-5 flex">
                  <div className="p-1 bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8 invert dark:invert-0" src="https://global.discourse-cdn.com/business7/uploads/opencv/original/1X/76487ef436ed28b0102012160fcdae1be1efd4d4.png" />
                  </div>
                  <div className="p-1 bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8" src="https://www.svgrepo.com/show/376344/python.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-indigo-300 text-black dark:text-white dark:bg-gradient-to-r from-indigo-800 to-indigo-900 via-70 p-4">
              <h3 className="text-2xl pb-1 ">Libra.ai <span className="font-medium">|</span> <span className="italic font-medium"> 2020</span></h3>
              <div className="mt-2"><i>SQL Research and Development</i></div>
              <div className="font-normal text-clip text-ellipsis line-clamp-2 md:line-clamp-none">
                Designed a data-management and data-input mechanism through <span className="text-violet-700 dark:text-amber-400 font-bold">SQL</span> for large-form inputs to be run through simple one-liners for machine learning model training and development. Inputs had to be suitable and <span className="font-bold text-violet-700 dark:text-amber-400">formatted</span> for <span className="font-bold text-violet-700 dark:text-amber-400">PyTorch</span> and numerous other frameworks.
              </div>
              <hr className="py-1 mt-3" height="4" />
              <div className="flex pb-0 pt-1">
                <div className="mx-auto gap-x-5 flex">
                  <div className="p-1 bg-black dark:bg-white relative rounded-full aspect-square">
                    <img className="w-8 h-8 rounded-full object-fill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png" />
                  </div>
                  <div className="p-1 m-auto bg-black dark:bg-white rounded-full aspect-square object-fit">
                    <img className="w-8 h-8 invert dark:invert-0" src="https://friconix.com/png/fi-xnsuxl-tensorflow.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Expansion Link */}
        <a href="#" className="flex relative mx-auto mb-[3rem] px-2 bg-white text-blue-400 hover:bg-black dark:bg-indigo-500 dark:text-indigo-950 dark:hover:text-white dark:hover:bg-blue-950 rounded-lg w-fit stroke-2 " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="pr-2 w-8 h-8" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <div className="text-xl my-auto">View More</div>
        </a>
      </div>


    </div>
  );
}

export default Home;
