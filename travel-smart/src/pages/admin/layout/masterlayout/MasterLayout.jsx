import { memo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../../user/layout/header/Header";
import Footer from "../../../user/layout/footer/Footer";
import Sidebar from "../sidebar/Sidebar";
import SidebarUser from "../sidebar/SidebarUser"; // Đảm bảo import SidebarUser
import "./MasterLayout.scss";

const MasterLayoutAdmin = ({ children, ...props }) => {
  const location = useLocation();
  
  // Kiểm tra xem đường dẫn hiện tại có phải là của admin không
  const isAdminRoute = location.pathname.startsWith('/admin'); // Thay '/admin' bằng route của bạn

  return (
    <>
      <Header />
      <section {...props} className="">
        <div className="d-md-flex">
          {isAdminRoute ? <Sidebar /> : <SidebarUser />}
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
