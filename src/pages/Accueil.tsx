import { Link } from "react-router-dom";
import FaisceauSignal from "../components/FaisceauSignal";
import ProfilCard from "../components/ProfilCard";
import PartenairesGrid from "../components/PartenairesGrid";
import SectionTitle from "../components/SectionTitle";
import {
  outilsSimulation,
  profil,
  publications,
  thematiquesRecherche,
} from "../data";

/** Aperçu : les axes de recherche mis en avant sur l'accueil. */
const APERCU_THEMATIQUES = 6;

export default function Accueil() {
  const accroche = profil.bio.split("\n\n")[0];
  const thematiquesEnAvant = thematiquesRecherche.slice(0, APERCU_THEMATIQUES);
  const thematiquesRestantes =
    thematiquesRecherche.length - thematiquesEnAvant.length;

  return (
    <>
      {/* Héro — colonne de texte à gauche, faisceau de signal dans la marge droite. */}
      <section className="bg-nuit text-papier">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,62ch)_minmax(14rem,1fr)] lg:gap-20">
            <div>
              <h1 className="font-titre text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                {profil.nom}
              </h1>
              <p className="mt-5 text-lg text-lumiere">{profil.titre}</p>
              <p className="mt-8 max-w-[62ch] leading-relaxed text-papier/80">
                {accroche}
              </p>

              <Link
                to="/publications"
                className="mt-10 inline-block border-b-2 border-lumiere pb-1 text-papier transition-colors hover:text-lumiere"
              >
                Consulter les {publications.length} publications
              </Link>
            </div>

            <div className="hidden self-center lg:block">
              <FaisceauSignal />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <SectionTitle titre="Profil" niveau="h2" />
        <div className="mt-10">
          <ProfilCard limitePostes={5} />
        </div>
        <Link
          to="/a-propos"
          className="mt-10 inline-block border-b border-petrole pb-0.5 text-sm text-petrole transition-colors hover:border-lumiere hover:text-lumiere"
        >
          Parcours complet
        </Link>
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <SectionTitle
            titre="Axes de recherche"
            chapeau="Communications optiques et sans fil à haut débit, de la couche physique au déploiement des réseaux d'accès."
          />

          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {thematiquesEnAvant.map((thematique) => (
              <li
                key={thematique.titre}
                className="border-t border-petrole/20 pt-4"
              >
                <h3 className="font-titre text-lg leading-snug text-nuit">
                  {thematique.titre}
                </h3>
                {thematique.description && (
                  <p className="mt-1 max-w-[46ch] text-sm text-encre">
                    {thematique.description}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap items-baseline justify-between gap-6">
            <p className="max-w-[52ch] text-sm text-encre">
              Travaux conduits sous {outilsSimulation.join(", ")}.
              {thematiquesRestantes > 0 &&
                ` ${thematiquesRestantes} autres axes sont détaillés sur la page recherche.`}
            </p>
            <Link
              to="/recherche"
              className="border-b border-petrole pb-0.5 text-sm text-petrole transition-colors hover:border-lumiere hover:text-lumiere"
            >
              Tous les axes de recherche
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <SectionTitle
            titre="Partenaires"
            chapeau="Institutions, laboratoires et réseaux associés aux travaux et aux projets menés avec les étudiants."
          />
          <div className="mt-12">
            <PartenairesGrid />
          </div>
        </div>
      </section>
    </>
  );
}
