import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/layout/masterlayout/MasterLayout";
import Home from "./pages/user/home/Home";
import About from "./pages/user/about/About";
import Login from "./pages/user/login/Login";
import Signup from "./pages/user/Signup/Signup";

const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <Home />,
  },
  {
    path: ROUTERS.USER.ABOUT,
    component: <About />,
  },
  {
    path: ROUTERS.USER.LOGIN,
    component: <Login />,
  },
  {
    path: ROUTERS.USER.SIGNUP,
    component: <Signup />,
  },
];

const RouterCustom = () => {
  return (
    <MasterLayout>
      <Routes>
        {" "}
        {routes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}{" "}
      </Routes>{" "}
    </MasterLayout>
  );
};

export default RouterCustom;
