import React from "react";

import { createRoot } from "react-dom/client";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./Login/Login";
import User from "./User/User";
import Register from "./Register/Register";
import "jquery";

import "popper.js/dist/umd/popper";

import "bootstrap/dist/js/bootstrap";

import "bootstrap/dist/css/bootstrap.css";

import Header from "./Header/Header";

import Login from "./Login/Login";

import Main from "./Main/Main";

import "./App.css";

import IdeaForm from "./Form/IdeaForm";

// use error boudry / errorElement

function AppLayout() {
  return (
    <React.Fragment>
      <Header />

      <Main />
    </React.Fragment>
  );
}

function PostIdea() {
  return <IdeaForm />;
}

// PrivateRoute component to handle authentication
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

// Routing

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },

  { path: "/post", element: <IdeaForm /> },

  { path: "/login", element: <Login /> },
  {
    path: "/user",
    element: <PrivateRoute element={<User />} />,
  },
  { path: "/register", element: <Register /> },
]);

// Rendering

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
