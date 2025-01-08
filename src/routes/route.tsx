import Main from "@/components/layout/Main";
import Tasks from "@/pages/Tasks/Tasks";
import Users from "@/pages/Users/Users";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Tasks />
            },
            {
                path: '/users',
                element: <Users />
            },
        ],
    },
]);

export default router;