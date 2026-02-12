import frameImg from "/homepage/border1.png";
import mailIcon from "/homepage/email.png";
import callIcon from "/homepage/call (2).png";
import mapIcon from "/homepage/maps-and-flags (3).png";
import mainLogo from "/homepage/black_white_leaf_logo__1_-removebg-preview (1).png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="relative w-full max-w-[100vw] overflow-hidden">
      {/* Background Section */}
      <div
        className="relative w-full min-h-[60vh] flex flex-col items-center text-center px-6 lg:px-10 pb-8 md:pb-6"
        style={{
          background: "linear-gradient(180deg, #363435 0%, #363637 100%)"
        }}
      >
        {/* Service Title & Contact Info */}
        <div className="relative z-10 space-y-4 mt-10 flex flex-col lg:flex-row justify-between w-full max-w-6xl px-4">

          {/* Contact Information Section */}
          <div className="text-left space-y-4 lg:w-1/2 flex flex-col items-center">
            <h5 className="text-2xl text-white">Contact Us</h5>
            <h2 className="text-4xl font-bold text-orange-500">Speak To Us</h2>

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
                <img
                  src={mapIcon}
                  loading="lazy"
                  alt="Location"
                  className="w-7 h-7"
                />
                <div className="flex flex-col">
                  <h5 className="text-white font-bold">Location</h5>
                  <p className="text-left text-white">Govind Nagar, Kanpur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="text-left space-y-4 lg:w-1/2 flex flex-col items-center mt-4 lg:mt-0">
            <h5 className="text-2xl text-white">Quick Links</h5>
            <h2 className="text-4xl font-bold text-orange-500">Our Work</h2>

            <ul className="space-y-2">
              <li>
                <a
                  href="/event-gallery"
                  className="text-white hover:text-orange-400 transition"
                >
                  Event Gallery
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-white hover:text-orange-400 transition"
                >
                  Image Gallery
                </a>
              </li>
              <li>
                <a
                  href="/video-gallery"
                  className="text-white hover:text-orange-400 transition"
                >
                  Video Gallery
                </a>
              </li>
              <li>
                <a
                  href="/news-media"
                  className="text-white hover:text-orange-400 transition"
                >
                  News & Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frame Image */}
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
        <div className="flex justify-center mb-2">
          <img
            src={mainLogo}
            alt="greenarrive logo"
            className="w-[75%]"
            loading="lazy"
          />
        </div>

        <div className="flex justify-center space-x-3">
          <a
            href="https://www.instagram.com/greenarrive/#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-8 h-8 hover:text-orange-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/company/105945432/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-8 h-8 hover:text-orange-400 transition" />
          </a>

          <a href="mailto:info@greenarrive.com">
            <FiMail className="w-8 h-8 hover:text-orange-400 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
