
import ContactUs from "../components/homepage/ContactUs";
import Dashboard from "../components/homepage/Dashboard";
import HeroSection from "../components/homepage/HeroSection";
import Services from "../components/homepage/Services";

const Home = () => {
 return(
  <div className="md:mb-10 mb-16">
    <Dashboard/>
    <Services/>
    <HeroSection/>
    <ContactUs/>
  </div>
 )
};

export default Home;


