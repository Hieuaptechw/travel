
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/user/layout/masterlayout/MasterLayout';
import MasterLayoutAdmin from './pages/admin/layout/masterlayout/MasterLayout';
import {ROUTERS} from './utils/router'
import Home from './pages/user/home/Home'
import DashBoard from './pages/admin/dashboard/DashBoard';
import Hotel from './pages/admin/hotel/Hotel';
import AddHotel from './pages/admin/hotel/AddHotel';
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/layout/masterlayout/MasterLayout";
import Home from "./pages/user/home/Home";
import HotelPage from "./pages/user/hotel/HotelPage";
import About from "./pages/user/about/About";
import TourPage from "./pages/user/tour/TourPage";
import CarPage from "./pages/user/car/CarPage";

const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <Home/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.ADMIN.DASHBOARD,
    component: <DashBoard />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.HOTEL,
    component: <Hotel />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.ADDHOTEL,
    component: <AddHotel />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.HOTELS,
    component: <HotelPage/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.TOURS,
    component: <TourPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.CARS,
    component: <CarPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.ABOUT,
    component: <About />,
    layout: MasterLayout,
  },
];

const RouterCustom = () => {
  return (
    <Routes>
      {routes.map((item, key) => {
        const Layout = item.layout || React.Fragment; 
        return (
          <Route
            key={key}
            path={item.path}
            element={<Layout>{item.component}</Layout>}
          />
        );
      })}
    </Routes>
  );
};

export default RouterCustom;
