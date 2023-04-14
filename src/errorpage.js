import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="p-4 d-flex" style={{height:"100vh"}}>
      <div className="text-center m-auto">
        <h1>R.I.P</h1>
        <p>An unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      
    </div>
  );
}