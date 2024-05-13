import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddServices from "../Pages/AddServices";
import ManageService from "../Pages/ManageService";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addServices',
                element: <AddServices></AddServices>
            },
            {
                path:'/manageService',
                element: <ManageService></ManageService>
            }
        ]
    }
]);

export default router;