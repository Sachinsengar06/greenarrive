import frameImg from "/homepage/border.png";
import flower from "/homepage/flower.png";
import tree from "/homepage/tree.png";
import lawnMower from "/homepage/lawn-mower.png";
import vegetable from "/homepage/vegetable.png";
import plant from "/homepage/plant.png";
import StatCard from "../common/StatCard";

const Services = () => {
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
    via-[ #2e7d32]
    to-[#618f2c]
  "
>
        {/* Service Title */}
        <div className="relative z-10 space-y-4 mt-10">
          <h5 className="text-2xl text-green-700">Our Services</h5>
          <h2 className="text-4xl font-bold text-white">What We Offer</h2>
          <p className="lg:text-lg text-xs text-white">
            we offers customized, eco-friendly landscaping solutions for
            schools, corporates, and urban spaces. From vibrant garden designs
            to cost-effective greenery setups, we bring nature closer to you!
          </p>
        </div>

        {/* Service Cards */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {[
            { img: lawnMower, text: "Lawn Mowing\n& Edging" },
            { img: tree, text: "Tree & Shrub\nTrimming" },
            { img: flower, text: "Flower Gardens\n& Maintenance" },
            { img: vegetable, text: "Vegetable / Herb\nGardens & Design" },
            { img: plant, text: "Landscaping" },
          ].map((service, index) => (
            <StatCard key={index} imageSrc={service.img} label={service.text} />
          ))}
        </div>
      </div>

      {/* Frame Image (positioned after overlayImg ends) */}
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
