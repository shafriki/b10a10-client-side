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
import PrivateRoute from "../routes/PrivateRoute";
import Details from "../pages/Details";
import UpdateCampaign from "../pages/UpdateCampaign";

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true, 
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: '/allcampaign',
        element:<AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaign'),
      },
      {
        path: '/addCampaign',
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: '/myCampaign/:email',
        element: (
          <PrivateRoute>
            <MyCampaign></MyCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/email/:email${params.email}`)
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)
      },
      {
        path: '/donation',
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
        
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/campaign/${params.id}`)

      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default Route;
