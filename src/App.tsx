import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TeamPage } from "./pages/TeamPage";
import { AppointmentPage } from "./pages/AppointmentPage";
import { PrivacyPage } from "./pages/PrivacyPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/appointments" element={<AppointmentPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

