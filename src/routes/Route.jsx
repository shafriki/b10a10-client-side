import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

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
    ],
  },
]);

export default Route;
