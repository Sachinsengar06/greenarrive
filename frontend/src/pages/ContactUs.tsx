import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const googleFormUrl = " ";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // const formParams = new URLSearchParams({
    //   "entry.123456": formData.name,
    //   "entry.654321": formData.email,
    //   "entry.789012": formData.phone,
    //   "entry.345678": formData.message,
    // });

    // window.open(`${googleFormUrl}?${formParams.toString()}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-green-100 to-white text-gray-900 px-4 sm:px-6 py-10 md:pt-16">
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-green-800 text-center mb-4">
        Get In Touch
      </h2>
      <p className="text-base sm:text-lg text-gray-700 max-w-md text-center mb-8">
        Have questions? Reach out to us! We’re here to help.
      </p>

      {/* Contact Details */}
      <div className="bg-white shadow-lg p-5 sm:p-6 rounded-lg w-full max-w-screen-md mb-10 space-y-6 border-l-4 border-green-500">
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-gray-700">+91 8076240532</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          <div>
            <p className="text-lg font-semibold">Email</p>
            <p className="text-gray-700">info@greenarrive.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          <div>
            <p className="text-lg font-semibold">Location</p>
            <p className="text-gray-700">Govind Nagar, Kanpur</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-xl p-6 sm:p-8 rounded-lg w-full max-w-screen-md border-t-4 border-green-500">
        <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
          Let's Work Together
        </h3>
        <p className="text-gray-700 max-w-md mx-auto mt-2 text-sm sm:text-base pb-4">
          Whether you have a project in mind or just want to say hello, we'd love to hear from you.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;