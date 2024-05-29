import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header/Header";
import Login from "./Login/Login";
import User from "./User/User";
import IdeaDetail from "./Main/IdeaDetail";
import Register from "./Register/Register";
import Main from "./Main/Main";
import IdeaForm from "./Form/IdeaForm";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

// use error boudry / errorElement

// AppLayout component to wrap other components with header
const AppLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

function PostIdea() {
  return <IdeaForm />;
}

// PrivateRoute component to handle authentication
const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

// Routing
const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/post" element={<IdeaForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<PrivateRoute element={<User />} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:id" element={<IdeaDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

// Rendering
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

//  error pagee bhi id pr jaaa rhe the
