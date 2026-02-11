import { SubscriptionPlan } from "./plans";

interface SubscriptionPlansProps {
  categoryName: string;
  onCalculatorClick: () => void;
  onPlanSelect: (plan: SubscriptionPlan) => void;
}

const parkPlans: SubscriptionPlan[] = [
  {
    id: "monthly",
    name: "Basic Plan",
    duration: "monthly",
    price: 11999,
    features: [
      "Weekly garden maintenance",
      "one Gardener allocation",
      "Lawn mowing & trimming",
      "Weed removal",
      "Basic pest control",
      "Monthly health checkup",
      "Watering management"
    ]
  },
  {
    id: "6-months",
    name: "Premium Plan",
    duration: "monthly",
    price: 18999,
    originalPrice: 24994,
    savings: "Save ₹5,995",
    popular: true,
    features: [
      "All Basic Plan features",
      "one extra gardener",
      "Fertilizer application (2x)",
      "Comprehensive pest control",
      "Soil testing & treatment",
      "Priority support",
      "10% discount on extra services"
    ]
  },
  {
    id: "yearly",
    name: "Luxury Plan",
    duration: "monthly",
    price: 25999,
    originalPrice: 38988,
    savings: "Save ₹12,989",
    features: [
      "All Premium Plan features",
      "Quarterly landscaping updates",
      "Advanced irrigation system check",
      "Tree pruning & shaping (4x)",
      "Seasonal flower plantation",
      "Dedicated account manager",
      "15% discount on extra services",
      "Total 3 gardeners allocation"
    ]
  }
];

const maintenancePlans: SubscriptionPlan[] = [
  {
    id: "monthly",
    name: "Basic Monthly",
    duration: "monthly",
    price: 8999,
    features: [
      "Bi-weekly garden visit",
      "Lawn mowing",
      "Weed removal",
      "Plant watering guidance",
      "Basic maintenance",
      "Hedge pruning"
    ]
  },
  {
    id: "6-months",
    name: "Premium 6 Months",
    duration: "6-months",
    price: 15999,
    originalPrice: 17994,
    savings: "Save ₹1,995",
    popular: true,
    features: [
      "All Basic features",
      "Weekly garden visits",
      "Seasonal pruning",
      "Pest control (monthly)",
      "Fertilizer application",
      "Priority scheduling",
      "2 gardeners allocation"
    ]
  },
  {
    id: "yearly",
    name: "Premium Annual",
    duration: "yearly",
    price: 29999,
    originalPrice: 35988,
    savings: "Save ₹5,989",
    features: [
      "All Premium features",
      "Twice-weekly visits",
      "Comprehensive care",
      "Plant replacement (up to 5)",
      "Quarterly soil testing",
      "Free consultation calls",
      "Three gardeners allocation"
    ]
  }
];

export default function SubscriptionPlans({
  categoryName,
  onCalculatorClick,
  onPlanSelect
}: SubscriptionPlansProps) {
  const plans = categoryName
    .toLowerCase()
    .includes("park")
    ? parkPlans
    : maintenancePlans;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {categoryName} Plans
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            Choose a plan that fits your needs. All plans include
            professional service and quality guarantee.
          </p>

          <button
            onClick={onCalculatorClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
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
            Calculate Custom Price
          </button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`
                relative overflow-hidden rounded-2xl
                ${
                  plan.popular
                    ? "bg-gradient-to-br from-green-600 to-green-500 text-white shadow-2xl scale-105 md:scale-110"
                    : "bg-white text-gray-900 shadow-lg"
                }
                transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{
                animation: `fadeInUp 0.6s ease-out ${
                  index * 0.15
                }s both`
              }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1.5 rounded-bl-2xl font-bold text-xs uppercase tracking-wide shadow-lg">
                  ⭐ Most Popular
                </div>
              )}

              <div className="p-4 sm:p-5">
                {/* Header */}
                <div className="mb-4">
                  <h3
                    className={`text-xl sm:text-2xl font-bold mb-1 ${
                      plan.popular
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl sm:text-4xl font-bold">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      /{plan.duration}
                    </span>
                  </div>

                  {plan.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs line-through ${
                          plan.popular
                            ? "text-white/60"
                            : "text-gray-400"
                        }`}
                      >
                        ₹
                        {plan.originalPrice.toLocaleString(
                          "en-IN"
                        )}
                      </span>
                      <span
                        className={`text-xs font-semibold ${
                          plan.popular
                            ? "text-yellow-300"
                            : "text-green-600"
                        }`}
                      >
                        {plan.savings}
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2"
                    >
                      <svg
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.popular
                            ? "text-yellow-300"
                            : "text-green-600"
                        }`}
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

                      <span
                        className={`text-sm ${
                          plan.popular
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => onPlanSelect(plan)}
                  className={`
                    w-full py-3 px-4 rounded-xl font-semibold text-sm sm:text-base
                    transition-all duration-300 transform hover:scale-105
                    ${
                      plan.popular
                        ? "bg-white text-green-600 hover:bg-gray-50 shadow-lg"
                        : "bg-gradient-to-r from-green-600 to-green-500 text-white hover:shadow-xl"
                    }
                  `}
                >
                  Choose {plan.name}
                </button>
              </div>

              {!plan.popular && (
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-full blur-2xl" />
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 sm:p-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-900">
                All Plans Include
              </h3>
            </div>

            <p className="text-gray-600">
              Professional gardeners • Quality tools &
              equipment • Eco-friendly products • Service
              guarantee • Flexible rescheduling
            </p>
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
