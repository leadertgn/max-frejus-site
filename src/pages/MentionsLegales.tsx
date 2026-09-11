import SectionTitle from "../components/SectionTitle";
import { profil } from "../data";

export default function MentionsLegales() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
      <SectionTitle
        titre="Mentions légales"
        niveau="h1"
        chapeau="Informations relatives à la publication et à la confidentialité de ce site."
      />

      <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-titre text-2xl text-nuit">
            Responsable de publication
          </h2>
          <div className="mt-5 space-y-2 leading-relaxed">
            <p>{profil.nom}</p>
            <p>{profil.titre}</p>
            <p>École Polytechnique d'Abomey-Calavi (EPAC)</p>
            <p>Université d'Abomey-Calavi (UAC), Bénin</p>
          </div>
          {/* TODO: à valider avec Dr SANYA pour l'hébergeur et la collecte de données */}
          <p className="mt-8 border-l-2 border-lumiere pl-4 text-sm text-encre">
            Hébergeur : informations à compléter après le choix de la solution
            de déploiement.
          </p>
        </div>

        <div>
          <h2 className="font-titre text-2xl text-nuit">
            Politique de confidentialité
          </h2>
          {/* TODO: à valider avec Dr SANYA pour l'hébergeur et la collecte de données */}
          <div className="mt-5 space-y-5 leading-relaxed">
            <p>
              En version actuelle, ce site présente des informations publiques
              et ne comporte pas de formulaire de contact ni d'outil de mesure
              d'audience configuré.
            </p>
            <p>
              Les données éventuellement collectées, leur finalité, leur durée
              de conservation et les modalités d'exercice des droits seront
              précisées avant l'ajout de tout service nécessitant une collecte.
            </p>
            <p className="text-sm text-encre/80">
              Hébergeur, responsable du traitement et adresse de contact : à
              confirmer avec Dr SANYA avant la mise en production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
