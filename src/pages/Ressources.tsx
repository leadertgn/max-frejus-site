import SectionTitle from "../components/SectionTitle";
import { tutorials } from "../data";

function regrouperParCategorie() {
  const groupes = new Map<string, typeof tutorials>();

  for (const tutorial of tutorials) {
    const categorie = tutorial.categorie ?? "Autres ressources";
    const groupe = groupes.get(categorie) ?? [];
    groupe.push(tutorial);
    groupes.set(categorie, groupe);
  }

  return [...groupes.entries()];
}

export default function Ressources() {
  const tutorielsParCategorie = regrouperParCategorie();

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-16">
        <SectionTitle
          titre="Tutoriels"
          niveau="h1"
          chapeau={`${tutorials.length} tutoriels classés en ${new Set(tutorials.map((tutorial) => tutorial.categorie)).size} catégories, avec des supports PDF, fichiers de simulation et vidéos.`}
        />
      </section>

      <section className="border-t border-petrole/15">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
          <div className="space-y-10">
            {tutorielsParCategorie.map(([categorie, tutorielsCategorie]) => (
              <section key={categorie}>
                <h2 className="border-b border-petrole/20 pb-3 font-titre text-2xl text-petrole">
                  {categorie}
                </h2>
                <ul className="divide-y divide-petrole/15">
                  {tutorielsCategorie.map((tutorial) => (
                    <li key={tutorial.id} className="py-7 first:pt-6">
                      <h3 className="font-titre text-xl leading-snug text-nuit">
                        {tutorial.titre}
                      </h3>
                      {tutorial.description && (
                        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-encre">
                          {tutorial.description}
                        </p>
                      )}
                      <ul className="mt-4 space-y-2 text-sm">
                        {tutorial.liens.map((lien) => (
                          <li
                            key={lien.url}
                            className="flex flex-col gap-1 sm:flex-row sm:gap-3"
                          >
                            <a
                              href={lien.url}
                              target="_blank"
                              rel="noreferrer"
                              className="shrink-0 text-petrole underline decoration-lumiere underline-offset-4 hover:text-lumiere"
                            >
                              {lien.label}
                            </a>
                            <span className="hidden max-w-[34ch] truncate text-encre/70 sm:inline">
                              {lien.url}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
