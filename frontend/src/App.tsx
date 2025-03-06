import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow "> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicePage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
