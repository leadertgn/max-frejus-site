import { useState } from "react";
import { profil } from "../data";

interface ProfilCardProps {
  /** Nombre de fonctions affichées. Sans limite, toutes sont listées. */
  limitePostes?: number;
}

const PHOTO_PLACEHOLDER =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=640&q=80";

/**
 * Carte d'identité : portrait, nom, titre et fonctions.
 * Pas d'encadré ombré — la hiérarchie tient au filet vertical et à l'espacement.
 */
export default function ProfilCard({ limitePostes }: ProfilCardProps) {
  const [photo, setPhoto] = useState(profil.photo);

  const postes = limitePostes
    ? profil.postes.slice(0, limitePostes)
    : profil.postes;
  const restants = profil.postes.length - postes.length;

  return (
    <div className="grid gap-8 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-10">
      <div className="w-40 sm:w-full">
        <img
          src={photo}
          alt={`Portrait de ${profil.nom}`}
          onError={() => setPhoto(PHOTO_PLACEHOLDER)}
          className="aspect-[4/5] w-full rounded-[5px] border border-petrole/20 object-cover"
        />
      </div>

      <div>
        <h2 className="font-titre text-2xl leading-tight text-nuit sm:text-3xl">
          {profil.nom}
        </h2>
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
