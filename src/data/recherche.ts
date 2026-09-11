import type { Thematique } from "../types";

export const thematiquesRecherche: Thematique[] = [
  { titre: "Communications optiques et sans fil à haut débit" },
  { titre: "Réseaux mobiles de nouvelle génération" },
  { titre: "Internet des objets (IoT)" },
  {
    titre: "Formats de modulation avancés",
    description: "OFDM optique (O-OFDM) et FBMC pour les liaisons IM/DD.",
  },
  { titre: "Traitement du signal" },
  { titre: "Codage canal et correction d'erreurs" },
  { titre: "Détection directe et détection cohérente dans les réseaux optiques" },
  { titre: "Techniques de multiplexage pour les réseaux optiques de nouvelle génération" },
  { titre: "Algorithmes de loading pour les systèmes O-OFDM adaptatifs" },
  { titre: "Architectures hybrides pour les PON de nouvelle génération" },
];

export const outilsSimulation: string[] = ["VPIphotonics", "MATLAB", "Optisystem"];
