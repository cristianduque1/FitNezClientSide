import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import BulkPage from "./pages/BulkPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SupportPage from "./pages/SupportPage";
import StrengthPage from "./pages/StrengthPage";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bulking" element={<BulkPage />} />
          <Route path="/video/:idFromParams" element={<BulkPage />} />
          <Route path="strengthening" element={<StrengthPage />} />
          <Route path="/video/:idFromParams" element={<StrengthPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
