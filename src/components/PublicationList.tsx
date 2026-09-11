import { useState } from "react";
import type { Publication, TypePublication } from "../types";

interface PublicationListProps {
  publications: Publication[];
}

const TYPES_PUBLICATION: Array<{
  valeur: TypePublication | "toutes";
  libelle: string;
}> = [
  { valeur: "toutes", libelle: "Tous les types" },
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
  const [typeActif, setTypeActif] = useState<TypePublication | "toutes">(
    "toutes",
  );
  const [anneeActive, setAnneeActive] = useState("toutes");
  const annees = [
    ...new Set(publications.map((publication) => publication.annee)),
  ].sort((anneeA, anneeB) => anneeB - anneeA);
  const publicationsFiltrees = publications.filter(
    (publication) =>
      (typeActif === "toutes" || publication.type === typeActif) &&
      (anneeActive === "toutes" || publication.annee === Number(anneeActive)),
  );

  return (
    <div>
      <div className="grid gap-6 border-y border-petrole/20 py-6 sm:grid-cols-2">
        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="type-publication"
        >
          Type de publication
          <select
            id="type-publication"
            value={typeActif}
            onChange={(event) =>
              setTypeActif(event.target.value as TypePublication | "toutes")
            }
            className="border-b border-petrole/40 bg-transparent px-0 py-2 text-petrole focus:border-lumiere focus:outline-none"
          >
            {TYPES_PUBLICATION.map((option) => (
              <option key={option.valeur} value={option.valeur}>
                {option.libelle}
              </option>
            ))}
          </select>
        </label>

        <label
          className="grid gap-2 text-sm text-encre"
          htmlFor="annee-publication"
        >
          Année
          <select
            id="annee-publication"
            value={anneeActive}
            onChange={(event) => setAnneeActive(event.target.value)}
            className="border-b border-petrole/40 bg-transparent px-0 py-2 text-petrole focus:border-lumiere focus:outline-none"
          >
            <option value="toutes">Toutes les années</option>
            {annees.map((annee) => (
              <option key={annee} value={annee}>
                {annee}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-8 text-sm text-encre" aria-live="polite">
        {publicationsFiltrees.length} publication
        {publicationsFiltrees.length > 1 ? "s" : ""}
      </p>

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
  );
}
