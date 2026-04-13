import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true, Component: Home
            },
            {
                path: 'timeline', Component: Timeline
            },
            {
                path: 'stats', Component: Stats
            },
        ]
    }
])