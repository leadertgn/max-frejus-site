import type { Formation } from "../types";

// Page source "FttH_Internship" : ni participants ni dates ne sont indiqués,
// uniquement le matériel déployé et des ressources d'approfondissement.
export const formationFttH: Formation = {
  titre: "Formation pratique FTTH",
  description: `Formation pratique au déploiement de la fibre jusqu'à l'abonné (FTTH) : mise en œuvre de câbles
optiques multimodes (MMF) et monomodes (SMF) ainsi que de câbles cuivre, découverte des équipements de
transmission, des types de transceivers et des fournisseurs du marché.`,
  ressources: [
    // TODO : URL non extractibles du Google Site, à demander au Dr SANYA.
    { label: "Comprendre la fibre optique", url: "" },
    { label: "Canaux radio sous MATLAB (LTE)", url: "" },
    { label: "Traitement numérique du signal (DSP)", url: "" },
  ],
};
