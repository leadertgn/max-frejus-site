import SectionTitle from "../components/SectionTitle";
import { projetsCommunautaires, soutien } from "../data";

export default function Projets() {
  const whatsapp = soutien.whatsapp.replace(/[^\d]/g, "");
  const projetsAvecDon = projetsCommunautaires.filter(
    (projet) => projet.don,
  ).length;

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <SectionTitle
          titre="Projets communautaires"
          niveau="h1"
          chapeau={`${projetsCommunautaires.length} projets menés avec les étudiants, dont ${projetsAvecDon} soutenus par des dons, autour du LiFi, des réseaux optiques et d'outils numériques.`}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projetsCommunautaires.map((projet) => (
            <article
              key={projet.titre}
              className="border border-petrole/15 p-5 transition-colors hover:border-petrole/35"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <h2 className="font-titre text-xl leading-snug text-nuit">
                    {projet.titre}
                  </h2>
                  {projet.don && (
                    <span className="bg-lumiere/10 px-2 py-1 text-xs text-petrole">
                      Soutenu par des dons
                    </span>
                  )}
                </div>
                <p className="mt-3 max-w-[70ch] leading-relaxed text-encre">
                  {projet.description.replace(/\n/g, " ")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <SectionTitle
            titre="Soutenir les projets"
            chapeau={soutien.message}
          />

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-titre text-xl text-nuit">Nous contacter</h2>
              <div className="mt-5 space-y-3 text-sm">
                <p>
                  <span className="text-encre/60">Courriel : </span>
                  <a
                    href={`mailto:${soutien.email}`}
                    className="text-petrole underline decoration-lumiere underline-offset-4 hover:text-lumiere"
                  >
                    {soutien.email}
                  </a>
                </p>
                <p>
                  <span className="text-encre/60">WhatsApp : </span>
                  <a
                    href={`https://wa.me/${whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-petrole underline decoration-lumiere underline-offset-4 hover:text-lumiere"
                  >
                    {soutien.whatsapp}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-titre text-xl text-nuit">Partenaires</h2>
              <ul className="mt-5 space-y-3 border-l border-petrole/25 pl-5 text-sm leading-relaxed">
                {soutien.partenaires.map((partenaire) => (
                  <li key={partenaire}>{partenaire}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
