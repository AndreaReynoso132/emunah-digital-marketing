import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicePages";
import HeroSection from "./components/HeroSection";
import ContactPage from "./pages/ContactPage"; 
import AboutPage from "./pages/AboutPage"; // Importa la nueva página



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Ruta de inicio */}
        <Route path="/" element={<HeroSection />} />
        {/* Ruta de servicios */}
        <Route path="/servicios" element={<ServicesPage />} />
        {/* Ruta de contacto */}
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nosotros" element={<AboutPage />} /> {/* Nueva ruta */}

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
