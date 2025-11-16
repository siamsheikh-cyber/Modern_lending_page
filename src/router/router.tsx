import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Home from "../pages/home";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            }
        ]
    }
])

export default router