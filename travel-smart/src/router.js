
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/user/layout/masterlayout/MasterLayout';
import MasterLayoutAdmin from './pages/admin/layout/masterlayout/MasterLayout';
import {ROUTERS} from './utils/router'
import Home from './pages/user/home/Home'
import DashBoard from './pages/admin/dashboard/DashBoard';
import Hotel from './pages/admin/hotel/Hotel';
import AddHotel from './pages/admin/hotel/AddHotel';
import HotelPage from "./pages/user/hotel/HotelPage";
import About from "./pages/user/about/About";
import LoginPage from "./pages/user/login";
import SignUpPage from "./pages/user/Signup";
import TourPage from "./pages/user/tour/TourPage";
import AddTour from './pages/admin/tour/AddTour';
import AddCar from './pages/admin/car/AddCar';
import Tour from './pages/admin/tour/Tour';
import Car from './pages/admin/car/Car';
import HotelSingPage from './pages/user/hotel/HotelSinglePage';
import TourSingle from './pages/user/tour/TourSingle';
import CarSingle from './pages/user/car/CarSingle';
import BookingAd from './pages/admin/booking/bookingad';
import Setting from './pages/user/setting/Setting';
import Recovery from './pages/admin/hotel/Recovery';
import Wishlist from './pages/user/setting/Wishlist';
import DestinationPage from './pages/user/destinations';
import BlogPage from './pages/user/blogs/blog';
import BlogSinglePage from './pages/user/blogs/blogsingle';
import CarPage from "./pages/user/car/CarPage";
import CheckoutPage from "./pages/user/checkout/CheckoutPage";
import ErrorPage from './pages/user/404/Error';
import Booking from './pages/user/setting/Booking';
import FlightPage from './pages/user/flight/flight';

const routes = [
  {
    path: ROUTERS.USER.HOME,
    component: <Home/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.ADMIN.HOME,
    component: <DashBoard />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.HOTELS,
    component: <Hotel />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.ADDHOTELS,
    component: <AddHotel />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.TOURS,
    component: <Tour />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.ADDTOUR,
    component: <AddTour />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.CARS,
    component: <Car />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.ADDCAR,
    component: <AddCar />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.HOTELS,
    component: <HotelPage/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.HOTELSINGLE,
    component: <HotelSingPage/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.FLIGHT,
    component: <FlightPage/>,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.ADMIN.RECOVERYHOTEL,
    component: <Recovery />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.ADMIN.BOOKING,
    component: <BookingAd />,
    layout: MasterLayoutAdmin,
  },
  
  {
    path: ROUTERS.USER.TOURS,
    component: <TourPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.TOURSINGLE,
    component: <TourSingle />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.CARS,
    component: <CarPage />,
    layout: MasterLayout,
  },

  {
    path: ROUTERS.USER.CARSINGLE,
    component: <CarSingle />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.ABOUT,
    component: <About />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.CHECKOUT,
    component: <CheckoutPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.LOGIN,
    component: <LoginPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.SIGNUP,
    component: <SignUpPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.DESTINATION,
    component: <DestinationPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.SETTING,
    component: <Setting />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.SETTING,
    component: <Setting />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.WISHLIST,
    component: <Wishlist />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.BOOKINGHISRORY,
    component: <Booking />,
    layout: MasterLayoutAdmin,
  },
  {
    path: ROUTERS.USER.BLOG,
    component: <BlogPage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.BLOGSINGLE,
    component: <BlogSinglePage />,
    layout: MasterLayout,
  },
  {
    path: ROUTERS.USER.ERROR,
    component: <ErrorPage />,
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
