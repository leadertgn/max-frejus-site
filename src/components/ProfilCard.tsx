import { useState } from "react";
import { profil } from "../data";

interface ProfilCardProps {
  /** Nombre de fonctions affichées. Sans limite, toutes sont listées. */
  limitePostes?: number;
}

/** Initiales (prénom + nom de famille) utilisées tant que la photo n'est pas disponible. */
function initiales(nom: string) {
  const mots = nom
    .replace(/,.*$/, "")
    .split(" ")
    .filter((mot) => /^[A-ZÀ-Ý][a-zà-ÿA-ZÀ-Ý]/.test(mot));

  return [mots[0], mots[mots.length - 1]].map((mot) => mot[0]).join("");
}

/**
 * Carte d'identité : portrait, nom, titre et fonctions.
 * Pas d'encadré ombré — la hiérarchie tient au filet vertical et à l'espacement.
 */
export default function ProfilCard({ limitePostes }: ProfilCardProps) {
  const [photoIndisponible, setPhotoIndisponible] = useState(false);

  const postes = limitePostes ? profil.postes.slice(0, limitePostes) : profil.postes;
  const restants = profil.postes.length - postes.length;

  return (
    <div className="grid gap-8 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-10">
      <div className="w-40 sm:w-full">
        {photoIndisponible ? (
          // TODO: à valider avec Dr SANYA — remplacer par la photo réelle.
          <div
            role="img"
            aria-label={`Portrait de ${profil.nom} — photographie à venir`}
            className="flex aspect-[4/5] items-center justify-center border border-petrole/20 bg-nuit"
          >
            <span className="font-titre text-4xl text-papier/40">{initiales(profil.nom)}</span>
          </div>
        ) : (
          <img
            src={profil.photo}
            alt={`Portrait de ${profil.nom}`}
            onError={() => setPhotoIndisponible(true)}
            className="aspect-[4/5] w-full border border-petrole/20 object-cover"
          />
        )}
      </div>

      <div>
        <h2 className="font-titre text-2xl leading-tight text-nuit sm:text-3xl">{profil.nom}</h2>
        <p className="mt-2 max-w-[52ch] text-petrole">{profil.titre}</p>

        <ul className="mt-6 space-y-2 border-l border-petrole/25 pl-5">
          {postes.map((poste) => (
            <li key={poste} className="max-w-[62ch] text-sm leading-relaxed">
              {poste}
            </li>
          ))}
        </ul>

        {restants > 0 && (
          <p className="mt-3 pl-5 text-sm text-encre/70">
            et {restants} autres fonctions académiques et administratives
          </p>
        )}
      </div>
    </div>
  );
}
