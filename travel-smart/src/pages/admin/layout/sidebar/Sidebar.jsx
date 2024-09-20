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
                        <a class="dropdown-item" href="#">
                          All Tour
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Add Tour
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Recovery
                        </a>
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
                      <a class="dropdown-item" href="#">
                        All Car
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Add Car
                      </a>
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