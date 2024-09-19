import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/layout/masterlayout/MasterLayout";
import Home from "./pages/user/home/Home";
import HotelPage from "./pages/user/hotel/HotelPage";
import About from "./pages/user/about/About";
import TourPage from "./pages/user/tour/TourPage";

const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <Home/>,
  },
  {
    path: ROUTERS.USER.HOTELS,
    component: <HotelPage/>,
  },
  {
    path: ROUTERS.USER.TOURS,
    component: <TourPage />,
  },
  {
    path: ROUTERS.USER.ABOUT,
    component: <About />,
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
