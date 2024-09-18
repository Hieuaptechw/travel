import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/layout/masterlayout/MasterLayout";
import Home from "./pages/user/home/Home";
import HotelPage from "./pages/user/hotel/HotelPage";


const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <Home/>,
  },
  {
    path: ROUTERS.USER.HOTELS,
    component: <HotelPage/>,
  },
];

const RouterCustom = () => {
  return (
    <MasterLayout>
      <Routes>
        {routes.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

export default RouterCustom;