import type { Encadrement } from "../types";

// Source : page "Memoria thesis and Projects", regroupée par année académique.
// Les entrées de 2008, 2011 et 2012 ne mentionnent pas de nom d'étudiant sur le site source.

const INGENIEUR = "Ingénieur";

export const encadrements: Encadrement[] = [
  // 2021-2022
  { titre: "Conception d'un prototype LiFi pour la transmission des données dans un musée", etudiant: "Jekhiel Chabi Saré et David Kochoni", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Implémentation de la TNT dans le réseau national de fibre optique pour une offre future de service Triple Play", etudiant: "Djafarou Soulemane Alassane", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Proposition d'un système FSO (Free Space Optics) pour l'interconnexion de sites TNT au Bénin", etudiant: "Fernando Don de Dieu Kouétcha Djoki", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Système de géolocalisation d'un objet connecté dans les réseaux LPWAN", etudiant: "Farouk Iyanda Bello", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Implémentation du multiplexage temporel dans une liaison optique par cosimulation Optisystem/Matlab", etudiant: "Maxime Joël Ahandessi", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Étude de faisabilité d'un réseau de communication entre les différents services du CNHU-HKM", etudiant: "Moïse Néolias Kpinsoton", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Étude et implémentation de la technique « Triple Layer Hybrid Optical-OFDM »", etudiant: "Abdias Ange Agbo", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Étude du déploiement d'une liaison optique 100G-SWDM2 au sein d'un datacenter", etudiant: "Mahouwèna Canisius Boris Codjia", type: "mémoire", niveau: INGENIEUR, annee: "2021-2022" },
  { titre: "Étude des performances de l'ADO-OFDM par variation des caractéristiques d'un laser DML", etudiant: "C. C. Jean-Luc O. Zohoungbé", type: "mémoire", niveau: "Master Recherche", annee: "2021-2022" },

  // 2020-2021
  { titre: "Prédiction par une méthode d'intelligence artificielle du travail chez la femme enceinte", etudiant: "Mawugnon Asaph Godwin Houdji", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Étude des performances de la ML-SIPM-OFDM dans un réseau d'accès optique TWDM-PON", etudiant: "Fiacre A. Godfred Dansou", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Étude des performances de la technique de modulation SIPM-OFDM adaptative dans un réseau d'accès de type IM/DD TWDM-PON", etudiant: "Oluwatogni K. Serge Afouda", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Conception et réalisation d'une poubelle intelligente pour l'assainissement des villes", etudiant: "Zianath A. Adechinan", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Étude et conception d'un prototype LiFi de transmission de données entre deux terminaux", etudiant: "Anaïs G. A. Nassara", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Conception et réalisation d'une application mobile de gestion des commandes de couture de vêtement au Bénin : TailorApp", etudiant: "Jocelin Hounon", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },
  { titre: "Étude et modélisation d'un canal FSO (Free Space Optics) pour une cosimulation MATLAB/Optisystem", etudiant: "Coffi Y. R. Houngnibo", type: "mémoire", niveau: INGENIEUR, annee: "2020-2021" },

  // 2019-2020
  { titre: "Implémentation du CDMA dans les réseaux d'accès sur fibre", etudiant: "Harold Rotimi Adegnandjou", type: "mémoire", niveau: "Master", annee: "2019-2020" },

  // 2018-2019 — Master PHORAN (photonique)
  { titre: "Étude des performances d'un système de communication optique DWDM-FSO utilisant la technique SIM-OFDM", etudiant: "Fifamè Merci-Ange Magnidet", type: "mémoire", niveau: "Master PHORAN", annee: "2018-2019" },
  { titre: "Étude des performances de l'architecture TWDM dans le réseau d'accès optique en utilisant la technique de modulation OFDM adaptative", etudiant: "Fagla Brice Francis Tokpa", type: "mémoire", niveau: "Master PHORAN", annee: "2018-2019" },
  { titre: "Conception d'un système de transmission de données LiFi et implémentation de la technique de modulation SIM-OFDM", etudiant: "Béni J. Pierre Fourier Sandah", type: "mémoire", niveau: "Master PHORAN", annee: "2018-2019" },

  // 2017-2018
  { titre: "Étude du LiFi (Light-Fidelity) : implémentation de la technique SIM-OFDM", etudiant: "Oulfath Adjao", type: "mémoire", niveau: INGENIEUR, annee: "2017-2018" },
  { titre: "Étude des performances de l'OFDM adaptatif dans un réseau d'accès optique de type WDM-PON", etudiant: "Gérède Cakpo", type: "mémoire", niveau: INGENIEUR, annee: "2017-2018" },
  { titre: "Étude et implémentation de l'OFDM/OQAM utilisant la fonction prototype PHYDYAS", etudiant: "Vital Akpamoli", type: "mémoire", niveau: INGENIEUR, annee: "2017-2018" },
  { titre: "Étude de l'ADO-OFDM pour son implémentation dans les réseaux d'accès optiques", etudiant: "Katel Hounsounou", type: "mémoire", niveau: INGENIEUR, annee: "2017-2018" },
  { titre: "Étude et implémentation des systèmes de communication optique en espace libre (FSO)", etudiant: "Pacôme Chede", type: "mémoire", niveau: INGENIEUR, annee: "2017-2018" },

  // 2016-2017
  { titre: "Liaison FTTA (Fiber-to-the-Antenna) pour la montée en débit dans les bandes de fréquences libres", etudiant: "Moréno Djehouga", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Étude de l'OFDM en Radio sur Fibre pour les réseaux PON descendants", etudiant: "Jean-Baptiste Gougnon", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Étude des performances d'une liaison DWDM pour des réseaux LAN entre datacenters", etudiant: "Cédric Loko", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Étude des performances de l'OFDM dans le réseau d'accès TDM-PON", etudiant: "Fortuné Kponou", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Étude de la technologie 4G/LTE : implémentation des techniques OFDMA et SC-FDMA", etudiant: "Ange Hounmenou", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Étude et performances des techniques DCO et ACO-OFDM dans un réseau d'accès WDM-PON", etudiant: "Quentin Choukpin", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },
  { titre: "Codage de canal pour les transmissions optiques sans fil de type indoor", etudiant: "Gérard Kponhinto", type: "mémoire", niveau: INGENIEUR, annee: "2016-2017" },

  // 2015-2016
  { titre: "Simulation of Fiber-To-The-Antenna (FTTA) link using an optical frequency transposition", etudiant: "Bebert Joachim", type: "mémoire", niveau: INGENIEUR, annee: "2015-2016" },
  { titre: "Study of a D-EML performance in a TDM-PON access network", etudiant: "Edgar Djenontin", type: "mémoire", niveau: INGENIEUR, annee: "2015-2016" },
  { titre: "Study of a D-EML performance in a WDM-PON access network", etudiant: "Joël Zannou", type: "mémoire", niveau: INGENIEUR, annee: "2015-2016" },
  { titre: "Implementation of Luby Transform (LT) code: case of an optical channel link", etudiant: "Eric Savy", type: "mémoire", niveau: INGENIEUR, annee: "2015-2016" },

  // Antérieurs
  { titre: "Study of a wireless audio transmission by infrared link", etudiant: "Non précisé", type: "mémoire", niveau: "Co-encadrement avec Pr Christelle Aupetit-Berthelemot (ENSIL, Limoges)", annee: "2012" },
  { titre: "Study of amplification in fiber optic communications: theory and simulations", etudiant: "Non précisé", type: "mémoire", niveau: "Master Recherche", annee: "2011" },
  { titre: "Design of a GSM remote state system transfer", etudiant: "Non précisé", type: "mémoire", niveau: "MSc", annee: "2008" },
];
