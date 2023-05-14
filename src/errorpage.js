import { useRouteError } from "react-router-dom";
var ReactRotatingText = require('react-rotating-text');

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" h-screen grid place-items-center bg-gradient-to-br from-sky-800 to-slate-900 bg-fixed instrument" >
      <div className="text-center m-auto w-4/5 relative text-white"  >
        {/* <img src="/personalshots/error.png" className=" m-auto"/> */}
        {/* <div style={{ animationDelay: "0.7s", fontFamily: 'Instrument Sans, sans-serif' }} className=" text-pop pb-2 filltext text-white">
            <h2 className="px-1 text-5xl md:text-6xl instrument">RIP</h2>
            <h2 className="px-1 text-5xl md:text-6xl instrument">RIP</h2>
        </div> */}
        <h2 className="text-8xl font-bold tracking-widest bg-gradient-to-br to-cyan-300 from-emerald-100 text-transparent bg-clip-text">RIP</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-1/4 h-1/4 mx-auto" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>

        <p className="text-center font-semirbold text-xl">Page Not Found</p>
        <h6 className="text-2xl" >You are <span className="bg-gradient-to-br to-cyan-300 from-emerald-200 text-transparent bg-clip-text"><ReactRotatingText deletingInterval={40} typingInterval={40} items={['_________.', 'very, very lost.', 'not where you\'re supposed to be.', 'in the wrong place at the wrong time.']} pause={3000} /></span></h6>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
      </div>

    </div>
  );
}