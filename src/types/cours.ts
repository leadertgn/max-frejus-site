/** Un enseignement dispensé, tel que listé sur la page "Academics Courses". */
export interface Cours {
  intitule: string;
  /** Cursus ou département d'accueil (GIT, GE, Prépa Ingénieur...). */
  niveau: string;
  etablissement: string;
  annee?: string;
  /** Lien vers le support de cours, quand il est public. */
  support?: string;
}
