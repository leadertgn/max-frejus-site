import { useTypeAnneeFilter } from "../hooks/useTypeAnneeFilter";
import Select from "./Select";
import type { Publication, TypePublication } from "../types";

interface PublicationListProps {
  publications: Publication[];
}

const TYPES_PUBLICATION: Array<{
  valeur: TypePublication | "tous";
  libelle: string;
}> = [
  { valeur: "tous", libelle: "Tous les types" },
  { valeur: "article", libelle: "Articles" },
  { valeur: "conférence", libelle: "Conférences" },
  { valeur: "ouvrage", libelle: "Ouvrages" },
  { valeur: "thèse", libelle: "Thèses" },
];

function libelleType(type: TypePublication) {
  return (
    TYPES_PUBLICATION.find((option) => option.valeur === type)?.libelle ?? type
  );
}

export default function PublicationList({
  publications,
}: PublicationListProps) {
  const {
    typeActif,
    setTypeActif,
    anneeActive,
    setAnneeActive,
    annees,
    elementsFiltres: publicationsFiltrees,
  } = useTypeAnneeFilter(publications);

  return (
    <div>
      <div className="grid gap-6 border-y border-petrole/20 py-6 sm:grid-cols-2">
        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="type-publication"
        >
          Type de publication
          <Select
            id="type-publication"
            value={typeActif}
            onChange={setTypeActif}
            options={TYPES_PUBLICATION.map((option) => ({
              value: option.valeur,
              label: option.libelle,
            }))}
          />
        </label>

        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="annee-publication"
        >
          Année
          <Select
            id="annee-publication"
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
        {publicationsFiltrees.length} publication
        {publicationsFiltrees.length > 1 ? "s" : ""}
      </p>

      <div
        key={`${typeActif}-${anneeActive}`}
        className="filter-results-transition"
      >
        {publicationsFiltrees.length > 0 ? (
          <ol className="mt-4 divide-y divide-petrole/15">
            {publicationsFiltrees.map((publication) => (
              <li key={publication.id} className="py-7 first:pt-4">
                <div className="grid gap-3 sm:grid-cols-[5rem_1fr] sm:gap-8">
                  <p className="font-titre text-lg text-lumiere">
                    {publication.annee}
                  </p>
                  <div>
                    <p className="mb-2 text-xs text-petrole">
                      {libelleType(publication.type)}
                    </p>
                    <h3 className="font-titre text-xl leading-snug text-nuit">
                      {publication.titre}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-encre">
                      {publication.auteurs.join(", ")}
                    </p>
                    {publication.revue && (
                      <p className="mt-1 text-sm italic text-encre/80">
                        {publication.revue}
                      </p>
                    )}
                    {publication.lien && (
                      <a
                        href={publication.lien}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block border-b border-petrole pb-0.5 text-sm text-petrole hover:border-lumiere hover:text-lumiere"
                      >
                        Consulter la référence
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-8 border-t border-petrole/15 pt-6 text-encre">
            Aucune publication ne correspond à ces filtres.
          </p>
        )}
      </div>
    </div>
  );
}
