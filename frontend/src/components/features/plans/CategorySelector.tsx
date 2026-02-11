// components/Plans/CategorySelector.tsx
import { ServiceCategory } from '../../../utils/types';
import { ServiceCategoryData } from './plans';

interface CategorySelectorProps {
  onSelect: (category: ServiceCategory) => void;
}

const categories: ServiceCategoryData[] = [
  {
    id: 'balcony-decoration',
    name: 'Balcony Decoration',
    icon: '🌿',
    description: 'Transform your balcony into a green paradise',
    planType: 'one-time',
    hasCalculator: true,
    popularTag: true,
  },
  {
    id: 'terrace-garden',
    name: 'Terrace Garden',
    icon: '🏡',
    description: 'Create a beautiful rooftop garden retreat',
    planType: 'one-time',
    hasCalculator: true,
  },
  {
    id: 'park',
    name: 'Park & Large Gardens',
    icon: '🌳',
    description: 'Comprehensive park and garden maintenance',
    planType: 'subscription',
    hasCalculator: true,
    popularTag: true,
  },
  {
    id: 'interior-plants',
    name: 'Interior Plant Decoration',
    icon: '🪴',
    description: 'Indoor plants for homes and offices',
    planType: 'one-time',
    hasCalculator: false,
  },
  {
    id: 'garden-maintenance',
    name: 'Garden Maintenance',
    icon: '✂️',
    description: 'Regular upkeep for your existing garden',
    planType: 'subscription',
    hasCalculator: true,
  },
];

export default function CategorySelector({ onSelect }: CategorySelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Choose Your Service
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Select the type of service you need and we'll show you the best plans
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => onSelect(category.id)}
              className="
                group relative overflow-hidden
                bg-white rounded-2xl
                p-6 sm:p-8
                shadow-lg hover:shadow-2xl
                border-2 border-green-50 hover:border-green-400
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-1.5
              "
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Popular tag */}
              {category.popularTag && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="relative text-6xl sm:text-7xl mb-4 group-hover:scale-105 transition-transform duration-500">
                {category.icon}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Service type badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`
                    inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold
                    ${category.planType === 'one-time' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-purple-100 text-purple-700'
                    }
                  `}>
                    {category.planType === 'one-time' ? '⚡' : '🔄'}
                    {category.planType === 'one-time' ? 'One-Time Service' : 'Subscription Plans'}
                  </span>
                </div>

                {/* Calculator badge */}
                {category.hasCalculator && (
                  <div className="inline-flex items-center gap-1.5 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-full font-medium">
                    🧮 Price Calculator Available
                  </div>
                )}

                {/* Arrow indicator */}
                <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                  <span>View Plans</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl" />
            </div>
          ))}
        </div>

        {/* Help section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 sm:p-8">
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Need help choosing?</span> Our experts are here to guide you.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
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