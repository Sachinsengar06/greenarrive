import frameImg from '../../assets/images/2147844319.jpg'
const Dashboard = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 lg:px-10 pt-12">
      {/* Background Image */}
      <img
        src={frameImg}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full bg-amber-100 h-full object-cover -z-10"
      />

      {/* Overlay Content */}
      <div className="max-w-2xl text-white space-y-6">
        <p className="text-5xl md:text-6xl font-bold drop-shadow-lg">
          A Beautiful <br /> Adventure Awaits
        </p>
        <p className="text-xs md:text-xl lg:text-lg drop-shadow-md">
          We craft vibrant, sustainable landscapes that breathe life into every
          space. Join us in creating a greener, fresher, and more inspiring
          world!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
          <button className="bg-green-900 text-white px-8 py-3 rounded cursor-pointer border-2 border-green-900 h-12 flex items-center justify-center shadow-md hover:bg-green-700">
            Buy Plan
          </button>
          <button className="border-2 border-green-900 text-green-900 px-8 py-3 rounded cursor-pointer h-12 flex items-center justify-center shadow-md hover:bg-green-100">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
