import { useTypeAnneeFilter } from "../hooks/useTypeAnneeFilter";
import SectionTitle from "../components/SectionTitle";
import Select from "../components/Select";
import { encadrements } from "../data";
import type { Encadrement as EncadrementType, TypeEncadrement } from "../types";

const TYPES_ENCADREMENT: Array<{
  valeur: TypeEncadrement | "tous";
  libelle: string;
}> = [
  { valeur: "tous", libelle: "Tous les types" },
  { valeur: "mémoire", libelle: "Mémoires" },
  { valeur: "thèse", libelle: "Thèses" },
  { valeur: "stage FttH", libelle: "Stages FttH" },
];

function debutAnnee(annee: string) {
  return Number.parseInt(annee, 10);
}

function regrouperParAnnee(elements: EncadrementType[]) {
  const groupes = new Map<string, EncadrementType[]>();

  for (const encadrement of elements) {
    const cle = encadrement.annee ?? "Année non précisée";
    const groupe = groupes.get(cle) ?? [];
    groupe.push(encadrement);
    groupes.set(cle, groupe);
  }

  return [...groupes.entries()].sort(([anneeA], [anneeB]) => {
    if (anneeA === "Année non précisée") return 1;
    if (anneeB === "Année non précisée") return -1;
    return debutAnnee(anneeB) - debutAnnee(anneeA);
  });
}

export default function Encadrement() {
  const {
    typeActif,
    setTypeActif,
    anneeActive,
    setAnneeActive,
    annees,
    elementsFiltres: encadrementsFiltres,
  } = useTypeAnneeFilter(encadrements);
  const groupesParAnnee = regrouperParAnnee(encadrementsFiltres);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <SectionTitle
        titre="Encadrement"
        niveau="h1"
        chapeau={`${encadrements.length} travaux encadrés de 2008 à 2021-2022, principalement des mémoires d'ingénieur sur les réseaux optiques, le LiFi et l'OFDM.`}
      />

      <div className="mt-12 grid gap-6 border-y border-petrole/20 py-6 sm:grid-cols-2">
        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="type-encadrement"
        >
          Type d&apos;encadrement
          <Select
            id="type-encadrement"
            value={typeActif}
            onChange={setTypeActif}
            options={TYPES_ENCADREMENT.map((option) => ({
              value: option.valeur,
              label: option.libelle,
            }))}
          />
        </label>

        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="annee-encadrement"
        >
          Année académique
          <Select
            id="annee-encadrement"
            value={anneeActive}
            onChange={setAnneeActive}
            options={[
              { value: "toutes", label: "Toutes les années" },
              ...annees.map((annee) => ({ value: annee, label: annee })),
            ]}
          />
        </label>
      </div>

      <p className="mt-8 text-sm text-encre" aria-live="polite">
        {encadrementsFiltres.length} encadrement
        {encadrementsFiltres.length > 1 ? "s" : ""}
      </p>

      <div
        key={`${typeActif}-${anneeActive}`}
        className="filter-results-transition mt-8 space-y-16"
      >
        {groupesParAnnee.map(([annee, travaux]) => (
          <section key={annee}>
            <SectionTitle titre={annee} niveau="h2" />

            <ul className="mt-10 divide-y divide-petrole/15">
              {travaux.map((encadrement) => (
                <li
                  key={`${annee}-${encadrement.titre}-${encadrement.etudiant}`}
                  className="py-7 first:pt-0"
                >
                  <h3 className="font-titre text-xl leading-snug text-nuit">
                    {encadrement.titre}
                  </h3>
                  <dl className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
                    <div>
                      <dt className="text-encre/60">Étudiant</dt>
                      <dd className="mt-1 text-encre">
                        {encadrement.etudiant}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-encre/60">Type</dt>
                      <dd className="mt-1 text-encre">{encadrement.type}</dd>
                    </div>
                    {encadrement.niveau && (
                      <div>
                        <dt className="text-encre/60">Niveau</dt>
                        <dd className="mt-1 text-encre">
                          {encadrement.niveau}
                        </dd>
                      </div>
                    )}
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
