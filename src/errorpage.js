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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-1/6 h-1/6 mx-auto m-4 text-white"><path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"/></svg>

        <p className="text-center font-semirbold text-xl italic">Page Not Found</p>
        <h6 className="text-2xl" >You are <span className="bg-gradient-to-br to-cyan-300 from-emerald-200 text-transparent bg-clip-text"><ReactRotatingText deletingInterval={40} typingInterval={40} items={['_________.', 'very, very lost.', 'not where you\'re supposed to be.', 'in the wrong place at the wrong time.']} pause={3000} /></span></h6>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
      </div>

    </div>
  );
}