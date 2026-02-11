import { useState } from "react";
import CategorySelector from "./CategorySelector";
import SubscriptionPlans from "./SuscriptionPlans";
import OneTimePlans from "./OneTimePlans";
import GardenCalculator from "../calculator/GardenCalculator";
import { ServiceCategory } from "../../../utils/types";

type ViewState = "category" | "plans" | "calculator";

export default function PlanSelector() {
  const [currentView, setCurrentView] = useState<ViewState>("category");
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory | null>(null);

  const categoryData = {
    "balcony-decoration": {
      name: "Balcony Decoration",
      planType: "one-time" as const,
      hasCalculator: true,
    },
    "terrace-garden": {
      name: "Terrace Garden",
      planType: "one-time" as const,
      hasCalculator: false,
    },
    park: {
      name: "Park & Large Gardens",
      planType: "subscription" as const,
      hasCalculator: true,
    },
    "interior-plants": {
      name: "Interior Plant Decoration",
      planType: "one-time" as const,
      hasCalculator: false,
    },
    "garden-maintenance": {
      name: "Garden Maintenance",
      planType: "subscription" as const,
      hasCalculator: true,
    },
  };

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category);
    setCurrentView("plans");
  };

  const handleCalculatorClick = () => {
    setCurrentView("calculator");
  };

  const handleBackToCategories = () => {
    setCurrentView("category");
    setSelectedCategory(null);
  };

  const handleBackToPlans = () => {
    setCurrentView("plans");
  };

  const handlePlanSelect = (plan: any) => {
    console.log("Plan selected:", plan);
    // Handle plan selection - navigate to checkout, show contact form, etc.
    // You can implement this based on your needs
  };

  // Render different views
  if (currentView === "category") {
    return <CategorySelector onSelect={handleCategorySelect} />;
  }

  if (!selectedCategory) {
    return <CategorySelector onSelect={handleCategorySelect} />;
  }

  const category = categoryData[selectedCategory];

  if (currentView === "calculator") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30">
        {/* Back button */}
        <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30">
          {/* floating back button */}
          <button
            onClick={handleBackToPlans}
            className="
      fixed
      top-18 left-4
      z-5
      inline-flex items-center gap-2
      px-4 py-2
      bg-white border-2 border-green-600
      text-green-600 rounded-full
      hover:bg-green-50
      transition-all duration-300
      font-semibold
      shadow-lg
    "
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Plans
          </button>

          <GardenCalculator serviceType={selectedCategory} />
        </div>
      </div>
    );
  }

  // Plans view
  return (
    <div className="md:pt-2">
      {/* Back button */}
      <div className="bg-gradient-to-b from-gray-50 to-green-50/30 pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={handleBackToCategories}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-all duration-300 font-semibold"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Categories
          </button>
        </div>
      </div>

      {/* Show appropriate plan type */}
      {category.planType === "subscription" ? (
        <SubscriptionPlans
          categoryName={category.name}
          onCalculatorClick={handleCalculatorClick}
          onPlanSelect={handlePlanSelect}
        />
      ) : (
        <OneTimePlans
          categoryName={category.name}
          hasCalculator={category.hasCalculator}
          onCalculatorClick={handleCalculatorClick}
          onPlanSelect={handlePlanSelect}
        />
      )}
    </div>
  );
}
