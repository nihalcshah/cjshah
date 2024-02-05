import React from 'react';
import Home from './Home';
import ReactDOM from 'react-dom/client';
import "./index.css"
import 'flowbite';
import Error from './Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


