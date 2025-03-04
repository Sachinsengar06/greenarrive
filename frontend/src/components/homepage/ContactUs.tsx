import overlayImg from "/homepage/backgroundImg1.png";
import frameImg from "/homepage/border1.png";
import mailIcon from "/homepage/email.png";
import callIcon from "/homepage/call (2).png";
import mapIcon from "/homepage/maps-and-flags (3).png";
import mainLogo from "/homepage/black_white_leaf_logo__1_-removebg-preview (1).png"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactUs = () => {
    return (
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Background Section */}
        <div className="relative w-full min-h-[60vh] flex flex-col items-center text-center px-6 lg:px-10 pb-10">
          {/* Background Image */}
          <img
            src={overlayImg}
            alt="Service Background"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            loading="lazy"
          />
  
          {/* Service Title & Contact Info */}
          <div className="relative z-10 space-y-4 mt-10 flex flex-col lg:flex-row justify-between w-full max-w-6xl px-4">
            {/* Contact Information Section */}
            <div className="text-left space-y-6 lg:w-1/2">
              <h5 className="text-2xl text-white">Contact Us</h5>
              <h2 className="text-4xl font-bold text-orange-500">Speak To Us</h2>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ab
                consequuntur sapiente enim iusto id commodi tenetur maiores.
              </p>
  
              {/* Contact Details */}
              <div className="space-y-4">
                {/* Phone Number */}
                <div className="flex items-center space-x-4">
                  <img src={callIcon} alt="Phone" className="w-7 h-7" />
                  <div className="flex flex-col">
                    <h5 className="text-white font-bold">Phone Number</h5>
                    <p className="text-left text-white">8076240532</p>
                  </div>
                </div>
  
                {/* Email Address */}
                <div className="flex items-center space-x-4">
                  <img src={mailIcon} alt="Email" className="w-7 h-7" />
                  <div className="flex flex-col">
                    <h5 className="text-white font-bold">Email Address</h5>
                    <p className="text-left text-white">info@greenarrive.com</p>
                  </div>
                </div>
  
                {/* Location */}
                <div className="flex items-center space-x-4">
                  <img src={mapIcon} loading="lazy" alt="Location" className="w-7 h-7" />
                  <div className="flex flex-col">
                    <h5 className="text-white font-bold">Location</h5>
                    <p className="text-left text-white">Govind Nagar, Kanpur</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Services Section */}
            <div className="text-left space-y-4 lg:w-1/2">
              <h5 className="text-2xl text-green-700">Our Services</h5>
              <h2 className="text-4xl font-bold text-white">What We Offer</h2>
              <p className="text-lg text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ab
                consequuntur sapiente enim iusto id commodi tenetur maiores.
              </p>
            </div>
          </div>
        </div>
  
        {/* Frame Image (positioned after overlayImg ends) */}
        <div className="relative w-full">
          <img
            src={frameImg}
            alt="Frame Border"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
  
        {/* Footer Section */}
        <div className="flex flex-col justify-center items-center text-green-700 mt-10">
          <div className="flex justify-center"><img src={mainLogo} alt="greenarrive logo" className="w-[80%]"  /></div>
          <div className="flex justify-center space-x-3  ">
            <FaInstagram className="w-8 h-8"/>
            <FaLinkedin className="w-8 h-8"/>
            <FiMail className="w-8 h-8"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  
