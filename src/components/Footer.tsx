import { profil } from "../data";

/** Pied de page : contact rapide, sur le fond sombre du héro pour fermer la page. */
export default function Footer() {
  return (
    <footer className="bg-nuit text-papier">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="font-titre text-xl">{profil.nom}</p>
            <p className="mt-1 max-w-[48ch] text-sm text-papier/70">{profil.titre}</p>
          </div>

          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-papier/50">Courriel</dt>
              {profil.email.map((adresse) => (
                <dd key={adresse}>
                  <a
                    href={`mailto:${adresse}`}
                    className="underline decoration-lumiere decoration-1 underline-offset-4 hover:text-lumiere"
                  >
                    {adresse}
                  </a>
                </dd>
              ))}
            </div>

            {profil.telephone && (
              <div>
                <dt className="text-papier/50">Téléphone</dt>
                <dd>
                  <a
                    href={`tel:${profil.telephone.replace(/[^+\d]/g, "")}`}
                    className="hover:text-lumiere"
                  >
                    {profil.telephone}
                  </a>
                </dd>
              </div>
            )}

            {profil.bureau && (
              <div>
                <dt className="text-papier/50">Bureau</dt>
                <dd className="max-w-[40ch] text-papier/90">{profil.bureau}</dd>
              </div>
            )}
          </dl>
        </div>

        <p className="mt-12 border-t border-papier/15 pt-6 text-xs text-papier/50">
          © {new Date().getFullYear()} {profil.nom}
        </p>
      </div>
    </footer>
  );
}
