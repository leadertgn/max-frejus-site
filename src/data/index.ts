// Point d'entrée unique des données du site.
// Les composants importent d'ici et jamais d'un fichier de domaine :
//   import { publications } from "../data";
//
// Phase 2 : chaque fichier de domaine sera remplacé par un fetch() vers l'API Express.
// Ce baril et les composants qui l'utilisent ne changeront pas.

export { profil } from "./profil";
export { thematiquesRecherche, outilsSimulation } from "./recherche";
export { publications } from "./publications";
export { cours } from "./cours";
export { encadrements } from "./encadrements";
export { formationFttH } from "./formation-ftth";
export { projetsCommunautaires } from "./projets-communautaires";
export { soutien } from "./soutien";
export { tutorials } from "./tutorials";
export { partenaires } from "./partenaires";
