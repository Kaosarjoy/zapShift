import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Services from "../Pages/Home/Services";
import AboutUs from "../Pages/About/AboutUs";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import ForgetPassword from "../Pages/ForgetPassword";
import PrivateRouter from "../router/PrivateRouter";
import Rider from "../Pages/Rider/Rider";
import SendParcel from "../Pages/SendParcel/SendParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../Pages/DashBoard/MyParcels/MyParcels";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentSuccess from "../Pages/DashBoard/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/DashBoard/Payment/PaymentCancel";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
        index:true,
        Component:Home
    },
    {
      path:"/coverage",
      Component:Coverage,
      loader:()=>fetch('/map.json').then(res=>res.json())
    },
    {
      path:"/services",
      Component:Services
    },
    {
      path:"/sendParcel",
      element:<PrivateRouter>
        <SendParcel></SendParcel>
      </PrivateRouter>,
       loader:()=>fetch('/map.json').then(res=>res.json())
   
    },
    {
      path:'/beRider',
      element:<PrivateRouter>
        <Rider></Rider>
      </PrivateRouter>
    },
    {
      path:"/aboutUs",
      Component:AboutUs
    }
    
   ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        Component:Login
      },{
        path:'/register',
        Component:Register
      },
      {
        path:'/forget-password',
        Component:ForgetPassword
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRouter>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRouter>,
    children:[
      {
        path:'my-parcels',
        Component:MyParcels
      },
      {
        path:'payment/:parcelId',
        Component:Payment
      },{
        path:'payment-success',
        Component:PaymentSuccess
      },
      {
        path:'payment-cancelled',
        Component:PaymentCancel
      },{
        path:'payment-history',
        Component:PaymentHistory
      }
    ]
  }
]);