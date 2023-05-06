import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="sec h-screen grid place-items-center" >
      <div className="text-center m-auto"  >
        <img src="/personalshots/error.png" className="w-80 m-auto"/>
        <h1 className="text-xl">R.I.P</h1>
        <p className="w-80 py-2">An unexpected error has occurred. You're probably looking for a page that is still in production! Feel free to check out my LinkedIn at <a href="https://www.linkedin.com/in/nihal-shah-at-tj/" className="text-sky-700 font-bold">cj's LinkedIn</a></p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      
    </div>
  );
}