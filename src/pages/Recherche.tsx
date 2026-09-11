import SectionTitle from "../components/SectionTitle";
import { outilsSimulation, thematiquesRecherche } from "../data";

export default function Recherche() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionTitle
          titre="Recherche"
          niveau="h1"
          chapeau="Axes de recherche en communications optiques, réseaux et traitement du signal."
        />

        <ol className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {thematiquesRecherche.map((thematique, index) => (
            <li
              key={thematique.titre}
              className="grid grid-cols-[2.5rem_1fr] border-t border-petrole/20 pt-4"
            >
              <span className="font-titre text-sm text-lumiere">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-titre text-lg leading-snug text-nuit">
                  {thematique.titre}
                </h2>
                {thematique.description && (
                  <p className="mt-1 max-w-[46ch] text-sm text-encre">
                    {thematique.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <SectionTitle
            titre="Outils de simulation"
            chapeau="Environnements utilisés pour modéliser et évaluer les systèmes étudiés."
          />

          <ul className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-3">
            {outilsSimulation.map((outil, index) => (
              <li
                key={outil}
                className="grid grid-cols-[2.5rem_1fr] border-t border-petrole/20 pt-4"
              >
                <span className="font-titre text-sm text-lumiere">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-titre text-lg text-nuit">{outil}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
