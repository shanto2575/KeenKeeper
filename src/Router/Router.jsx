import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import Timeline from "../pages/Timeline";
import Stats from "../pages/Stats";
import FriendDetails from "../Components/FriendSection/FriendDetails";

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
            {
                path:'/friendsdetails/:id',
                Component:FriendDetails,
                loader:()=>fetch('/friend.json')
            }
        ]
    }
])