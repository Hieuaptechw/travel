import React, { useState } from "react";

const Booking = () => {
  const [activeTab, setActiveTab] = useState("allBooking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="hotel-content">
      <h3>All Booking</h3>
      <p>Booking history</p>
      <div className="row tab-control">
        <div className="col-12 ">
          <ul className="tab-nav d-flex ">
            <li
              className={activeTab === "allBooking" ? "active" : ""}
              onClick={() => handleTabClick("allBooking")}
            >
              <a href="#">All Booking</a>
            </li>
            <li
              className={activeTab === "complete" ? "active" : ""}
              onClick={() => handleTabClick("complete")}
            >
              <a href="#">Completed</a>
            </li>
            <li
              className={activeTab === "processing" ? "active" : ""}
              onClick={() => handleTabClick("processing")}
            >
              <a href="#">Processing</a>
            </li>

            <li
              className={activeTab === "cancelled" ? "active" : ""}
              onClick={() => handleTabClick("cancelled")}
            >
              <a href="#">Cancelled</a>
            </li>
          </ul>
        </div>
        <div className="col-12">
          {activeTab === "allBooking" && (
            <div className="tab-content">
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
                      <span class="custom-status pending">Pending</span>
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
                      <span class="custom-status pending">Pending</span>
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
                      <span class="custom-status pending">Pending</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status confirmed">Confirmed</span>
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
                      <span class="custom-status pending">Pending</span>
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
          )}
          {activeTab === "complete" && (
            <div className="tab-content">
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
                      <span class="custom-status complete">Completed</span>
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
          )}
          {activeTab === "processing" && (
            <div className="tab-content">
              <div className="tab-content">
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
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "cancelled" && (
            <div className="tab-content">
              <div className="tab-content">
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
                  </tbody>
                </table>
              </div>
            </div>
          )} 
        </div>

      </div>
    </div>
  );
};

export default Booking;
