import React from 'react';
import { Routes,Route} from 'react-router-dom'
import MasterLayout from './pages/users/Layouts/MasterLayout';
import { ROUTERS } from './utils/router';
import HomePage from './pages/users/HomePage';
import LoginPage from './pages/users/LoginPage';
const routes =[
    {
        path: ROUTERS.USER.HOME,
        component: <HomePage/>,
    },
    {
        path: ROUTERS.USER.LOGIN,
        component: <LoginPage/>,
    }
]
  
const RouterCustom = () => {
    return (
        <MasterLayout>
            <Routes>
                {routes.map((item,key) => (
                    <Route key={key} path={item.path} element={item.component}/>
                ))}
            </Routes>
        </MasterLayout>
    );
};

export default RouterCustom;