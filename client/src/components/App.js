import React from "react";

import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

// Routing

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout /> },

  { path: "/post", element: <IdeaForm /> },

  { path: "/login", element: <Login /> },
]);

// Rendering

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<RouterProvider router={appRouter} />);
