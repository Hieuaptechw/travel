import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./setting.scss";
import Profile from "../../../assets/images/avatar.png";
const Setting = () => {
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
        <h2>Settings</h2>
        <p>
          Manage your personal information, account security, and customize your
          preferences.
        </p>

        <div className="row tab-control">
          <div className="col-12 ">
            <ul className="tab-nav d-flex ">
              <li
                className={activeTab === "personal" ? "active" : ""}
                onClick={() => handleTabClick("personal")}
              >
                <a href="#">Personal Information</a>
              </li>
              <li
                className={activeTab === "location" ? "active" : ""}
                onClick={() => handleTabClick("location")}
              >
                <a href="#">Location Information</a>
              </li>
              <li
                className={activeTab === "changepass" ? "active" : ""}
                onClick={() => handleTabClick("changepass")}
              >
                <a href="#">Change password</a>
              </li>
            </ul>
          </div>
          <div className="col-12">
            {activeTab === "personal" && (
              <div className="tab-content ">
                <div className="row x-gap-20 y-gap-20">
                  <div className="upload-container">
                    <p>Your avatar</p>
                    <div className="upload-avatar">
                      <img
                        src={Profile}
                        alt="Avatar"
                        className="avatar-image"
                      />
                      <input
                        type="file"
                        id="avatarUpload"
                        accept="image/png, image/jpeg"
                        className="upload-input"
                        style={{ display: "none" }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                          }
                        }}
                      />
                    </div>

                    <div className="upload-instructions">
                      PNG or JPG no bigger than 800px wide and tall.
                    </div>
                  </div>
                  <div className="col-12 row">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="Business Name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="User Name"
                      />
                    </div>

                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="email"
                        class="form-control mh-70 mb-3"
                        placeholder="Email"
                        aria-label="Email"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="Youtube Video"
                      />
                    </div>
                    <div class="mb-3">
                      <textarea
                        class="form-control mh-155"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        placeholder="Content"
                      ></textarea>
                    </div>
                    <div className="col-2">
                      <a className="save btn btn-primary">
                        Save changes<i class="bi bi-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "location" && (
              <div className="tab-content ">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12 row">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="Address Line 1"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="Address Line 2"
                      />
                    </div>

                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="City"
                        aria-label="City"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="State"
                        aria-label="State"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="email"
                        class="form-control mh-70 mb-3"
                        placeholder="Select Country"
                        aria-label="Select Country"
                      />
                    </div>
                    <div class="col-6">
                      <input
                        type="text"
                        class="form-control mh-70 mb-3"
                        placeholder="ZIP Code"
                        aria-label="ZIP Code"
                      />
                    </div>
                    <div className="col-2">
                      <a className="save btn btn-primary">
                        Save changes<i class="bi bi-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "changepass" && (
              <div className="tab-content ">
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-12 row">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="Current Password"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="New Password"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control mh-70"
                        placeholder="New Password Again"
                      />
                    </div>
                    <div className="col-2 d-flex w-100">
                      <a className="save btn btn-primary">
                        Save changes<i class="bi bi-arrow-up-right ms-2"></i>
                      </a>
                      <a className="save btn btn-light ms-2">Cancel</a>
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

export default Setting;
