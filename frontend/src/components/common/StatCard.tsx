type StatCardProps = {
  value?: string;
  label: string;
  icon?: string;
  imageSrc?: string;

  onClick?: () => void;
  ctaText?: string;
};

export default function StatCard({
  value,
  label,
  icon,
  imageSrc,
  onClick,
  ctaText = "Book now"
}: StatCardProps) {
  const clickable = Boolean(onClick);

  const [title, subtitle] = label.split("\n");

  return (
    <div
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (!clickable) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={`
        bg-white
        rounded-2xl
        border border-green-100
        shadow-sm
        transition-all duration-200
        flex flex-col items-center text-center
        px-4 py-5
        ${clickable ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:border-green-300" : ""}
      `}
    >
      {/* Icon container (important for visual attraction) */}
      {(imageSrc || icon) && (
        <div
          className="
            mb-3
            w-16 h-16
            rounded-full
            bg-green-50
            flex items-center justify-center
          "
        >
          {imageSrc && (
            <img
              src={imageSrc}
              alt={label}
              className="h-8 w-8 md:h-9 md:w-9"
              loading="lazy"
            />
          )}

          {!imageSrc && icon && (
            <span className="text-2xl">{icon}</span>
          )}
        </div>
      )}

      {/* For stats usage */}
      {value && (
        <div className="text-2xl font-bold text-green-700 mb-1">
          {value}
        </div>
      )}

      {/* Service title (strong visual hierarchy) */}
      <div className="text-sm md:text-base font-semibold text-gray-900 leading-tight">
        {title}
      </div>

      {/* Subtitle (lighter, optional) */}
      {subtitle && (
        <div className="text-xs text-gray-500 mt-1">
          {subtitle}
        </div>
      )}

      {/* CTA – always visible (this drives clicks) */}
      {clickable && (
        <div className="mt-3 flex items-center gap-1 text-green-700 text-sm font-semibold">
          {ctaText}
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      )}
    </div>
  );
}
