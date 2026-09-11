export type TypePublication = "article" | "conférence" | "ouvrage" | "thèse";

/** Une référence bibliographique (article, communication, thèse). */
export interface Publication {
  id: string;
  titre: string;
  auteurs: string[];
  annee: number;
  type: TypePublication;
  /** Revue, conférence ou collection, avec volume et pages si connus. */
  revue?: string;
  /** DOI, PDF ou page ResearchGate. */
  lien?: string;
}
