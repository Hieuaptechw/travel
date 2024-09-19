import React from "react";


const Header = () => {
  const handleSidebar = () => {
    // Hàm toggle sidebar để mở/đóng sidebar
    console.log("Sidebar toggled");
  };

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex justify-content-between align-items-center w-100">
        <a href="/" className="logo d-flex align-items-center">
          <span className="d-none d-lg-block">Dashboard</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={handleSidebar}></i>
      </div>
      <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" className="search-form-input" placeholder="Search" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
