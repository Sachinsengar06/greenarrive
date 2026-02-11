import TopBanner from "../../common/TopBanner";
import { works } from "../../../utils/Gallery";
import ImageCard from "../../common/ImageCard";

export default function WorkGallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-green-50/30">
      {/*---------------------------TOP BANNER----------------------------*/}

      <TopBanner
        title="Our Work Gallery"
        description="Explore our beautiful garden transformations and landscaping projects"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-14 sm:py-16 lg:py-10">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From lush balcony gardens to expansive landscapes, see how we bring
            green dreams to life
          </p>
        </div> */}

        {/* 
          Responsive Grid with different aspect ratios:
          Mobile: 4:3
          Tablet: 3:4
          Desktop: 1:1
        */}

        {/* -------------------------------------------Images-------------------------------------------- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {works.map((item) => (
            <ImageCard
              key={item.id}
              publicId={item.publicId}
              title={item.title}
              featured
              tags={item.tags}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:from-green-700 hover:to-green-600 text-sm sm:text-base">
            <span>Load More Projects</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </section>

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
