import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoard.scss";
const DashBoard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const { Chart } = window;

    if (Chart) {
      const ctx = document.getElementById("revenue-chart").getContext("2d");

      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              label: "Revenue",
              data: [
                1200, 1500, 1800, 1700, 1600, 1400, 1500, 1600, 1800, 2000,
                2200, 2500,
              ],
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (context) => `Value: ${context.raw}`,
              },
            },
          },
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to your admin dashboard.</p>
        <div className="row g-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card p-3 bg-white rounded">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-6 card-content">
                  <div className="title">Pending</div>
                  <div className="price">$12,800</div>
                  <div className="status">Total pending</div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <div className="icon">
                    <img
                      src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/icons/1.svg"
                      alt="Pending Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card p-3 bg-white rounded">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-6">
                  <div className="title">Earnings</div>
                  <div className="price">$14,200</div>
                  <div className="status">Total earnings</div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <div className="icon">
                    <img
                      src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/icons/2.svg"
                      alt="Earnings Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card p-3 bg-white rounded">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-6">
                  <div className="title">Bookings</div>
                  <div className="price">$08,100</div>
                  <div className="status">Total bookings</div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <div className="icon">
                    <img
                      src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/icons/3.svg"
                      alt="Bookings Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card p-3 bg-white rounded">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-6">
                  <div className="title">Services</div>
                  <div className="price">$22,786</div>
                  <div className="status">Total bookable services</div>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <div className="icon">
                    <img
                      src="https://gotrip-reactjs.ibthemespro.com/img/dashboard/icons/4.svg"
                      alt="Bookable Icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-md-12 mb-4">
            <div className="chart">
              <h2>Earning Statistics</h2>
              <canvas id="revenue-chart" className="w-100"></canvas>{" "}

            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-4">
            <div className="recent-booking">
              <h2>Recent Bookings</h2>
              <table class="custom-table">
                  <thead>
                    <tr className="custom-table-header">
                      <th scope="col">Type</th>
                      <th scope="col">Title</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Excution Time</th>
                      <th scope="col">Total</th>
                      <th scope="col">Paid</th>
                      <th scope="col">Remain</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status cancelled">Cancelled </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status cancelled">Cancelled </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status pending">Pending </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status complete">Complete </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status cancelled">Cancelled </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status processing">Processing </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status pending">Pending </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>Hotel</td>
                      <td>The May Fair Hotel</td>
                      <td>04/04/2022</td>
                      <td>
                        Check in : 05/14/2022
                        <br></br>
                        Check out :05/29/2022
                      </td>
                      <td>$150</td>
                      <td>$0</td>
                      <td>$35</td>
                      <td>
                        <span class="custom-status cancelled">Cancelled </span>
                      </td>
                      <td>
                        <button class="custom-action-btn btn custom-view-btn">
                          <i class="bi bi-eye-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-edit-btn">
                          <i class="bi bi-pencil-fill"></i>
                        </button>
                        <button class="custom-action-btn btn custom-delete-btn">
                          <i class="bi bi-trash-fill"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
