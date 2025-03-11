import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaGlobe, FaHandsHelping, FaEye, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col items-center text-gray-800 mt-8 ">
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-green-700">About Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Bringing nature closer to you with sustainable and innovative green solutions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <feature.icon className="text-green-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-green-700 text-white text-center py-12 px-6 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Join Us in Creating a Greener Future</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto lg:mb-0 mb-4">
          Whether it's transforming urban spaces or bringing greenery to corporate environments,
          GreenArrive is committed to making every space greener and more sustainable.
        </p>
      </motion.div>
    </div>
  );
};

const features = [
  {
    title: "Eco-Friendly Landscaping",
    description: "Sustainable designs that enhance both beauty and biodiversity.",
    icon: FaLeaf,
  },
  {
    title: "Green Interiors & Balconies",
    description: "Transforming indoor spaces into refreshing green havens.",
    icon: FaSeedling,
  },
  {
    title: "Community & Corporate Projects",
    description: "Partnering with schools and businesses for a greener tomorrow.",
    icon: FaGlobe,
  },
  {
    title: "Expert Consultation & Affordable Solutions",
    description: "Tailored gardening services to suit your budget and space.",
    icon: FaHandsHelping,
  },
  {
    title: "Our Vision",
    description: "To create a world where every space is green, healthy, and sustainable.",
    icon: FaEye,
  },
  {
    title: "Our Mission",
    description: "To bring innovative and affordable greenery solutions to homes, offices, and public spaces.",
    icon: FaBullseye,
  },
];

export default About;
