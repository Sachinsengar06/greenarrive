import React, { useState } from "react";
import StatsGrid from "../../common/StatGrid";
import PartnerFilter from "./PartnerFilter";
import PartnersGrid from "./PartnersGrid";
import { Partner } from "./types";

import IITK from "/partners/kanpurIitLogo.png"
import DukeIndia from "/partners/duke india.png"
import Psit from "/partners/psit.png"
import Wedson from "/partners/wedson.png"
import Tuhi from "/partners/tuhi.png"
import { useNavigate } from "react-router-dom";

const PartnersShowcase: React.FC = () => {
  const navigate = useNavigate()
  const [partners] = useState<Partner[]>([
    { id: "1", name: "IIT Kanpur", category: "institutional",logo:IITK },
    { id: "2", name: "Duke Auto India", category: "corporate", logo:DukeIndia },
    { id: "3", name: "PSIT Kanpur", category: "institutional",logo:Psit },
    { id: "4", name: "Tuhi Farms", category: "institutional",logo:Tuhi },
    { id: "5", name: "Wedson Resort", category: "hospitality",logo:Wedson },
    { id: "6", name: "IITK Villas", category: "residential" },
    { id: "7", name: "Ishaan Enclave", category: "residential" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPartners =
    selectedCategory === "all"
      ? partners
      : partners.filter((p) => p.category === selectedCategory);

  const categories = [
    { value: "all", label: "All Partners", icon: "🌿" },
    { value: "corporate", label: "Corporate", icon: "🏢" },
    { value: "residential", label: "Residential", icon: "🏘️" },
    { value: "institutional", label: "Institutional", icon: "🎓" },
    { value: "hospitality", label: "Hospitality", icon: "🏨" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f7fa 0%, #e8f5e9 100%)",
        padding:
          "clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)",
        fontFamily:
          '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700;900&display=swap');

        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .partner-card {
          animation: scaleIn 0.5s ease-out;
          animation-fill-mode: both;
        }

        .partner-card:nth-child(1) { animation-delay: 0.05s; }
        .partner-card:nth-child(2) { animation-delay: 0.1s; }
        .partner-card:nth-child(3) { animation-delay: 0.15s; }
        .partner-card:nth-child(4) { animation-delay: 0.2s; }
        .partner-card:nth-child(5) { animation-delay: 0.25s; }
        .partner-card:nth-child(6) { animation-delay: 0.3s; }
        .partner-card:nth-child(7) { animation-delay: 0.35s; }
        .partner-card:nth-child(8) { animation-delay: 0.4s; }

        @media (max-width: 768px) {
          .partner-card { animation-delay: 0s !important; }
        }

        .filter-btn {
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            position: "relative"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              opacity: 0.2
            }}
          >
            🌿
          </div>

          <div
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, #2e7d32, #66bb6a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              marginBottom: "1rem"
            }}
          >
            Our Trusted Partners
          </div>

          <p
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "#558b2f",
              fontWeight: 300,
              maxWidth: "800px",
              margin: "0 auto 1rem",
              lineHeight: 1.6
            }}
          >
            Proud to collaborate with leading organizations across India
          </p>

          <div
            style={{
              width: "80px",
              height: "4px",
              background:
                "linear-gradient(90deg, #2e7d32, #66bb6a)",
              margin: "2rem auto",
              borderRadius: "2px"
            }}
          />

          <StatsGrid
            items={[
              {
                value: "150+",
                label: "Projects Completed",
                icon: "✅"
              },
              {
                value: "50+",
                label: "Happy Clients",
                icon: "😊"
              },
              {
                value: "10+",
                label: "Years Experience",
                icon: "🏆"
              },
              {
                value: "100%",
                label: "Satisfaction Rate",
                icon: "⭐"
              }
            ]}
          />
        </div>

        <PartnerFilter
          categories={categories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <PartnersGrid partners={filteredPartners} />

        {/* CTA */}
        <div
          style={{
            marginTop: "clamp(3rem, 6vw, 5rem)",
            padding:
              "clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 3rem)",
            background:
              "linear-gradient(135deg, #2e7d32, #66bb6a)",
            borderRadius: "24px",
            textAlign: "center",
            boxShadow: "0 20px 60px rgba(46, 125, 50, 0.2)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "white",
              marginBottom: "1rem",
              fontFamily: '"Playfair Display", serif'
            }}
          >
            Want to Join Our Growing Family?
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "rgba(255,255,255,0.95)",
              maxWidth: "700px",
              margin: "0 auto 2rem"
            }}
          >
            Let's create beautiful green spaces together. Partner with
            GreenArrive for exceptional garden services.
          </p>

          <button
          onClick={()=>navigate("/contact")}
            style={{
              padding: "1rem 2.5rem",
              fontSize: "1rem",
              fontWeight: 600,
              background: "white",
              color: "#2e7d32",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-4px) scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0) scale(1)";
            }}
          >
            Get In Touch 🌱
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersShowcase;
