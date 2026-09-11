import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { profil } from "../data";
import { navigation } from "../navigation";

/**
 * Barre de navigation. Le lien actif est marqué par un filet lumière sous le
 * libellé plutôt que par un fond coloré, pour rester dans le registre du trait.
 */
export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [defile, setDefile] = useState(false);

  useEffect(() => {
    const actualiserDefilement = () => setDefile(window.scrollY > 8);
    actualiserDefilement();
    window.addEventListener("scroll", actualiserDefilement, { passive: true });

    return () => window.removeEventListener("scroll", actualiserDefilement);
  }, []);

  const styleLien = ({ isActive }: { isActive: boolean }) =>
    [
      "border-b-2 py-1 text-sm transition-colors",
      isActive
        ? "border-lumiere text-petrole"
        : "border-transparent text-encre hover:text-petrole",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-petrole/15 bg-papier transition-shadow duration-200 ${
        defile ? "bg-papier/95 shadow-sm backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-5 lg:px-10">
        <NavLink to="/" className="font-titre text-lg leading-tight text-nuit">
          {profil.nom}
        </NavLink>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navigation.map((page) => (
              <li key={page.chemin}>
                <NavLink
                  to={page.chemin}
                  end={page.chemin === "/"}
                  className={styleLien}
                >
                  {page.libelle}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOuvert(!menuOuvert)}
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          className="text-petrole lg:hidden"
        >
          {menuOuvert ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">
            {menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
          </span>
        </button>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Navigation principale"
        aria-hidden={!menuOuvert}
        className={`menu-mobile border-t border-petrole/15 lg:hidden ${
          menuOuvert ? "menu-mobile-ouvert" : "menu-mobile-ferme"
        }`}
      >
        <ul className="mx-auto max-w-6xl px-6 py-2">
          {navigation.map((page) => (
            <li key={page.chemin}>
              <NavLink
                to={page.chemin}
                end={page.chemin === "/"}
                onClick={() => setMenuOuvert(false)}
                className={styleLien}
              >
                <span className="block py-2">{page.libelle}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
