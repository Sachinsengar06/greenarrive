type Category = {
  value: string;
  label: string;
  icon: string;
};

type PartnerFilterProps = {
  categories: Category[];
  selected: string;
  onChange: (value: string) => void;
};

export default function PartnerFilter({
  categories,
  selected,
  onChange
}: PartnerFilterProps) {
  return (
    <div
      className="
        flex md:flex-wrap flex-nowrap
        justify-start md:justify-center
        gap-4
        overflow-x-auto md:overflow-visible
        px-4
        no-scrollbar
      "
      style={{ marginBottom: "3rem" }}
    >
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className="filter-btn flex-shrink-0"
          style={{
            padding: "0.75rem 1.75rem",
            fontSize: "1rem",
            fontWeight: 600,
            border:
              selected === category.value
                ? "2px solid #2e7d32"
                : "2px solid #e8f5e9",
            background:
              selected === category.value
                ? "linear-gradient(135deg, #2e7d32, #66bb6a)"
                : "white",
            color: selected === category.value ? "white" : "#2e7d32",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow:
              selected === category.value
                ? "0 8px 25px rgba(46, 125, 50, 0.3)"
                : "0 4px 15px rgba(0, 0, 0, 0.05)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "inherit"
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>{category.icon}</span>
          {category.label}
        </button>
      ))}
    </div>
  );
}
