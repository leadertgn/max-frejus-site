import PublicationList from "../components/PublicationList";
import SectionTitle from "../components/SectionTitle";
import { publications } from "../data";

export default function Publications() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <SectionTitle
        titre="Publications"
        niveau="h1"
        chapeau="Articles, communications et travaux de recherche en réseaux et télécommunications."
      />
      <div className="mt-12">
        <PublicationList publications={publications} />
      </div>
    </section>
  );
}
