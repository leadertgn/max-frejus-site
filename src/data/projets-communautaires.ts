import type { ProjetCommunautaire } from "../types";

/** Source : page "Community Projects". Les quatre premiers font l'objet d'un appel aux dons. */
export const projetsCommunautaires: ProjetCommunautaire[] = [
  {
    titre: "LiFi : innovation pour les musées",
    description: `Prototype LiFi permettant aux œuvres d'art de « raconter elles-mêmes leur histoire » aux
visiteurs, via la transmission de données par la lumière visible. Projet mené par Jekhiel Chabi Saré et
David Kochoni sous la direction du Dr Max Fréjus O. SANYA.`,
    don: true,
  },
  {
    titre: "e-Dustbin — poubelle connectée",
    description: `Poubelle intelligente conçue pour contribuer à l'assainissement des villes béninoises :
détection du niveau de remplissage et remontée de l'information pour optimiser les tournées de collecte.`,
    don: true,
  },
  {
    titre: "TailorApp",
    description: `Application mobile de digitalisation du métier de tailleur : elle permet aux abonnés de
contacter des couturiers, de passer commande de vêtements sur mesure et d'en suivre la réalisation.`,
    don: true,
  },
  {
    titre: "Systèmes FSO — accès Internet alternatif",
    description: `Étude et prototypage de liaisons optiques en espace libre (Free Space Optics) comme solution
d'accès Internet alternative et complémentaire pour l'Afrique de l'Ouest.`,
    don: true,
  },
  {
    titre: "Prototype LiFi — 1er prix GeneB 2022",
    description: `Prototype de connexion de terminaux (ordinateurs par exemple) par la lumière visible, primé
1er prix dans la catégorie solutions numériques du concours d'innovation GeneB — Génie des Écoles,
Établissements et Entreprises du Bénin 2022.`,
  },
  {
    titre: "EPAC-UAC Student Chapter of Optica",
    description: `Animation du chapitre étudiant Optica de l'EPAC-UAC en tant qu'advisor : activités de
vulgarisation scientifique, ateliers et rapports d'activité auprès de la société Optica.`,
  },
  {
    titre: "« Le Bénin qui Gagne »",
    description: `Série de 17 participations à l'émission « Le Bénin qui Gagne » entre septembre 2022 et mars
2023, consacrées aux enjeux du numérique et du développement communautaire au Bénin.`,
  },
  {
    titre: "Workshop BWAI 2023 — présidence de session",
    description: `Présidence de session et intervention sur la technologie LiFi lors du workshop BWAI 2023.`,
  },
];
