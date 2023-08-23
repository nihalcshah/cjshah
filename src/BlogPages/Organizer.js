import React from "react";
import Page from "./Page";
import ErrorPage from "../errorpage";
import Ethics from "./Pages/Ethics";

const Organizer = [
    {
        path: "/blog/ethics",
        element: <Page title="Ethics in Computer Science: Considering the Topics of Machine Learning and Artificial Intelligence" topColor="from-red-950" bottomColor="to-red-950" textColor = "white" details={<Ethics/>} />,
        errorElement: <ErrorPage />
    },
];

export default Organizer;