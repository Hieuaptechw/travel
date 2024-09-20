import React, { useState } from "react";
import "./Hotel.scss";

const AddHotel = () => {
  const [activeTab, setActiveTab] = useState("content");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="hotel-content">
      <h3>Add Hotel</h3>
      <p>Hotel manager</p>
      <div className="row tab-control">
        <div className="col-12 ">
          <ul className="tab-nav d-flex ">
            <li
              className={activeTab === "content" ? "active" : ""}
              onClick={() => handleTabClick("content")}
            >
              <a href="#">1. Content</a>
            </li>
            <li
              className={activeTab === "location" ? "active" : ""}
              onClick={() => handleTabClick("location")}
            >
              <a href="#">2. Location</a>
            </li>
            <li
              className={activeTab === "pricing" ? "active" : ""}
              onClick={() => handleTabClick("pricing")}
            >
              <a href="#">3. Pricing</a>
            </li>
            <li
              className={activeTab === "attribute" ? "active" : ""}
              onClick={() => handleTabClick("attribute")}
            >
              <a href="#">4. Attribute</a>
            </li>
          </ul>
        </div>
        <div className="col-12">
          {activeTab === "content" && (
            <div className="tab-content ">
              <div className="row x-gap-20 y-gap-20">
                <h5>Hotel Content</h5>
                <div className="col-12">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control mh-70"
                      placeholder="Hotel Name"
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
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control mh-70"
                      placeholder="Youtube Video"
                    />
                  </div>
                  <div className="col-12">
                    <div className="fw-bold mb-3">Banner Image</div>
                    <div class="upload-container">
                      <label for="bannerUpload" class="upload-box">
                        <div class="upload-content">
                          <i class="bi bi-upload upload-icon"></i>
                          <div class="upload-text">Upload Images</div>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="bannerUpload"
                        multiple
                        accept="image/png, image/jpeg"
                        class="upload-input"
                      />
                      <div class="upload-instructions">
                        PNG or JPG no bigger than 800px wide and tall.
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="fw-bold mb-3">Gallery</div>
                    <div class="upload-container">
                      <label for="bannerUpload" class="upload-box">
                        <div class="upload-content">
                          <i class="bi bi-upload upload-icon"></i>
                          <div class="upload-text">Upload Images</div>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="bannerUpload"
                        multiple
                        accept="image/png, image/jpeg"
                        class="upload-input"
                      />
                      <div class="upload-instructions">
                        PNG or JPG no bigger than 800px wide and tall.
                      </div>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <h4>Hotel Policy</h4>
                <div className="col-12">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control mh-70"
                      placeholder="Hotel Name"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="fw-bold mb-3">Policy</div>
                    <div className="overflow-auto">
                      <table className="table table-borderless">
                        <thead className="bg-light">
                          <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control mh-70"
                                  required
                                />
                                <label>
                                  Eg: Which footwear is most suitable?
                                </label>
                              </div>
                            </td>
                            <td>
                              <div className="form-floating">
                                <textarea
                                  className="form-control mh-70"
                                  required
                                  rows="7"
                                ></textarea>
                                <label>Content</label>
                              </div>
                            </td>
                            <td className="text-center">
                              <button className="btn btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control mh-70 "
                                  required
                                />
                                <label>Eg: Which hotel is most suitable?</label>
                              </div>
                            </td>
                            <td>
                              <div className="form-floating">
                                <textarea
                                  className="form-control mh-70"
                                  required
                                  rows="7"
                                ></textarea>
                                <label>Content</label>
                              </div>
                            </td>
                            <td className="text-center">
                              <button className="btn btn-outline-danger">
                                <i className="bi bi-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-primary mt-3">Add Item</button>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="fw-bold mb-3">Featured Image</div>
                    <div class="upload-container">
                      <label for="bannerUpload" class="upload-box">
                        <div class="upload-content">
                          <i class="bi bi-upload upload-icon"></i>
                          <div class="upload-text">Upload Images</div>
                        </div>
                      </label>
                      <input
                        type="file"
                        id="bannerUpload"
                        multiple
                        accept="image/png, image/jpeg"
                        class="upload-input"
                      />
                      <div class="upload-instructions">
                        PNG or JPG no bigger than 800px wide and tall.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "location" && (
            <div className="tab-content">
              <div className="row">
                <h5>Location</h5>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="Hotel Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="Hotel Name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="Last name"
                    aria-label="Last name"
                  />
                </div>
                <div className="mt-4">
                  <div className="fw-bold mb-3">Education</div>
                  <div className="overflow-auto overflow-scroll">
                    <table className="table table-borderless">
                      <thead className="bg-light">
                        <tr>
                          <th>Name</th>
                          <th>Content</th>
                          <th>Distance</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Sunny beach</label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                required
                                rows="5"
                              ></textarea>
                              <label>Content</label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Sunny beach</label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Select Country</label>
                            </div>
                          </td>
                          <td className="col-auto text-center">
                            <button className="btn btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Sunny beach</label>
                            </div>
                          </td>
                          <td className="col-6">
                            <div className="form-floating">
                              <textarea
                                className="form-control"
                                required
                                rows="5"
                              ></textarea>
                              <label>Content</label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Sunny beach</label>
                            </div>
                          </td>
                          <td className="col-2">
                            <div className="form-floating">
                              <input
                                type="text"
                                className="form-control"
                                required
                              />
                              <label>Select Country</label>
                            </div>
                          </td>
                          <td className="col-auto text-center">
                            <button className="btn btn-outline-danger">
                              <i className="bi bi-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mt-3">Add Item</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "pricing" && (
            <div className="tab-content">
              <div className=" row">
                <h5>Pricing</h5>
                <div class="my-3">
                  <input
                    type="text"
                    class="form-control mh-70"
                    placeholder="Hotel Price"
                  />
                </div>
                <div className="d-flex align-items-center mb-3">
                  <input type="checkbox" name="price" id="" />
                  <p className="mb-0 ml-1">Enable extra price</p>
                </div>
                <h5>Enable service fee</h5>
                <div className="d-flex align-items-center mb-3">
                  <input type="checkbox" name="price" id="" />
                  <p className="mb-0 ml-1">Enable extra fee</p>
                </div>
                <h5>Check in / Check out time</h5>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      name="time"
                      id=""
                      placeholder="Time for check in"
                      className="form-control mh-70"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="time"
                      id=""
                      placeholder="Time for check out"
                      className="form-control mh-70 "
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      name="time"
                      id=""
                      placeholder="Minimum advnace reservations"
                      className="form-control mh-70"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      name="time"
                      id=""
                      placeholder="Minimum day stay requirements"
                      className="form-control mh-70"
                    />
                  </div>
                </div>
                <div className="col-2">
                <a className="save btn btn-primary">
                      Save changes<i class="bi bi-arrow-up-right"></i>
                    </a>
                </div>
              </div>
            </div>
          )}
          {activeTab === "attribute" && (
            <div className="tab-content">
              <div className=" row">
                <div className=" mt-30 d-flex flex-column">
                  <div className="fw-500 mb-2">Property Type</div>
                  <div className="d-flex flex-row">
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-3" name="name" />
                          <label
                            htmlFor="checkbox-3"
                            className="property-type__label ml-1"
                          >
                            Holiday homes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-3" name="name" />
                          <label
                            htmlFor="checkbox-3"
                            className="property-type__label ml-1"
                          >
                            Holiday homes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-3" name="name" />
                          <label
                            htmlFor="checkbox-3"
                            className="property-type__label ml-1"
                          >
                            Holiday homes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 mb-3 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-3" name="name" />
                          <label
                            htmlFor="checkbox-3"
                            className="property-type__label ml-1"
                          >
                            Holiday homes
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-30 d-flex flex-column">
                  <div className="fw-500 mb-2">Facilities</div>
                  <div className="d-flex flex-row">
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item mb-3">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-30 d-flex flex-column">
                  <div className="fw-500 mb-2">Hotel Services</div>
                  <div className="d-flex flex-row">
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="property-type__content  scroll-bar-1 col">
                      <div className="property-type__column">
                        <div className="property-type__item">
                          <input type="checkbox" id="checkbox-1" name="name" />
                          <label
                            htmlFor="checkbox-1"
                            className="property-type__label ml-1"
                          >
                            Apartments
                          </label>
                        </div>
                        <div className="property-type__item mb-3">
                          <input type="checkbox" id="checkbox-2" name="name" />
                          <label
                            htmlFor="checkbox-2"
                            className="property-type__label ml-1"
                          >
                            Boats
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <a className="save btn btn-primary">
                      Save changes<i class="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddHotel;
