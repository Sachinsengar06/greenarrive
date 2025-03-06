import { FaCheckCircle, FaQuoteLeft, FaStar, FaArrowRight } from "react-icons/fa";

const services = [
  { name: "Lawn Mowing & Edging", desc: "Professional lawn care for a perfect yard." },
  { name: "Tree & Shrub Trimming", desc: "Keep your trees and shrubs in great shape." },
  { name: "Flower Garden Design", desc: "Beautiful flower arrangements & care." },
  { name: "Vegetable Garden Setup", desc: "Fresh home-grown vegetables." },
  { name: "Landscaping Services", desc: "Transform your outdoor space." },
];

const testimonials = [
  { name: "Sarah M.", text: "Fantastic service! My garden has never looked better.", rating: 5 },
  { name: "John D.", text: "Professional and timely work. Highly recommended!", rating: 5 },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <div className="w-full py-16 px-4 sm:px-6 text-center bg-gradient-to-r from-green-600 to-orange-500 text-white">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Our Services</h1>
        <p className="text-lg sm:text-xl">We provide premium lawn and garden care to make your outdoor space stunning.</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg text-center border-l-4 border-green-500">
            <h2 className="text-lg sm:text-xl font-semibold text-green-700">{service.name}</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="w-full bg-green-50 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Experienced & Certified Gardeners",
            "Eco-Friendly & Sustainable Methods",
            "Affordable & Transparent Pricing",
            "Customer Satisfaction Guarantee",
          ].map((point, index) => (
            <div key={index} className="flex items-center space-x-3">
              <FaCheckCircle className="text-green-600 text-2xl" />
              <p className="text-sm sm:text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-500">What Our Customers Say</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <FaQuoteLeft className="text-3xl text-orange-400 mb-2" />
              <p className="text-gray-700 italic text-sm sm:text-base">"{review.text}"</p>
              <div className="flex items-center mt-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-900 font-semibold text-sm sm:text-base">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Order Now */}
      <div className="bg-orange-500 text-white py-10 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Ready to Transform Your Garden?</h2>
        <p className="mt-2 text-lg">Get in touch with us today for a free consultation.</p>
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-full flex items-center justify-center mx-auto hover:bg-green-700 transition">
          Order Now <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
