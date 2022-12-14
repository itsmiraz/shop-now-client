import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../Layout/Dashboard/AllProducts/AllProducts";
import AllProductsCatagory from "../Layout/Dashboard/AllProductsCaragory/AllProductsCatagory";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main/Main";
import About from "../Pages/About/About";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";
import AllSales from "../Pages/AdminPanel/AllSales";
import AllUsers from "../Pages/AdminPanel/AllUsers";
import Cart from "../Pages/Cart/Cart";
import Contact from "../Pages/Contact/Contact";
import UserPage from "../Pages/DashboardRoutes/UserPage/UserPage";
import Delivery from "../Pages/Delivery/Delivery";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Payment from "../Pages/Payment/Payment";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import Shop from "../Pages/Shop/Shop";
import AdminRoute from "./AdminRoute/AdminRoute";
import Private from "./Private";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/shop',
                loader: () => fetch(` https://shop-now-server.vercel.app/catagory/00`),
                element: <Shop></Shop>
            },
            {
                path: '/shop/:id',
                loader: ({ params }) => fetch(` https://shop-now-server.vercel.app/catagory/${params.id}`),
                element: <Shop></Shop>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/cart',
                element: <Private><Cart></Cart></Private>
            },
            {
                path: '/payments/:id',
                loader: ({ params }) => fetch(` https://shop-now-server.vercel.app/payments/${params.id}`),
                element: <Private><Payment></Payment></Private>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]

    },
    {
        path: '/dashboard',
        element: <Private><Dashboard></Dashboard></Private>,
        children: [
            {
                path: '/dashboard',
                element: <Private><UserPage></UserPage></Private>
            },
            {
                path: '/dashboard/adminpanel',
                element: <Private><AdminRoute><AdminPanel></AdminPanel></AdminRoute></Private>
            },
            {
                path: '/dashboard/allusers',
                element: <Private><AdminRoute><AllUsers></AllUsers></AdminRoute></Private>
            },
            {
                path: '/dashboard/allsales',
                element: <Private><AdminRoute><AllSales></AllSales></AdminRoute></Private>
            },
        
            {
                path: '/dashboard/productscatagory',
                element: <Private><AdminRoute><AllProductsCatagory></AllProductsCatagory></AdminRoute></Private>
            },
            {
                path: '/dashboard/products/:id',
               loader: ({ params }) => fetch(` https://shop-now-server.vercel.app/catagory/${params.id}`),
                element: <Private><AdminRoute><AllProducts></AllProducts></AdminRoute></Private>
            },
            {
                path: '/dashboard/delivery',
                element: <Private><Delivery></Delivery></Private>
            }
        ]
    },
    {
        path: '*',
        element:<Errorpage></Errorpage>

    }
])
export default router;


