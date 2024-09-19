import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <img
            src="https://gotrip-reactjs.ibthemespro.com/img/pages/about/1.png"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                Looking for joy?
              </h1>
              <div className="text-white mt-15">
                Your trusted trip companion
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md justify-content-center">
        <div className="container">
          <div className="row justify-content-center text-center d-flex">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us?</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40 justify-between pt-50">
            <div
              className="col-lg-4 col-sm-6 aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="100"
            >
              <div className="featureIcon -type-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://gotrip-reactjs.ibthemespro.com/img/featureIcons/1/1.svg"
                    alt="image"
                    className="s-lazy"
                  />
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Best Price Guarantee</h4>
                  <p className="text-15 mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="200"
            >
              <div className="featureIcon -type-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://gotrip-reactjs.ibthemespro.com/img/featureIcons/1/2.svg"
                    alt="image"
                    className="s-lazy"
                  />
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Easy & Quick Booking</h4>
                  <p className="text-15 mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 aos-init aos-animate"
              data-aos="fade"
              data-aos-delay="300"
            >
              <div className="featureIcon -type-1">
                <div className="d-flex justify-content-center">
                  <img
                    src="https://gotrip-reactjs.ibthemespro.com/img/featureIcons/1/3.svg"
                    alt="image"
                    className="s-lazy"
                  />
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">Customer Care 24/7</h4>
                  <p className="text-15 mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <div className="col-lg-5 m-40">
              <h2 className="text-30 fw-600">About GoTrip.com</h2>
              <p className="text-5">
                These popular destinations have a lot to offer
              </p>
              <p className="text-dark-1 in-60 lg:mt-40 md:mt-20">
                "London is a shining example of a metropolis at the highest peak
                of modernity and boasts an economy and cultural diversity that’s
                the envy of other global superpowers."
                <br />
                <br />
                "Take the opportunity to acquaint yourself with its fascinating
                history chronicled by institutions like the British Museum as
                well as see how far it has come by simply riding the Tube and
                passing by celebrated landmarks like Buckingham Palace,
                Westminster Abbey, and marvels like Big Ben, the London Eye, and
                the Tower Bridge."
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://gotrip-reactjs.ibthemespro.com/img/pages/about/2.png"
                alt="image"
                className="rounded-4 w-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-60">
        <div className="container">
          <div className="border-bottom-light pb-40">
            <div
              className="row y-gap-30 justify-center text-center"
              style={{ display: "flex" }}
            >
              {/* Destinations */}
              <div
                className="col-xl-3 col-6 aos-init aos-animate"
                data-aos="fade"
                data-aos-delay="100"
              >
                <div className="text-40 lg:text-30 lh-13 fw-600">4,958</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  Destinations
                </div>
              </div>

              {/* Total Properties */}
              <div
                className="col-xl-3 col-6 aos-init aos-animate"
                data-aos="fade"
                data-aos-delay="200"
              >
                <div className="text-40 lg:text-30 lh-13 fw-600">2,869</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  Total Properties
                </div>
              </div>

              {/* Happy Customers */}
              <div
                className="col-xl-3 col-6 aos-init aos-animate"
                data-aos="fade"
                data-aos-delay="300"
              >
                <div className="text-40 lg:text-30 lh-13 fw-600">2</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  Happy Customers
                </div>
              </div>

              {/* Volunteers */}
              <div
                className="col-xl-3 col-6 aos-init aos-animate"
                data-aos="fade"
                data-aos-delay="400"
              >
                <div className="text-40 lg:text-30 lh-13 fw-600">574,974</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  Our Volunteers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-12">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Our Team</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-4">
                <img
                  src="https://gotrip-reactjs.ibthemespro.com/img/team/6.png"
                  alt="image"
                />
                <div>Courtney Henry</div>
                <div>Medical Assistant</div>
              </div>
              <div className="col-4">
                <img
                  src="https://gotrip-reactjs.ibthemespro.com/img/team/6.png"
                  alt="image"
                />
                <div>Courtney Henry</div>
                <div>Medical Assistant</div>
              </div>
              <div className="col-4">
                <img
                  src="https://gotrip-reactjs.ibthemespro.com/img/team/6.png"
                  alt="image"
                />
                <div>Courtney Henry</div>
                <div>Medical Assistant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <h3>Overheard from travelers</h3>

            <h5>These popular destinations have a lot to offer</h5>
          </div>

          <div className="d-flex">
            <div>
              <p>
                The place is in a great location in Gumbet. The area is safe and
                beautiful. The apartment was comfortable and the host was kind
                and responsive to our requests. Really a nice place.
              </p>
              <div className="col-auto">
                <img
                  src="https://gotrip-reactjs.ibthemespro.com/img/avatars/testimonials/1.png"
                  alt="image"
                  className="size-60"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 fw-500 lh-14">Annette Black</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  UX / UI Designer
                </div>
              </div>
            </div>

            <div>
              <p>
                The place is in a great location in Gumbet. The area is safe and
                beautiful. The apartment was comfortable and the host was kind
                and responsive to our requests. Really a nice place.
              </p>
              <div className="col-auto">
                <img
                  src="https://gotrip-reactjs.ibthemespro.com/img/avatars/testimonials/1.png"
                  alt="image"
                  className="size-60"
                />
              </div>
              <div className="col-auto">
                <div className="text-15 fw-500 lh-14">Annette Black</div>
                <div className="text-14 lh-14 text-light-1 mt-5">
                  UX / UI Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
