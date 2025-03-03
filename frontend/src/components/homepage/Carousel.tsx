import { useEffect, useState } from "react";

// Dummy Carousel Images
import img1 from "../../assets/images/systemCarouselImg/img1.png";
import img2 from "../../assets/images/systemCarouselImg/img2.jpg";
import img3 from "../../assets/images/systemCarouselImg/img3.jpg";
import img4 from "../../assets/images/systemCarouselImg/img4.jpeg";
import img5 from "../../assets/images/systemCarouselImg/img5.webp";
import img6 from "../../assets/images/systemCarouselImg/img6.jpg";
import img7 from "../../assets/images/systemCarouselImg/img7.webp";

const carouselImages = [img1, img2, img3, img4, img5, img6, img7];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-center py-4">
      {/* Left Button */}
      <button
        onClick={() =>
          setCurrentIndex(
            (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
          )
        }
        className="absolute left-5 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
      >
        ◀
      </button>

      {/* Image Carousel */}
      <div className="relative w-64 h-64 md:w-[80%] md:h-[80%] lg:w-[75%] lg:h-[80%] overflow-hidden rounded-lg shadow-lg flex justify-center items-center">
        <img
          src={carouselImages[currentIndex]}
          alt="Carousel"
          className="w-full h-full object-cover aspect-video transition-all duration-500"
        />
      </div>

      {/* Right Button */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % carouselImages.length)}
        className="absolute right-5 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
