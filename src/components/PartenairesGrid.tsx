import { useState } from "react";
import { partenaires } from "../data";

const LOGO_PLACEHOLDER =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=640&q=80";

export default function PartenairesGrid() {
  return (
    <div className="marquee-zone overflow-hidden" aria-label="Partenaires">
      <div className="marquee-piste">
        <div className="marquee-groupe" role="list">
          {partenaires.map((partenaire) => (
            <div key={partenaire.nom} role="listitem" className="marquee-logo">
              <LogoPartenaire partenaire={partenaire} />
            </div>
          ))}
        </div>
        <div className="marquee-groupe" role="list" aria-hidden="true">
          {partenaires.map((partenaire) => (
            <div key={partenaire.nom} role="listitem" className="marquee-logo">
              <LogoPartenaire partenaire={partenaire} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoPartenaire({
  partenaire,
}: {
  partenaire: (typeof partenaires)[number];
}) {
  const [source, setSource] = useState(partenaire.logo);

  const logo = (
    <img
      src={source}
      alt={`Logo ${partenaire.nom}`}
      onError={() => setSource(LOGO_PLACEHOLDER)}
      className="h-20 w-full rounded-[5px] border border-petrole/15 object-contain grayscale transition duration-300 hover:scale-105 hover:grayscale-0"
    />
  );

  return partenaire.lien ? (
    <a
      href={partenaire.lien}
      target="_blank"
      rel="noreferrer"
      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lumiere"
    >
      {logo}
    </a>
  ) : (
    logo
  );
}
