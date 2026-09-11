import TraitSignal from "./TraitSignal";

interface SectionTitleProps {
  titre: string;
  /** Phrase de contexte affichée sous le titre. */
  chapeau?: string;
  /** Niveau de titre HTML, pour garder une hiérarchie correcte par page. */
  niveau?: "h1" | "h2" | "h3";
  /** Sur fond sombre, le trait et le texte passent en teintes claires. */
  surFondSombre?: boolean;
}

/**
 * Titre de section. Le trait de signal qui le souligne n'est pas décoratif :
 * c'est le repère visuel qui marque chaque entrée de section du site.
 */
export default function SectionTitle({
  titre,
  chapeau,
  niveau: Titre = "h2",
  surFondSombre = false,
}: SectionTitleProps) {
  return (
    <div className="max-w-[62ch]">
      <Titre
        className={`font-titre text-3xl leading-tight sm:text-4xl ${
          surFondSombre ? "text-papier" : "text-nuit"
        }`}
      >
        {titre}
      </Titre>

      <TraitSignal
        className="mt-3 w-32"
        couleurTrait={surFondSombre ? "rgba(247, 245, 240, 0.35)" : "var(--color-petrole)"}
      />

      {chapeau && (
        <p className={`mt-4 ${surFondSombre ? "text-papier/70" : "text-encre"}`}>{chapeau}</p>
      )}
    </div>
  );
}
