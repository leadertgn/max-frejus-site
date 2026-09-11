import type { Lien } from "./lien";

/** Une formation pratique animée (page "FttH_Internship"). */
export interface Formation {
  titre: string;
  description: string;
  ressources: Lien[];
}
