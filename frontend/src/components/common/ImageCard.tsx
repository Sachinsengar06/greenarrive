import { useState } from "react";
import { cloudinaryUrl } from "../../utils/Gallery/cloudinary";

type ImageCardProps = {
  publicId: string;
  title: string;
  location?: string;
  tags?: string[];
  featured?: boolean;
  className?: string;
};

export default function ImageCard({
  publicId,
  title,
  location = "Kanpur, India",
  tags = [],
  featured = false,
  className = ""
}: ImageCardProps) {

  const [loaded, setLoaded] = useState(false);

  // tiny blurred placeholder
  const blurUrl = cloudinaryUrl(publicId, 40)
    .replace("/upload/", "/upload/e_blur:300,q_10/");

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl
      transition-all duration-500 ease-out hover:-translate-y-2 ${className}`}
    >
      <div className="relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-square overflow-hidden">

        {/* Blurred placeholder */}
        <img
          src={blurUrl}
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-sm"
        />

        {/* Real image */}
        <img
          src={cloudinaryUrl(publicId, 600)}
          srcSet={`
            ${cloudinaryUrl(publicId, 400)} 400w,
            ${cloudinaryUrl(publicId, 600)} 600w,
            ${cloudinaryUrl(publicId, 800)} 800w,
            ${cloudinaryUrl(publicId, 1200)} 1200w
          `}
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700 ease-out
            ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
            group-hover:scale-110
          `}
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {featured && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="inline-flex items-center gap-1 bg-green-600 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide shadow-lg">
              Featured
            </span>
          </div>
        )}
      </div>

      <figcaption className="p-4 sm:p-5 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {location && (
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{location}</span>
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </figcaption>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </figure>
  );
}
