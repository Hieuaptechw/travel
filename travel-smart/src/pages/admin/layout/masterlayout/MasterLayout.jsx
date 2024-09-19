import { memo } from "react";
import Header from "../../../user/layout/header/Header";
import Footer from "../../../user/layout/footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import "./MasterLayout.scss";

const MasterLayoutAdmin = ({ children, ...props }) => {
  return (
    <>
      <Header />
      <section {...props} className="">
        <div className="d-md-flex">
          <Sidebar />
          <div className="flex-fill content">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default memo(MasterLayoutAdmin);
