import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/layout/masterlayout/MasterLayout";
import Home from "./pages/user/home/Home";
import About from "./pages/user/about/About";
import LoginPage from "./pages/user/login";

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
    component: <LoginPage />,
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
