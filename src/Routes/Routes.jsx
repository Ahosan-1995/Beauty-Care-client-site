import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Shared/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddServices from "../Pages/AddServices";
import ManageService from "../Pages/ManageService";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import AllServices from "../Pages/AllServices";
import ServiceBooking from "../Pages/ServiceBooking";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('http://localhost:5000/assignment')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: ()=>fetch('http://localhost:5000/assignment')
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addServices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/manageService',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch (`http://localhost:5000/assignment/${params.id}`)
            },
            {
                path: '/details/book/:id',
                element: <ServiceBooking></ServiceBooking>,
                loader: ({params})=> fetch (`http://localhost:5000/assignment/${params.id}`)
            }
          
        ]
    }
]);

export default router;