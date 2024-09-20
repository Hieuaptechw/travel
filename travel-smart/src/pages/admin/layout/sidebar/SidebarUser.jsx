            
import React from 'react';
import './Sidebar.scss'
import { Link } from 'react-router-dom';
const SidebarUser = () => {
    return (
        <>
        <aside className="col-md-2 sidebar">
            <div className="dashboard-sidebar">
              <ul className="list-unstyled d-block">
              <li className="dashboard-sidebar-item">
                  <Link to="/setting">
                  <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/booking.svg" />
                  Setting</Link>
                </li>
                <li className="dashboard-sidebar-item">
                 <Link to="/setting/booking-history"> <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/compass.svg" />
                 Booking History</Link>
                </li>
                <li className="dashboard-sidebar-item">
                  <Link to="/setting/wishlist">
                  <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/booking.svg" />
                Wishlist</Link>
                </li>
                <li className="dashboard-sidebar-item">
                  <Link to="/logout">
                  <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/booking.svg" />
                 Logout</Link>
                </li>
               
              </ul>
            </div>
          </aside>
        </>
    );
};

export default SidebarUser;