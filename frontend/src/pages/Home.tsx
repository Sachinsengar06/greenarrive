
import ContactUs from "../components/homepage/ContactUs";
import Dashboard from "../components/homepage/Dashboard";
import HeroSection from "../components/homepage/HeroSection";
import Services from "../components/homepage/Services";

const Home = () => {
 return(
  <div className="mb-20">
    <Dashboard/>
    <Services/>
    <HeroSection/>
    <ContactUs/>
  </div>
 )
};

export default Home;


