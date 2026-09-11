import { useState } from "react";

interface ElementFiltrable {
  type: string;
  annee?: number | string;
}

export function useTypeAnneeFilter<T extends ElementFiltrable>(elements: T[]) {
  const [typeActif, setTypeActif] = useState("tous");
  const [anneeActive, setAnneeActive] = useState("toutes");
  const annees = [
    ...new Set(
      elements
        .map((element) => element.annee)
        .filter((annee): annee is number | string => annee !== undefined)
        .map(String),
    ),
  ].sort((anneeA, anneeB) =>
    anneeB.localeCompare(anneeA, undefined, { numeric: true }),
  );
  const elementsFiltres = elements.filter(
    (element) =>
      (typeActif === "tous" || element.type === typeActif) &&
      (anneeActive === "toutes" || String(element.annee) === anneeActive),
  );

  return {
    typeActif,
    setTypeActif,
    anneeActive,
    setAnneeActive,
    annees,
    elementsFiltres,
  };
}
