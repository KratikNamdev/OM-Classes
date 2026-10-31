
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Teachers from "./Pages/Teachers";
import Results from "./Pages/Results";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8faf7]">
        <ScrollToTop />

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teacher" element={<Teachers />} />
            <Route path="/results" element={<Results />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
