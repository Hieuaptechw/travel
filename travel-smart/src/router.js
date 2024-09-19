import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/user/layout/masterlayout/MasterLayout';
import MasterLayoutAdmin from './pages/admin/layout/masterlayout/MasterLayout';
import {ROUTERS} from './utils/router'
import Home from './pages/user/home/Home'
import DashBoard from './pages/admin/dashboard/DashBoard';
import Hotel from './pages/admin/hotel/Hotel';
import AddHotel from './pages/admin/hotel/AddHotel';

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
