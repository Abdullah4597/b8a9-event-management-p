import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./Router/Routes.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <RouterProvider router={createRoutes}></RouterProvider>
  </AuthProviders>
);
