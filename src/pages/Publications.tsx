import PublicationList from "../components/PublicationList";
import SectionTitle from "../components/SectionTitle";
import { publications } from "../data";

export default function Publications() {
  const annees = publications.map((publication) => publication.annee);
  const anneeMin = Math.min(...annees);
  const anneeMax = Math.max(...annees);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <SectionTitle
        titre="Publications"
        niveau="h1"
        chapeau={`${publications.length} publications de ${anneeMin} à ${anneeMax}, de la thèse sur les réseaux d'accès optiques aux travaux sur le codage, le LiFi et l'apprentissage automatique appliqué aux réseaux.`}
      />
      <div className="mt-12">
        <PublicationList publications={publications} />
      </div>
    </section>
  );
}
