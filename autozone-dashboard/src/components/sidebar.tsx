import React from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiGrid,
  FiSettings,
  FiSearch,
  FiTag,
} from "react-icons/fi";


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="sidebar-container">
        <div className="text-xl font-bold mb-6">Menu</div>
        

        <Link to="/buy" onClick={onClose}>
          <FiShoppingCart />
          <span>Buy</span>
        </Link>

        <Link to="/models" onClick={onClose}>
          <FiGrid />
          <span>Models</span>
        </Link>

        <Link to="/service" onClick={onClose}>
          <FiSettings />
          <span>Service</span>
        </Link>

        <Link to="/search" onClick={onClose}>
          <FiSearch />
          <span>Search</span>
        </Link>

        <Link to="/brand" onClick={onClose}>
          <FiTag />
          <span>Brand</span>
        </Link>
      </div>

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
      />
    </>
  );
};

export default Sidebar;
