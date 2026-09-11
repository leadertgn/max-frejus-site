import type { Cours } from "../types";

// Source : page "Academics Courses". Le site indique que chaque cours dispose de notes et de TD
// sur Drive, mais les URL individuelles ne sont pas publiques : le champ `support` reste vide.

const EPAC = "EPAC / UAC";
const UCAO = "UCAO-Bénin";

const GIT = "Génie Informatique et Télécommunications (GIT)";
const GE = "Génie Électrique (GE)";
const ELECTRONIQUE_INFO = "Électronique et Informatique";

export const cours: Cours[] = [
  { intitule: "Transmissions Numériques", niveau: GIT, etablissement: EPAC },
  { intitule: "Modulations Numériques", niveau: GIT, etablissement: EPAC },
  { intitule: "Théorie des Graphes et Réseaux", niveau: GIT, etablissement: EPAC },
  { intitule: "Traitement du Signal", niveau: GIT, etablissement: EPAC },
  { intitule: "Introduction aux Réseaux PON", niveau: GIT, etablissement: EPAC },
  { intitule: "Initiation à Optisystem 7", niveau: GIT, etablissement: EPAC },
  { intitule: "Réseaux de Télécommunications", niveau: GIT, etablissement: EPAC },
  { intitule: "Architecture des Réseaux de Télécommunication", niveau: GIT, etablissement: EPAC },
  { intitule: "Initiation à Zotero", niveau: GIT, etablissement: EPAC },

  { intitule: "Initiation à l'Algorithmique", niveau: "Prépa Ingénieur", etablissement: "CAP / EPAC", annee: "2024-2025" },
  { intitule: "Analyse Numérique", niveau: "Prépa Ingénieur", etablissement: "CAP / EPAC", annee: "2024-2025" },
  { intitule: "TIC et Multimédia", niveau: "Formation continue", etablissement: "CAP / EPAC" },

  { intitule: "Technologie des Composants Électroniques et Électriques", niveau: GE, etablissement: EPAC },
  { intitule: "Circuits Logiques Combinatoires et Séquentiels", niveau: GE, etablissement: EPAC },
  { intitule: "Optronique, Micro-ondes et Radars", niveau: GE, etablissement: EPAC },
  { intitule: "Techniques d'Amplification Optique", niveau: GE, etablissement: EPAC },
  { intitule: "Systèmes Optiques", niveau: "École Doctorale ED-SDI", etablissement: "UAC" },

  { intitule: "Systèmes Radio-Mobiles", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Multiplexage Numérique", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Technologie des Composants Optoélectroniques", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Supports et Transmission Optiques", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Techniques de l'Optique Guidée", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Réseaux d'Accès PON", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
  { intitule: "Techniques d'Amplification Optique", niveau: ELECTRONIQUE_INFO, etablissement: UCAO },
];
