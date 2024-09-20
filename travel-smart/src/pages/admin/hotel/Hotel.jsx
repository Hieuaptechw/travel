import React, { useState } from "react";
import "./Hotel.scss";

const Hotel = () => {
  const [activeTab, setActiveTab] = useState("allBooking");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hotel-content">
      <h3>All Hotel</h3>
      <p>Hotel manager</p>
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
              <div className="tab-content">
                <table class="custom-table">
                  <thead>
                    <tr className="custom-table-header">
                      <th scope="col">
                        <input type="checkbox" />
                      </th>
                      <th scope="col">Name</th>
                      <th scope="col">Location</th>
                      <th scope="col">Author</th>
                      <th scope="col">Status</th>
                      <th scope="col">Review</th>
                      <th scope="col">Date</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>The May Fair Hotel</td>
                      <td>London</td>
                      <td>Hieuaptech</td>
                      <td>
                        <span class="custom-status cancelled">Cancelled </span>
                      </td>
                      <td>
                        <span>4.8</span>
                      </td>
            
                      <td>
                        04/04/2022
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
          {activeTab === "complete" && (
             <div className="tab-content">
             <div className="tab-content">
               <table class="custom-table">
                 <thead>
                   <tr className="custom-table-header">
                     <th scope="col">
                       <input type="checkbox" />
                     </th>
                     <th scope="col">Name</th>
                     <th scope="col">Location</th>
                     <th scope="col">Author</th>
                     <th scope="col">Status</th>
                     <th scope="col">Review</th>
                     <th scope="col">Date</th>
                     <th scope="col">Actions</th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>
                       <input type="checkbox" />
                     </td>
                     <td>The May Fair Hotel</td>
                     <td>London</td>
                     <td>Hieuaptech</td>
                     <td>
                       <span class="custom-status complete">Complete </span>
                     </td>
                     <td>
                       <span>4.8</span>
                     </td>
           
                     <td>
                       04/04/2022
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
          {activeTab === "processing" && (
            <div className="tab-content">
            <div className="tab-content">
              <table class="custom-table">
                <thead>
                  <tr className="custom-table-header">
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                    <th scope="col">Review</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>The May Fair Hotel</td>
                    <td>London</td>
                    <td>Hieuaptech</td>
                    <td>
                      <span class="custom-status processing">Processing
                      </span>
                    </td>
                    <td>
                      <span>4.8</span>
                    </td>
          
                    <td>
                      04/04/2022
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
                    <th scope="col">
                      <input type="checkbox" />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Author</th>
                    <th scope="col">Status</th>
                    <th scope="col">Review</th>
                    <th scope="col">Date</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>The May Fair Hotel</td>
                    <td>London</td>
                    <td>Hieuaptech</td>
                    <td>
                      <span class="custom-status cancelled">Cancelled
                      </span>
                    </td>
                    <td>
                      <span>4.8</span>
                    </td>
          
                    <td>
                      04/04/2022
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
        <div className="col-12">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
