import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import EnConstruction from "./pages/EnConstruction";
import MentionsLegales from "./pages/MentionsLegales";
import Publications from "./pages/Publications";
import Recherche from "./pages/Recherche";
import Enseignement from "./pages/Enseignement";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<APropos />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/enseignement" element={<Enseignement />} />
            <Route
              path="/encadrement"
              element={<EnConstruction titre="Encadrement" />}
            />
            <Route
              path="/projets"
              element={<EnConstruction titre="Projets" />}
            />
            <Route
              path="/ressources"
              element={<EnConstruction titre="Ressources" />}
            />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="*"
              element={<EnConstruction titre="Page introuvable" />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
