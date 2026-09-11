import type { Lien } from "./lien";

/** Une ressource pédagogique publiée (tutoriel, TP, vidéo). */
export interface Tutorial {
  id: string;
  titre: string;
  description?: string;
  /** Ex. "Réseaux de communication optique", "Traitement du signal". */
  categorie?: string;
  liens: Lien[];
}
