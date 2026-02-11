import { OneTimePlan } from "./plans";

interface OneTimePlansProps {
  categoryName: string;
  hasCalculator: boolean;
  onCalculatorClick: () => void;
  onPlanSelect: (plan: OneTimePlan) => void;
}

const balconyPlans: OneTimePlan[] = [
  {
    id: "basic-balcony",
    name: "Basic Balcony Setup",
    description: "Perfect for small balconies (up to 50 sq ft)",
    startingPrice: 14999,
    features: [
      "10-15 potted plants",
      "Basic plant stands",
      "Soil and fertilizer",
      "Installation & setup",
      "decorative fencing",
      "1 month maintenance guide"
    ]
  },
  {
    id: "premium-balcony",
    name: "Premium Balcony Garden",
    description: "Ideal for medium balconies (50-100 sq ft)",
    startingPrice: 35999,
    features: [
      "22-25 premium plants",
      "Designer pots & stands",
      "Vertical garden setup",
      "Drip irrigation system",
      "Decorative lighting",
      "3 months free maintenance"
    ]
  },
  {
    id: "luxury-balcony",
    name: "Luxury Balcony Paradise",
    description: "Best for large balconies (100+ sq ft)",
    startingPrice: 69999,
    features: [
      "30+ exotic plants",
      "Premium designer pots",
      "Complete vertical garden",
      "Automated watering system",
      "Ambient lighting setup",
      "Decorative elements",
      "6 months free maintenance"
    ]
  }
];

const terraceGardenPlans: OneTimePlan[] = [
  {
    id: "basic-terrace",
    name: "Starter Terrace Garden",
    description: "For small terraces (up to 200 sq ft)",
    startingPrice: 27999,
    features: [
      "Waterproofing consultation",
      "25-30 plants mix",
      "Basic irrigation setup",
      "Raised planter beds",
      "Organic compost",
      "2 months maintenance"
    ]
  },
  {
    id: "premium-terrace",
    name: "Premium Terrace Garden",
    description: "For medium terraces (200-500 sq ft)",
    startingPrice: 93999,
    features: [
      "Complete waterproofing",
      "50+ plants variety",
      "Drip irrigation system",
      "Landscaping design",
      "Seating area setup",
      "Pathway installation",
      "6 months maintenance"
    ]
  },
  {
    id: "luxury-terrace",
    name: "Luxury Rooftop Retreat",
    description: "For large terraces (500+ sq ft)",
    startingPrice: 198999,
    features: [
      "Full terrace transformation",
      "100+ premium plants",
      "Automated irrigation",
      "Complete landscaping",
      "Gazebo/pergola setup",
      "Water feature installation",
      "Decorative lighting",
      "1 year free maintenance"
    ]
  }
];

const interiorPlantPlans: OneTimePlan[] = [
  {
    id: "basic-interior",
    name: "Office Greening",
    description: "Small office or home (5-10 plants)",
    startingPrice: 7999,
    features: [
      "5-10 air-purifying plants",
      "Decorative pots",
      "Placement consultation",
      "Care instructions",
      "Free replacement (30 days)"
    ]
  },
  {
    id: "premium-interior",
    name: "Home/Office Premium",
    description: "Medium space (10-20 plants)",
    startingPrice: 15999,
    features: [
      "10-20 premium plants",
      "Designer planters",
      "Professional arrangement",
      "Indoor garden setup",
      "3 months maintenance",
      "Plant health guarantee"
    ]
  },
  {
    id: "luxury-interior",
    name: "Corporate/Luxury Interior",
    description: "Large commercial space (20+ plants)",
    startingPrice: 42999,
    features: [
      "20+ exotic indoor plants",
      "Custom planters",
      "Green wall installation",
      "Tropical plant display",
      "Maintenance contract",
      "6 months care service"
    ]
  }
];

export default function OneTimePlans({
  categoryName,
  hasCalculator,
  onCalculatorClick,
  onPlanSelect
}: OneTimePlansProps) {
  const getPlans = () => {
    if (categoryName.toLowerCase().includes("balcony"))
      return balconyPlans;
    if (categoryName.toLowerCase().includes("terrace"))
      return terraceGardenPlans;
    return interiorPlantPlans;
  };

  const plans = getPlans();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {categoryName} Packages
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            One-time installation with professional setup. Choose a
            package or get a custom quote.
          </p>

          {hasCalculator && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onCalculatorClick}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Get Custom Quote with Calculator
              </button>
              <span className="text-gray-500">
                or choose a package below
              </span>
            </div>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-green-50 hover:border-green-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${
                  index * 0.15
                }s both`
              }}
            >
              {/* Plan header */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
                <h3 className="text-xl font-bold mb-1">
                  {plan.name}
                </h3>
                <p className="text-green-50 text-sm mb-3">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium">
                    Starting at
                  </span>
                  <span className="text-3xl font-bold">
                    ₹
                    {plan.startingPrice.toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>
              </div>

              {/* Plan body */}
              <div className="p-4">
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <svg
                          className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onPlanSelect(plan)}
                  className="w-full py-3 px-5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Select This Package
                </button>

                <p className="text-center text-xs text-gray-500 mt-3">
                  Free consultation • Flexible scheduling
                </p>
              </div>

              <div className="h-2 bg-gradient-to-r from-green-600 to-green-400" />
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-50">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Quality Guarantee
            </h3>
            <p className="text-sm text-gray-600">
              All plants come with a 30-day health guarantee. Free
              replacement if needed.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-50">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Expert Installation
            </h3>
            <p className="text-sm text-gray-600">
              Professional gardeners handle everything from setup to
              initial maintenance.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-green-50">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Ongoing Support
            </h3>
            <p className="text-sm text-gray-600">
              Get expert advice anytime. We're here to help your
              garden thrive.
            </p>
          </div>
        </div>

        {/* Custom quote CTA */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-4">
              Every space is unique. Let us create a personalized
              plan for you.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
