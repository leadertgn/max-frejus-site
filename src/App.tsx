import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import EnConstruction from "./pages/EnConstruction";
import MentionsLegales from "./pages/MentionsLegales";
import Publications from "./pages/Publications";
import Recherche from "./pages/Recherche";
import Enseignement from "./pages/Enseignement";
import Encadrement from "./pages/Encadrement";
import Projets from "./pages/Projets";
import Ressources from "./pages/Ressources";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    const mouvementReduit = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: mouvementReduit ? "auto" : "smooth" });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main key={location.pathname} className="route-transition flex-1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/enseignement" element={<Enseignement />} />
          <Route path="/encadrement" element={<Encadrement />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route
            path="*"
            element={<EnConstruction titre="Page introuvable" />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
