import { useNavigate } from "react-router-dom";

import frameImg from "/homepage/border.png";
import flower from "/homepage/flower.png";
import tree from "/homepage/tree.png";
import lawnMower from "/homepage/lawn-mower.png";
import vegetable from "/homepage/vegetable.png";
import plant from "/homepage/plant.png";
import StatCard from "../common/StatCard";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      img: lawnMower,
      text: "Lawn Mowing\n& Edging",
      slug: "lawn-mowing"
    },
    {
      img: tree,
      text: "Tree & Shrub\nTrimming",
      slug: "tree-trimming"
    },
    {
      img: flower,
      text: "Flower Gardens\n& Maintenance",
      slug: "flower-garden"
    },
    {
      img: vegetable,
      text: "Vegetable / Herb\nGardens & Design",
      slug: "vegetable-garden"
    },
    {
      img: plant,
      text: "Landscaping",
      slug: "landscaping"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Section */}
      <div
        className="
          relative
          w-full
          min-h-[60vh]
          flex flex-col
          items-center
          text-center
          px-6 lg:px-10
          pb-10
          bg-gradient-to-b
          from-[#618f2c]
          via-[#2e7d32]
          to-[#618f2c]
        "
      >
        {/* Service Title */}
        <div className="relative z-10 space-y-4 mt-10">
          <h2 className="text-4xl font-bold text-white">What We Offer</h2>
          <p className="lg:text-lg text-xs text-white">
            We offer fast, affordable and eco-friendly services that can be
            booked instantly.
          </p>
        </div>

        {/* Service Cards */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {services.map((service) => (
            <StatCard
              key={service.slug}
              imageSrc={service.img}
              label={service.text}
              onClick={() => navigate(`/book/${service.slug}`)}
              ctaText="Book now"
            />
          ))}
        </div>
      </div>

      {/* Frame Image */}
      <div className="relative w-full">
        <img
          src={frameImg}
          alt="Frame Border"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Services;
