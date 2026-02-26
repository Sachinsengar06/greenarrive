import frameImg from '/homepage/2147844319.webp';
import { LuShoppingCart } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
const navigate = useNavigate();
 

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 lg:px-10 pt-12">
      {/* Background Image */}
      <img
        src={frameImg}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full bg-amber-100 h-full object-cover -z-10"
        loading="lazy"
      />

      {/* Overlay Content */}
      <div className="max-w-2xl text-white space-y-6">
        <h1
          className="text-white mb-5 animate-fade-in-up anim-delay-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          Professional Gardening{" "}
          <span className="text-green-400">for Schools</span>,
          Colleges &amp; Corporates
        </h1>

        <p className="text-xs md:text-xl lg:text-lg drop-shadow-md">
          We craft vibrant, sustainable landscapes that breathe life into every
          space. Join us in creating a greener, fresher, and more inspiring
          world!
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button
           onClick={() => navigate('/services')}
            className="
              group relative
              bg-gradient-to-r from-green-600 to-green-500
              text-white font-semibold text-lg
              px-10 py-5
              rounded-full
              shadow-lg hover:shadow-green-500/30
              transition-all duration-300
              hover:scale-[1.03] active:scale-[0.98]
              border border-white/20
              overflow-hidden
            "
          >
            {/* full-width shimmer beam */}
            <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <span className="beam animate-shimmer" />
            </span>

            {/* content */}
            <span className="relative z-10 flex items-center gap-3">
              <LuShoppingCart className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
              <span className="tracking-wide">Buy Plan Now</span>
              <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .beam {
          position: absolute;
          top: 0;
          left: -150%;
          width: 300%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 35%,
            rgba(255,255,255,0.25) 45%,
            rgba(255,255,255,0.45) 50%,
            rgba(255,255,255,0.25) 55%,
            transparent 65%
          );
        }

        @keyframes shimmer {
          0% {
            transform: translateX(0) skewX(-15deg);
          }
          25% {
            transform: translateX(50%) skewX(-15deg);
          }
          100% {
            transform: translateX(50%) skewX(-15deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 3.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
