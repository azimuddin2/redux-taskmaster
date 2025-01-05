import Main from "@/components/layout/Main";
import Login from "@/pages/Login/Login";
import Tasks from "@/pages/Tasks/Tasks";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Tasks></Tasks>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ],
    },
]);

export default router;