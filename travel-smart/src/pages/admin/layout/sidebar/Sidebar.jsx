import React from 'react';
import './Sidebar.scss'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
        <aside className="col-md-2 sidebar">
            <div className="dashboard-sidebar">
              <ul className="list-unstyled d-block">
                <li className="dashboard-sidebar-item">
                 <Link to="/admin/dashboard"> <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/compass.svg" />
                 Dashboard</Link>
                </li>
                <li className="dashboard-sidebar-item">
                  <Link to="/admin/booking">
                  <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/booking.svg" />
                  Booking Manager</Link>
                </li>
                <li className="dropdown dashboard-sidebar-item">
                  <label
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/compass.svg" />
                    Mananger Hotel
                  </label>
                  <ul class="dropdown-menu test">
                    <li>
                      <Link to="/admin/hotel" class="dropdown-item" href="#">
                        All Hotels
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/hotel/add" class="dropdown-item" href="#">
                        Add Hotel
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/hotel/recovery" class="dropdown-item" href="#">
                        Recovery
                      </Link>
                    </li>
                  </ul>
                </li>

                  <li className="dropdown dashboard-sidebar-item">
                    <label
                      class="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/map.svg" />
                      Mananger Tour
                    </label>
                    <ul class="dropdown-menu">
                      <li>
                        <Link to="/admin/tour" class="dropdown-item" href="#">
                          All Tour
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/tour/add" class="dropdown-item" href="#">
                          Add Tour
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/tour/recovey" class="dropdown-item" href="#">
                          Recovery
                        </Link>
                      </li>
                    </ul>
                  </li>
          
                <li className="dropdown dashboard-sidebar-item">
                  <label
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/taxi.svg" />
                    Mananger Car
                  </label>
                  <ul class="dropdown-menu">
                    <li>
                      <Link to="/admin/car" class="dropdown-item">
                        All Car
                      </Link>
                    </li>
                    <li>
                      <Link to="/admin/car/add" class="dropdown-item">
                        Add Car
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dashboard-sidebar-item">
                  <img src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/sidebar/log-out.svg" />
                  Logout
                </li>
              </ul>
            </div>
          </aside>
        </>
    );
};

export default Sidebar;