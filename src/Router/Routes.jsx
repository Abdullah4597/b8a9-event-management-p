import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registragion from "../pages/Registration/Registragion";
import Error from "../Pages/Error/Error";
import Service from "../Pages/Service/Service";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Pages/Profile/Profile";


const createRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        loader: () => fetch("/events.json"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registragion></Registragion>,
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
      {
        path: "/service/:id",
        loader: () => fetch("/events.json"),
        element: (
          <PrivetRoute>
            <Service></Service>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default createRoutes;
