/** Un projet mené avec les étudiants au bénéfice de la communauté. */
export interface ProjetCommunautaire {
  titre: string;
  description: string;
  lien?: string;
  /** true si le projet fait l'objet d'un appel aux dons. */
  don?: boolean;
}
