
import frameImg from "/homepage/Rectangle 5.png";
import overlayImg from "/homepage/Rectangle 4.webp";
const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-evenly items-center px-6 py-2 lg:px-10 min-h-screen">
          {/* Left Section: Text and Buttons */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 lg:pt-20 pt-5">
            <p className="text-4xl md:text-5xl text-green-900 font-bold">
              A Beautiful <br /> Adventure Awaits
            </p>
            <p className="text-gray-700 max-w-md mx-auto lg:mx-0 lg:text-lg text-xs">
              We craft vibrant, sustainable landscapes that breathe life into every space. Join us in creating a greener, fresher, and more inspiring world!
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center lg:justify-start">
              <button className="bg-green-900 text-white px-8 py-3 rounded cursor-pointer border-2 border-green-900 h-12 flex items-center justify-center">
                Buy Plan
              </button>
              <button className="border-2 border-green-900 text-green-900 px-8 py-3 rounded cursor-pointer h-12 flex items-center justify-center">
                Learn More
              </button>
            </div>
          </div>
          {/* Right Section: Image */}
          <div className="w-full lg:w-2/5 flex justify-center pt-10 lg:pt-0">
            <div className="relative w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img src={frameImg} alt="Frame" className="w-full h-auto" />
              {/* Overlay Image Positioned on Top of Frame */}
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center overflow-hidden">
                <img src={overlayImg} loading="lazy" alt="Overlay" className="object-cover w-full h-full p-2" />
              </div>
            </div>
          </div>
        </div>
      );
}

export default HeroSection
