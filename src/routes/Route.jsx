import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, // This makes Home the default child route for '/'
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/allcampaign',
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: '/addCampaign',
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: '/myCampaign',
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: '/donation',
        element: <MyDonation></MyDonation>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ],
  },
]);

export default Route;
