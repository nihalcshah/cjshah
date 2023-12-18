import React from 'react';
import Home from './Home';
import "./index.css"
import 'flowbite';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <Home />,
  },
]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


