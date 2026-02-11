import StatCard from "./StatCard";

type StatItem = {
  value: string;
  label: string;
  icon?: string;
};

type StatsGridProps = {
  items: StatItem[];
  className?: string;
};

export default function StatsGrid({ items, className = "" }: StatsGridProps) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[900px] mx-auto px-4 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            animation: "fadeInUp 0.8s ease-out",
            animationDelay: `${0.3 + index * 0.1}s`,
            animationFillMode: "both",
          }}
        >
          <StatCard value={item.value} label={item.label} icon={item.icon} />
        </div>
      ))}
    </div>
  );
}
