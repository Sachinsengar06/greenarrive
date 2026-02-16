import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// ❗ Home is NOT lazy
import Home from "./pages/Home";

// Lazy pages
const ServicePage = lazy(() => import("./pages/ServicePage"));
const About = lazy(() => import("./pages/About"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const GardenCalculator = lazy(() => import("./components/features/calculator/GardenCalculator"));
const WorkGallery = lazy(() => import("./components/features/Gallary/WorkGallery"));
const Profile = lazy(() => import("./pages/Profile"));
const BookService = lazy(() => import("./pages/BookService"));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse text-green-700 font-semibold text-lg">
        Loading...
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* HOME loads instantly */}
            <Route path="/" element={<Home />} />

            {/* Lazy routes */}
            <Route
              path="/services"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ServicePage />
                </Suspense>
              }
            />

            <Route
              path="/about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              }
            />

            <Route
              path="/contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactUs />
                </Suspense>
              }
            />

            <Route
              path="/gardenCalculator"
              element={
                <Suspense fallback={<PageLoader />}>
                  <GardenCalculator />
                </Suspense>
              }
            />

            <Route
              path="/gallery"
              element={
                <Suspense fallback={<PageLoader />}>
                  <WorkGallery />
                </Suspense>
              }
            />

            <Route
              path="/profile"
              element={
                <Suspense fallback={<PageLoader />}>
                  <Profile />
                </Suspense>
              }
            />

            <Route
              path="/book/:service"
              element={
                <Suspense fallback={<PageLoader />}>
                  <BookService />
                </Suspense>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
