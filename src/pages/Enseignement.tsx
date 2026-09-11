import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { cours } from "../data";
import type { Cours } from "../types";

const NOM_ETABLISSEMENT: Record<string, string> = {
  UAC: "EPAC / UAC",
};

function nomEtablissement(etablissement: string) {
  return NOM_ETABLISSEMENT[etablissement] ?? etablissement;
}

function regrouperParNiveau(coursEtablissement: Cours[]) {
  const groupes = new Map<string, Cours[]>();

  for (const coursActuel of coursEtablissement) {
    const groupe = groupes.get(coursActuel.niveau) ?? [];
    groupe.push(coursActuel);
    groupes.set(coursActuel.niveau, groupe);
  }

  return groupes;
}

export default function Enseignement() {
  const [etablissementOuvert, setEtablissementOuvert] = useState(0);
  const coursParEtablissement = new Map<string, Cours[]>();

  for (const coursActuel of cours) {
    const etablissement =
      coursActuel.etablissement === "UAC"
        ? "EPAC / UAC"
        : coursActuel.etablissement;
    const groupe = coursParEtablissement.get(etablissement) ?? [];
    groupe.push(coursActuel);
    coursParEtablissement.set(etablissement, groupe);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <SectionTitle
        titre="Enseignement"
        niveau="h1"
        chapeau={`${cours.length} cours répartis entre EPAC / UAC, CAP / EPAC et UCAO-Bénin, du cycle préparatoire aux formations en électronique et télécommunications.`}
      />

      <div className="mt-14 divide-y divide-petrole/20 border-y border-petrole/20">
        {[...coursParEtablissement.entries()].map(
          ([etablissement, coursEtablissement], index) => {
            const coursParNiveau = regrouperParNiveau(coursEtablissement);
            const estOuvert = etablissementOuvert === index;
            const idContenu = `cours-${index}`;

            return (
              <section key={etablissement}>
                <h2>
                  <button
                    type="button"
                    aria-expanded={estOuvert}
                    aria-controls={idContenu}
                    onClick={() =>
                      setEtablissementOuvert(estOuvert ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-nuit transition-colors hover:text-petrole focus:outline-none"
                  >
                    <span className="font-titre text-2xl">
                      {nomEtablissement(etablissement)}
                    </span>
                    <span className="flex shrink-0 items-center gap-4 text-sm text-encre/70">
                      {coursEtablissement.length} cours
                      <span
                        aria-hidden="true"
                        className={`font-titre text-xl text-lumiere transition-transform ${estOuvert ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </span>
                  </button>
                </h2>

                {estOuvert && (
                  <div id={idContenu} className="pb-8">
                    <div className="space-y-8 border-l border-petrole/20 pl-5">
                      {[...coursParNiveau.entries()].map(
                        ([niveau, coursNiveau]) => (
                          <div key={niveau}>
                            <h3 className="font-titre text-xl text-petrole">
                              {niveau}
                            </h3>
                            <ul className="mt-3 divide-y divide-petrole/15">
                              {coursNiveau.map((coursActuel) => (
                                <li
                                  key={`${coursActuel.etablissement}-${coursActuel.niveau}-${coursActuel.intitule}`}
                                  className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-3 text-nuit"
                                >
                                  <span className="text-lumiere">•</span>
                                  <span>{coursActuel.intitule}</span>
                                  {coursActuel.annee && (
                                    <span className="ml-auto text-sm text-encre/75">
                                      {coursActuel.annee}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </section>
            );
          },
        )}
      </div>
    </section>
  );
}
