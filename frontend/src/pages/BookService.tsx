import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import BackButton from "../components/common/BackButton";

export default function BookService() {
  const { service } = useParams();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [siteName, setSiteName] = useState("");
  const [location, setLocation] = useState("");

  const [errors, setErrors] = useState<{
    phone?: string;
    siteName?: string;
    location?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Phone Validation
    if (!phone.trim()) {
      newErrors.phone = "Mobile number is required.";
    } else if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    // Site name Validation
    if (!siteName.trim()) {
      newErrors.siteName = "School / site name is required.";
    } else if (siteName.trim().length < 3) {
      newErrors.siteName = "Site name must be at least 3 characters.";
    }

    // Location Validation
    if (!location.trim()) {
      newErrors.location = "Site location is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // Prevent page refresh if triggered by form submit
    
    if (!validateForm()) return;

    const message = `
New Site Visit Request

Service: ${formatServiceName(service)}
Contact: ${phone}
Site Name: ${siteName}
Location: ${location}
`;

    const whatsappNumber = "918076240532"; 
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message.trim()
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30">
      {/* Top bar */}
      <div className="relative top-0 z-20 bg-white/90 backdrop-blur px-4 py-4 ">
        <BackButton label="Back" onClick={() => navigate(-1)} />
      </div>

      <div className="max-w-xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {formatServiceName(service)}
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Tell us your site details and our expert will call you shortly.
          </p>
        </div>

        {/* MAIN CARD - Now using a <form> for Enter-key support */}
        <form 
          onSubmit={handleWhatsAppSubmit}
          className="bg-white rounded-2xl border shadow-sm p-5 sm:p-6 space-y-5"
        >
          {/* CALL NOW */}
          <a
            href="tel:8076240532"
            className="w-full flex items-center justify-center gap-2 rounded-xl py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            <FaPhoneAlt className="w-5 h-5" />
            Call now to book site visit
          </a>

          {/* divider */}
          <div className="flex items-center gap-3 text-gray-400 text-xs">
            <div className="flex-1 h-px bg-gray-200" />
            OR
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Contact Number */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Contact number
              </label>
              <div className="relative mt-1">
                <FaPhoneAlt className={`absolute left-3 top-2.5 w-4 h-4 transition-colors ${errors.phone ? 'text-red-400' : 'text-gray-400'}`} />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                  }}
                  placeholder="Your mobile number"
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.phone ? "border-red-500 focus:ring-red-100" : "focus:ring-green-400 border-gray-200"
                  }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Site Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Site / school / building name
              </label>
              <div className="relative mt-1">
                <FaBuilding className={`absolute left-3 top-2.5 w-4 h-4 transition-colors ${errors.siteName ? 'text-red-400' : 'text-gray-400'}`} />
                <input
                  value={siteName}
                  onChange={(e) => {
                    setSiteName(e.target.value);
                    if (errors.siteName) setErrors(prev => ({ ...prev, siteName: undefined }));
                  }}
                  placeholder="Ex: DPS Kalyanpur / ABC Apartment"
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.siteName ? "border-red-500 focus:ring-red-100" : "focus:ring-green-400 border-gray-200"
                  }`}
                />
              </div>
              {errors.siteName && <p className="text-red-500 text-xs mt-1">{errors.siteName}</p>}
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Site location / area
              </label>
              <div className="relative mt-1">
                <LuMapPin className={`absolute left-3 top-2.5 w-4 h-4 transition-colors ${errors.location ? 'text-red-400' : 'text-gray-400'}`} />
                <input
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (errors.location) setErrors(prev => ({ ...prev, location: undefined }));
                  }}
                  placeholder="Area / city"
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-all ${
                    errors.location ? "border-red-500 focus:ring-red-100" : "focus:ring-green-400 border-gray-200"
                  }`}
                />
              </div>
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 py-3 rounded-xl border-2 border-green-600 text-green-700 font-semibold hover:bg-green-50 transition active:scale-95"
          >
            Book site visit
          </button>
        </form>

        {/* Trust line */}
        <div className="mt-6 text-center text-xs text-gray-500">
          Free site inspection • No obligation • Kanpur & nearby areas
        </div>
      </div>
    </div>
  );
}

function formatServiceName(value?: string) {
  if (!value) return "Service";
  return value
    .split("-")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}