import { FaArrowRight } from "react-icons/fa";

type ServiceCardProps = {
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
};

export default function ServiceCard({
  title,
  description,
  onClick,
  className = "",
}: ServiceCardProps) {
  const clickable = Boolean(onClick);

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
        group
        relative
        bg-white p-6 shadow-lg rounded-lg
        border-l-4 border-green-500
        transition
        ${clickable ? "cursor-pointer select-none" : ""}
        ${clickable ? "hover:-translate-y-1 hover:shadow-xl" : ""}
        ${
          clickable
            ? "focus:outline-none focus:ring-2 focus:ring-green-400"
            : ""
        }
        ${className}
      `}
    >
      {/* content */}
      <div className="text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-green-700">
          {title}
        </h2>

        {description && (
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            {description}
          </p>
        )}
      </div>

      {/* right arrow (only if clickable) */}
      {clickable && (
        <span
          className="
      absolute right-4 top-1/2 -translate-y-1/2
      text-green-600
      transition-transform duration-200
      group-hover:translate-x-1
    "
          aria-hidden="true"
        >
          <FaArrowRight className="w-5 h-5" />
        </span>
      )}
    </div>
  );
}
