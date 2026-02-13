import {
  FaCheckCircle,
  FaQuoteLeft,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import PlanSelector from "../components/features/plans/PlanSelector";

export const testimonials = [
  {
    name: "School Administrator, Kanpur",
    text:
      "GreenArrive helped us redesign our school garden with a very clear plan and minimal disruption to daily activities. Their team was professional, responsive and guided us properly even before the site visit.",
    rating: 5
  },
  {
    name: "Residential Society Manager",
    text:
      "The team suggested practical plant layouts and low-maintenance options for our society. The execution was smooth and the follow-up support was very helpful.",
    rating: 5
  },
  {
    name: "Corporate Facility Head",
    text:
      "We were looking for a reliable landscaping partner for regular maintenance. GreenArrive provided transparent pricing and a well-structured maintenance schedule.",
    rating: 4
  },
  {
    name: "Independent Home Owner, Kanpur",
    text:
      "They clearly explained what is possible within our budget and space. The site visit and plant selection process was simple and well organised.",
    rating: 5
  }
];


const ServicePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <PlanSelector/>

      {/* Why Choose Us */}
      <div className="w-full bg-green-50 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
          Why Choose Us?
        </h2>
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
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-500">
          What Our Customers Say
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((review, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <FaQuoteLeft className="text-3xl text-orange-400 mb-2" />
              <p className="text-gray-700 italic text-sm sm:text-base">
                "{review.text}"
              </p>
              <div className="flex items-center mt-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="ml-2 text-gray-900 font-semibold text-sm sm:text-base">
                  {review.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Order Now */}
      <div className="bg-orange-500 text-white md:py-10 px-4 sm:px-6 text-center pb-16 py-5">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to Transform Your Garden?
        </h2>
        <p className="mt-2 text-lg">
          Get in touch with us today for a free consultation.
        </p>
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-full flex items-center justify-center mx-auto hover:bg-green-700 transition">
          Order Now <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ServicePage;
