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
        chapeau="Cours dispensés en réseaux, télécommunications, électronique et traitement du signal."
      />

      <div className="mt-14 space-y-16">
        {[...coursParEtablissement.entries()].map(
          ([etablissement, coursEtablissement]) => {
            const coursParNiveau = regrouperParNiveau(coursEtablissement);

            return (
              <section key={etablissement}>
                <SectionTitle
                  titre={nomEtablissement(etablissement)}
                  niveau="h2"
                />

                <div className="mt-10 space-y-10">
                  {[...coursParNiveau.entries()].map(
                    ([niveau, coursNiveau]) => (
                      <div key={niveau}>
                        <h3 className="border-b border-petrole/20 pb-3 font-titre text-xl text-petrole">
                          {niveau}
                        </h3>
                        <ul className="divide-y divide-petrole/15">
                          {coursNiveau.map((coursActuel) => (
                            <li
                              key={`${coursActuel.etablissement}-${coursActuel.niveau}-${coursActuel.intitule}`}
                              className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
                            >
                              <span className="text-nuit">
                                {coursActuel.intitule}
                              </span>
                              {coursActuel.annee && (
                                <span className="text-sm text-encre/75">
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
              </section>
            );
          },
        )}
      </div>
    </section>
  );
}
