import { Menu } from "lucide-react";
import React from "react";
import logo from "../assets/finforz.jpg";
import "../styles/header.css";

const StickyHeader: React.FC = () => {
  return (
    <header className="sticky-header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="navbar-icon">
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
