type TopBannerProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function TopBanner({
  title,
  description,
  className = ""
}: TopBannerProps) {
  return (
    <div
      className={`w-full py-16 px-4 sm:px-6 lg:py-20 text-center
      bg-gradient-to-br from-green-600 via-green-500 to-green-400
      text-white relative overflow-hidden ${className}`}
    >
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="text-lg sm:text-xl lg:text-2xl text-white/95 max-w-2xl mx-auto font-light">
            {description}
          </p>
        )}

        <div className="mt-6 w-20 h-1 bg-white/80 mx-auto rounded-full" />
      </div>
    </div>
  );
}
