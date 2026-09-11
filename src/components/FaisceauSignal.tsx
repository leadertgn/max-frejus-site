import TraitSignal from "./TraitSignal";

/**
 * Déclinaison du trait de signal en faisceau, pour la marge droite du héro.
 * Chaque trace porte son impulsion à une position différente ; le décalage des
 * animations produit le balayage de gauche à droite au chargement — l'unique
 * moment de mouvement du site.
 */
const traces = [
  { impulsion: 22, amplitude: 5, opacite: 0.45 },
  { impulsion: 38, amplitude: 7, opacite: 0.65 },
  { impulsion: 56, amplitude: 4, opacite: 0.85 },
  { impulsion: 71, amplitude: 6.5, opacite: 1 },
  { impulsion: 48, amplitude: 3, opacite: 0.8 },
  { impulsion: 63, amplitude: 5.5, opacite: 0.6 },
  { impulsion: 30, amplitude: 4, opacite: 0.4 },
];

export default function FaisceauSignal() {
  return (
    <div aria-hidden="true" className="space-y-6">
      {traces.map((trace, index) => (
        <div
          key={trace.impulsion}
          className="trace-revelee"
          style={{ opacity: trace.opacite, animationDelay: `${index * 90}ms` }}
        >
          <TraitSignal
            impulsion={trace.impulsion}
            amplitude={trace.amplitude}
            couleurTrait="rgba(247, 245, 240, 0.6)"
          />
        </div>
      ))}
    </div>
  );
}
