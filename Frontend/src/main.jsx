import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Usecase from "./components/Usecase.jsx";
import Layout from "./Layout.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout component wrapping all routes
    children: [
      {
        path : '' , 
        element :< Home />
      } , 
      {
        path : 'about' ,
        element : <About/>
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "usecase",
        element: <Usecase />,
      },
      {
        path:"register" , 
        element : <Register/>
      },
      {
        path : "login" ,
        element : <Login/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
