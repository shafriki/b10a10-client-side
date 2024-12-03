import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCampaign from "../pages/AllCampaign";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
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
    ],
  },
]);

export default Route;
