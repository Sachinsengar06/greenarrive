import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUser } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";


const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md py-1 px-2 flex justify-around items-center md:hidden z-50">
      {/* Home */}
      <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-green-600">
        <FaHome className="w-6 h-6" />
        <span className="text-xs">Home</span>
      </Link>

      {/* About */}
      <Link to="/about" className="flex flex-col items-center text-gray-700 hover:text-green-600">
        <FaInfoCircle className="w-6 h-6" />
        <span className="text-xs">About</span>
      </Link>

      {/* Services */}
      <Link to="/services" className="flex flex-col items-center text-gray-700 hover:text-green-600">
        <AiFillAppstore className="w-6 h-6"/>
        <span className="text-xs">Services</span>
      </Link>

      {/* User Profile */}
      <Link to="/profile" className="flex flex-col items-center text-gray-700 hover:text-green-600">
        <FaUser className="w-6 h-6" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  );
};

export default Footer;
