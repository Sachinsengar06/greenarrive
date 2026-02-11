import { Partner } from "./types";

type PartnersGridProps = {
  partners: Partner[];
};

export default function PartnersGrid({ partners }: PartnersGridProps) {
  return (
    <div
      className="
        flex gap-3 sm:gap-4 lg:gap-6 px-4
        overflow-x-auto
        snap-x snap-mandatory
       no-scrollbar
        pb-4
      "
      style={{
        WebkitOverflowScrolling: "touch"
      }}
    >
      {partners.map((partner) => (
        <div
          key={partner.id}
          className="partner-card snap-start flex-shrink-0"
          style={{
            background: "white",
            borderRadius: "clamp(12px, 3vw, 20px)",
            padding: "clamp(1rem, 3vw, 1.6rem)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
            border: "2px solid #f1f8e9",
            transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
            
            // Responsive width: smaller on mobile, larger on desktop
            width: "clamp(200px, 45vw, 260px)",
            maxWidth: "260px"
          }}
        >
          {/* Background decoration - smaller on mobile */}
          <div
            style={{
              position: "absolute",
              top: "-15px",
              right: "-15px",
              width: "clamp(60px, 15vw, 100px)",
              height: "clamp(60px, 15vw, 100px)",
              background: "linear-gradient(135deg, #81c784, #66bb6a)",
              borderRadius: "50%",
              opacity: 0.1,
              zIndex: 0
            }}
          />

          {/* Category badge - more compact */}
          {partner.category && (
            <div
              style={{
                position: "absolute",
                top: "0.75rem",
                right: "0.75rem",
                padding: "0.3rem 0.6rem",
                background: "linear-gradient(135deg, #e8f5e9, #c5e1a5)",
                borderRadius: "15px",
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "#2e7d32",
                textTransform: "capitalize",
                zIndex: 10
              }}
            >
              {partner.category}
            </div>
          )}

          {/* Logo container - more compact on mobile */}
          <div
            style={{
              width: "100%",
              height: "clamp(80px, 20vw, 120px)",
              background: "linear-gradient(135deg, #f1f8e9, #e8f5e9)",
              borderRadius: "clamp(12px, 2vw, 16px)",
              marginBottom: "clamp(0.75rem, 2vw, 1.25rem)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #e8f5e9",
              position: "relative",
              zIndex: 1
            }}
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  maxWidth: "75%",
                  maxHeight: "75%",
                  objectFit: "contain"
                }}
              />
            ) : (
              <div
                style={{
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                {partner.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </div>
            )}
          </div>

          {/* Partner name - responsive sizing */}
          <h3
            style={{
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              fontWeight: 700,
              color: "#1b5e20",
              marginBottom: "0.4rem",
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              lineHeight: 1.3
            }}
          >
            {partner.name}
          </h3>

          {/* Description - hide on very small screens to save space */}
          {partner.description && (
            <p
              style={{
                fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                color: "#558b2f",
                textAlign: "center",
                lineHeight: 1.4,
                position: "relative",
                zIndex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}
            >
              {partner.description}
            </p>
          )}

          {/* Rating - more compact */}
          <div
            style={{
              marginTop: "clamp(0.6rem, 2vw, 1rem)",
              paddingTop: "clamp(0.6rem, 2vw, 1rem)",
              borderTop: "1px solid #e8f5e9",
              display: "flex",
              justifyContent: "center",
              position: "relative",
              zIndex: 1
            }}
          >
            <span style={{ 
              fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
              color: "#ffd700",
              letterSpacing: "0.5px"
            }}>
              ⭐⭐⭐⭐⭐
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}