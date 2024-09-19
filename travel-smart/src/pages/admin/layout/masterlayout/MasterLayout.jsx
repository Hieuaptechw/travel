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
        <div className="row">
          <Sidebar />
          <div className="col-md-10 offset-md-2 no-offset-on-small content">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default memo(MasterLayoutAdmin);
