import SectionTitle from "../components/SectionTitle";

interface EnConstructionProps {
  titre: string;
}

/** Remplace temporairement les pages pas encore construites, pour que la navigation reste complète. */
export default function EnConstruction({ titre }: EnConstructionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
      <SectionTitle titre={titre} niveau="h1" chapeau="Cette page est en cours de construction." />
    </section>
  );
}
