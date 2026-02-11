type StatCardProps = {
  value?: string;          
  label: string;
  icon?: string;           
  imageSrc?: string; 
};

export default function StatCard({
  value,
  label,
  icon,
  imageSrc
}: StatCardProps) {
  return (
    <div
      style={{
        background: "white",
        padding: "1rem",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(46, 125, 50, 0.08)",
        border: "2px solid #e8f5e9",

        height: "100%",
        minHeight: "120px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Image (for services) */}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={label}
          className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16 mb-2"
          loading="lazy"
        />
      )}

      {/* Emoji icon (for stats) */}
      {!imageSrc && icon && (
        <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
          {icon}
        </div>
      )}

      {/* Number (for stats) */}
      {value && (
        <div
          style={{
            fontSize: "clamp(1.6rem,4vw,2.2rem)",
            fontWeight: 700,
            color: "#2e7d32",
            marginBottom: "0.25rem"
          }}
        >
          {value}
        </div>
      )}

      {/* Label / text */}
      <div
        style={{
          fontSize: "clamp(0.75rem,2vw,0.95rem)",
          color: "#558b2f",
          fontWeight: 600,
          lineHeight: 1.3,
          whiteSpace: "pre-line",
          minHeight: "2.6em"
        }}
      >
        {label}
      </div>
    </div>
  );
}
