import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from './errorpage';
import reportWebVitals from './reportWebVitals';
import Coursecontainer from './CourseComponents/Coursecontainer'
import Skillscontainer from './SkillsComponents/Skillcontainer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/courses",
    element: <Coursecontainer />,
    errorElement: <ErrorPage />
  },
  {
    path: "/skills",
    element: <Skillscontainer />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
