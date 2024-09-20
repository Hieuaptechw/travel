import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./setting.scss";
import Profile from "../../../assets/images/avatar.png";
const Wishlist = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const handleImageClick = () => {
    document.getElementById("avatarUpload").click();
  };

  return (
    <div className="setting">
      <div className="hotel-content">
        <h2>Wishlist</h2>
        <p>
          Manage your personal information, account security, and customize your
          preferences.
        </p>

        <div className="row tab-control">
          <div className="col-12 ">
            <ul className="tab-nav d-flex ">
              <li
                className={activeTab === "hotel" ? "active" : ""}
                onClick={() => handleTabClick("hotel")}
              >
                <a href="#">Hotel</a>
              </li>
              <li
                className={activeTab === "tour" ? "active" : ""}
                onClick={() => handleTabClick("tour")}
              >
                <a href="#">Tour</a>
              </li>
              <li
                className={activeTab === "car" ? "active" : ""}
                onClick={() => handleTabClick("car")}
              >
                <a href="#">Car</a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            {activeTab === "hotel" && (
              <div className="tab-content wishlist-setting">
                <div className="row wishlist-item">
                  <div class="row">
                    <div class="col-md-auto">
                      <div class="card">
                        <div class="card-img">
                          <img
                            src="https://img.hieuaptech.com/Hotel/Barcelona.jpg"
                            alt="image"
                            class="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-md">
                      <p className="title">
                        The Montcalm At Brewery London City
                      </p>
                      <div class="rating">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <div class="location-info">
                        <div class="col-auto d-flex flex-row align-items-center">
                          <p className="text-muted mb-0">
                            Westminster Borough, London
                          </p>
                          <a
                            data-x-click="mapFilter"
                            class="ms-2 text-decoration-underline"
                          >
                            Show on map
                          </a>
                        </div>
                        <div class="col-auto"></div>
                        <div class="col-auto ms-2">
                          <p className="mb-0">- 2 km to city center</p>
                        </div>
                      </div>
                      <div class="amenities mt-4">
                        <div class="badge bg-transparent text-dark border">
                          Breakfast
                        </div>
                        <div class="badge bg-transparent text-dark border">
                          WiFi
                        </div>
                        <div class="badge bg-transparent text-dark border">
                          Spa
                        </div>
                        <div class="badge bg-transparent text-dark border">
                          Bar
                        </div>
                      </div>
                    </div>
                    <div class="col-md d-flex flex-column align-items-end justify-content-between">
                      <div class="review-info d-flex flex-row">
                        <div class="col-auto d-flex flex-column align-items-start">
                          <div>
                            <b>Exceptional</b>
                          </div>
                          <div className="text-muted">3,014 reviews</div>
                        </div>
                        <div class="col-auto">
                          <div class="rating-score ms-3">4.7</div>
                        </div>
                      </div>
                      <div class="price-info d-flex align-items-end">
                        <div>Starting from</div>
                        <span class="price d-flex">
                          {" "}
                          <p className="text-primary">US$72</p>/ night
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
