import type { Tutorial } from "../types";

const OPTIQUE = "Réseaux de communication optique";

/** Source : page "Tutorials". */
export const tutorials: Tutorial[] = [
  {
    id: "optisystem7-demarrage",
    titre: "Prise en main d'Optisystem 7",
    description: "Exemple de liaison NRZ pas à pas.",
    categorie: OPTIQUE,
    liens: [
      { label: "Tutoriel (PDF)", url: "https://drive.google.com/file/d/1MHonQ2HeAly1XehkfkPlgQtii4UD5yZ5/view" },
      { label: "Télécharger Optisystem 7", url: "https://drive.google.com/file/d/17R7FWTEnutJbBlz0RhR-YpVil7Zgsai8/view" },
      { label: "Guide d'installation (vidéo)", url: "https://www.youtube.com/watch?v=B-B2hJEexUI" },
    ],
  },
  {
    id: "cosimulation-optisystem-matlab",
    titre: "Cosimulation Optisystem 7 et MATLAB",
    description: "Comment réaliser une cosimulation Optisystem 7 / MATLAB, appliquée à une transmission NRZ.",
    categorie: OPTIQUE,
    liens: [
      { label: "Tutoriel (PDF)", url: "https://drive.google.com/file/d/1Qrv5yjXFjapid2JzUSJWS5pAuR4n1bHH/view" },
      { label: "Fichier de simulation", url: "https://drive.google.com/file/d/18nuranad88jBjBm5tLfsxuhAtMi0jF6z/view?usp=sharing" },
    ],
  },
  {
    id: "projet-iq-dco-ofdm",
    titre: "Projet I/Q DCO-OFDM",
    description: "Projet complet d'une chaîne I/Q DCO-OFDM sous MATLAB / Optisystem 7.",
    categorie: OPTIQUE,
    liens: [
      {
        label: "Fichier du projet",
        url: "https://drive.google.com/file/d/0BzZ8fmcz3nL0bXBYV09FZTZiVEk/view?usp=sharing&resourcekey=0-figGS0NXVwb4Y9FNlJ0b1w",
      },
    ],
  },
  {
    id: "optisystem7-exercices",
    titre: "Travaux pratiques Optisystem 7",
    description: "Série d'exercices d'application.",
    categorie: OPTIQUE,
    liens: [{ label: "Exercices", url: "https://ucloud.unilim.fr/public/e5c5bc" }],
  },
  {
    id: "ofdm-matlab",
    titre: "Simulation de l'OFDM sous MATLAB",
    description: "Ressource interactive expliquant l'OFDM étape par étape.",
    categorie: "Traitement du signal",
    liens: [
      { label: "Ressource interactive", url: "https://www.etti.unibw.de/labalive/experiment/ofdmstepbystep/" },
    ],
  },
  {
    id: "ondes-electromagnetiques",
    titre: "Notions d'ondes électromagnétiques",
    categorie: "Physique des télécommunications",
    liens: [
      { label: "Vidéo 1", url: "https://youtu.be/w7y-1eY0mcE" },
      { label: "Vidéo 2", url: "https://youtu.be/g3aETl-9dfw" },
    ],
  },
  {
    id: "lifi-presentation",
    titre: "Le LiFi en bref",
    description: "Présentation de la technologie LiFi par Suat Topsu.",
    categorie: "LiFi / VLC",
    liens: [{ label: "Vidéo", url: "https://youtu.be/Awjp-zo5FY0" }],
  },
];
