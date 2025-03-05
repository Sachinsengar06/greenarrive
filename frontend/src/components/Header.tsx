// src/components/Header.jsx
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import mainLogo from "/homepage/black_white_leaf_logo__1_-removebg-preview (1).png";
const Header = () => {
  return (
    <div className="bg-white/40 shadow-md lg:py-4 py-1 px-5 flex justify-between items-center fixed top-0 left-0 w-full z-50 ">
      {/* Left: Logo */}
      <div className="w-auto max-w-[200px] h-auto">
        <img src={mainLogo} alt="greenarrive_logo" className="w-full h-auto" loading="lazy" />
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex space-x-8 text-gray-700">
      {["Home", "About", "Services", "Contact"].map((item, index) => (
    <Link
      key={index}
      to=""
      className="hover:text-green-600 text-gray-600 font-bold text-xl"
    >
      {item}
    </Link>
  ))}
      </div>

      {/* Right: User Icon */}
      <div className="hidden md:flex text-2xl text-gray-700 cursor-pointer">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
