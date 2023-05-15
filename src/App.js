import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostsPage from "./pages/PostsPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import SupportPage from "./pages/SupportPage";
import HPage from "./pages/HPage";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="salsa" element={<HomePage />} />
          <Route path="/video/:idFromParams" element={<HomePage />} />
          <Route path="h" element={<HPage />} />
          <Route path="/video/:idFromParams" element={<HPage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contactus" element={<ContactUsPage />} />
          <Route path="support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
