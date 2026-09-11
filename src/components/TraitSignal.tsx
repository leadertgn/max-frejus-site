/**
 * Le motif conducteur du site : un filet horizontal parcouru par une impulsion
 * unique, en écho au signal optique. Il souligne les titres de section et
 * structure le faisceau du héro. Purement graphique, donc masqué aux lecteurs
 * d'écran.
 */

interface TraitSignalProps {
  /** Position de l'impulsion sur le trait, en pourcentage de la largeur. */
  impulsion?: number;
  /** Hauteur de l'impulsion : 0 donne un filet droit, sans relief. */
  amplitude?: number;
  couleurTrait?: string;
  couleurImpulsion?: string;
  /** Contrôle la largeur du trait. Doit porter une classe de largeur. */
  className?: string;
}

export default function TraitSignal({
  impulsion = 18,
  amplitude = 6,
  couleurTrait = "var(--color-petrole)",
  couleurImpulsion = "var(--color-lumiere)",
  className = "w-full",
}: TraitSignalProps) {
  // Repères de l'impulsion, exprimés dans le repère 0-100 x 0-16 du viewBox.
  const centre = impulsion;
  const depart = centre - 5;
  const arrivee = centre + 5;
  const sommet = 8 - amplitude;

  return (
    <svg
      viewBox="0 0 100 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`h-4 ${className}`}
    >
      <path
        d={`M0 8 H${depart} L${centre} ${sommet} L${arrivee} 8 H100`}
        fill="none"
        stroke={couleurTrait}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={`M${depart} 8 L${centre} ${sommet} L${arrivee} 8`}
        fill="none"
        stroke={couleurImpulsion}
        strokeWidth="1.75"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
