import frameImg from "../../assets/images/border.png";
import overlayImg from "../../assets/images/background.png";
import flower from "../../assets/images/flower.png";
import tree from "../../assets/images/tree.png";
import lawnMower from "../../assets/images/lawn-mower.png";
import vegetable from "../../assets/images/vegetable.png";
import plant from "../../assets/images/plant.png";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Section */}
      <div className="relative w-full min-h-[60vh] flex flex-col items-center text-center px-6 lg:px-10 pb-10">
        {/* Background Image */}
        <img
          src={overlayImg}
          alt="Service Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        {/* Service Title */}
        <div className="relative z-10 space-y-4 mt-10">
          <h5 className="text-2xl text-green-700">Our Services</h5>
          <h2 className="text-4xl font-bold text-white">What We Offer</h2>
          <p className="text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ab
            consequuntur sapiente enim iusto id commodi tenetur maiores.
          </p>
        </div>

        {/* Service Cards */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {[
            { img: lawnMower, text: "Lawn Mowing\n& Edging" },
            { img: tree, text: "Tree & Shrub\nTrimming" },
            { img: flower, text: "Flower Gardens\n& Maintenance" },
            { img: vegetable, text: "Vegetable / Herb\nGardens & Design" },
            { img: plant, text: "Landscaping" }
          ].map((service, index) => (
            <div key={index} className="bg-white px-1 pt-5 rounded-lg shadow-md flex flex-col items-center w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 aspect-square">
              <img src={service.img} alt={service.text} className="h-10 w-10 md:h-14 md:w-14 lg:h-16 lg:w-16" />
              <p className="mt-2 text-xs md:text-base font-semibold text-center whitespace-pre-line">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frame Image (positioned after overlayImg ends) */}
      <div className="relative w-full">
        <img
          src={frameImg}
          alt="Frame Border"
          className="w-full object-cover"
        />
        <Carousel/>
      </div>
    </div>
  );
};

export default Services;
