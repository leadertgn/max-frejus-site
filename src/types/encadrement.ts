export type TypeEncadrement = "mémoire" | "thèse" | "stage FttH";

/** Un travail d'étudiant encadré : mémoire, thèse ou stage. */
export interface Encadrement {
  titre: string;
  etudiant: string;
  type: TypeEncadrement;
  /** Ingénieur, Master Recherche, Master PHORAN, MSc... */
  niveau?: string;
  annee?: string;
}
