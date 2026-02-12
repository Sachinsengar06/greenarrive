import { FaArrowLeft } from "react-icons/fa";

type BackButtonProps = {
  label?: string;
  onClick: () => void;
  className?: string;
};

export default function BackButton({
  label = "Back",
  onClick,
  className = ""
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        absolute
        /* Position */
        top-13 left-4 
        sm:top-18 sm:left-4
        z-20
        px-2 py-1        /* Mobile padding */
        sm:px-4 sm:py-2    /* Desktop padding */
        
        text-sm            /* Mobile font size */
        sm:text-base       /* Desktop font size */
        
        /* Layout & Style */
        inline-flex items-center gap-1.5 sm:gap-2
        bg-white
        border-2 border-green-600
        text-green-700
        rounded-full
        font-semibold
        shadow-sm hover:shadow-md
        hover:bg-green-50
        transition-all
        active:scale-95    /* Visual feedback for mobile tap */
        ${className}
      `}
    >
      <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
      {label}
    </button>
  );
}