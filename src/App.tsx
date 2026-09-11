import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import EnConstruction from "./pages/EnConstruction";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/a-propos" element={<EnConstruction titre="À propos" />} />
            <Route path="/recherche" element={<EnConstruction titre="Recherche" />} />
            <Route path="/publications" element={<EnConstruction titre="Publications" />} />
            <Route path="/enseignement" element={<EnConstruction titre="Enseignement" />} />
            <Route path="/encadrement" element={<EnConstruction titre="Encadrement" />} />
            <Route path="/projets" element={<EnConstruction titre="Projets" />} />
            <Route path="/ressources" element={<EnConstruction titre="Ressources" />} />
            <Route path="*" element={<EnConstruction titre="Page introuvable" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
