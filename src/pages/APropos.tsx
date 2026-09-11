import ProfilCard from "../components/ProfilCard";
import SectionTitle from "../components/SectionTitle";
import { profil } from "../data";

export default function APropos() {
  const paragraphesBio = profil.bio.split("\n\n");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionTitle
          titre="À propos"
          niveau="h1"
          chapeau="Parcours, responsabilités et travaux de recherche de Max Fréjus O. SANYA."
        />

        <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <SectionTitle titre="Biographie" />
            <div className="mt-8 space-y-6 leading-relaxed">
              {paragraphesBio.map((paragraphe) => (
                <p key={paragraphe}>{paragraphe.replace(/\n/g, " ")}</p>
              ))}
            </div>
          </div>

          <div>
            <ProfilCard />
          </div>
        </div>
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <SectionTitle
            titre="Affiliations"
            chapeau="Établissements, laboratoires et réseaux scientifiques auxquels le parcours est associé."
          />

          <ul className="mt-10 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {profil.affiliations.map((affiliation, index) => (
              <li
                key={affiliation}
                className="grid grid-cols-[2.5rem_1fr] border-t border-petrole/20 pt-4"
              >
                <span className="font-titre text-sm text-lumiere">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-nuit">{affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
