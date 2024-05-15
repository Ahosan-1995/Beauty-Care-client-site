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
import UpdateService from "../Pages/UpdateService";
import BookedService from "../Pages/BookedService";
import Todo from "../Pages/Todo";




const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('https://assignment-11-serversite.vercel.app/assignment')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/allServices',
                element: <AllServices></AllServices>,
                loader: ()=>fetch('https://assignment-11-serversite.vercel.app/assignment')
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addServices/',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
                
            },
            {
                path: '/manageService',
                element: <PrivateRoute><ManageService></ManageService></PrivateRoute>,
                loader: ()=>fetch('https://assignment-11-serversite.vercel.app/assignment')

            },
            {
                path:'/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params})=> fetch (`https://assignment-11-serversite.vercel.app/assignment/${params.id}`)
            },
            {
                path: '/details/book/:id',
                element: <PrivateRoute><ServiceBooking></ServiceBooking></PrivateRoute>,
                loader: ({params})=> fetch (`https://assignment-11-serversite.vercel.app/assignment/${params.id}`)
            },
            {
                path:'/update/:id',
                element: <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params})=> fetch (`https://assignment-11-serversite.vercel.app/assignment/${params.id}`)
            },
            {
                path: '/bookedService',
                element:<PrivateRoute><BookedService></BookedService></PrivateRoute>,
                // loader: ()=>fetch('https://assignment-11-serversite.vercel.app/add_purchase')
            },
            {
                path:'/todo',
                element:<Todo></Todo>
            }
          
        ]
    }
]);

export default router;