import { useEffect, useRef, useState } from "react";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export default function Select({ id, value, options, onChange }: SelectProps) {
  const [ouvert, setOuvert] = useState(false);
  const [optionActive, setOptionActive] = useState(() =>
    Math.max(
      options.findIndex((option) => option.value === value),
      0,
    ),
  );
  const selectRef = useRef<HTMLDivElement>(null);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const optionSelectionnee = options.find((option) => option.value === value);

  useEffect(() => {
    const fermerSiClicExterieur = (event: MouseEvent) => {
      if (!selectRef.current?.contains(event.target as Node)) {
        setOuvert(false);
      }
    };

    document.addEventListener("mousedown", fermerSiClicExterieur);
    return () =>
      document.removeEventListener("mousedown", fermerSiClicExterieur);
  }, []);

  const choisirOption = (index: number) => {
    const option = options[index];
    if (!option) return;

    onChange(option.value);
    setOptionActive(index);
    setOuvert(false);
    boutonRef.current?.focus();
  };

  const ouvrirOuFermer = () => {
    if (!ouvert) {
      const indexSelectionne = options.findIndex(
        (option) => option.value === value,
      );
      setOptionActive(Math.max(indexSelectionne, 0));
    }
    setOuvert((estOuvert) => !estOuvert);
  };

  const gererClavier = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!ouvert) {
        setOuvert(true);
        return;
      }

      const direction = event.key === "ArrowDown" ? 1 : -1;
      setOptionActive(
        (index) => (index + direction + options.length) % options.length,
      );
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (ouvert) {
        choisirOption(optionActive);
      } else {
        setOuvert(true);
      }
      return;
    }

    if (event.key === "Escape" && ouvert) {
      event.preventDefault();
      setOuvert(false);
      return;
    }

    if (event.key === "Home" && ouvert) {
      event.preventDefault();
      setOptionActive(0);
    }

    if (event.key === "End" && ouvert) {
      event.preventDefault();
      setOptionActive(options.length - 1);
    }
  };

  return (
    <div ref={selectRef} className="relative">
      <button
        ref={boutonRef}
        id={id}
        type="button"
        role="combobox"
        aria-controls={`${id}-options`}
        aria-expanded={ouvert}
        aria-haspopup="listbox"
        aria-activedescendant={
          ouvert ? `${id}-option-${optionActive}` : undefined
        }
        onClick={ouvrirOuFermer}
        onKeyDown={gererClavier}
        className="flex w-full items-center justify-between gap-4 border border-petrole/20 bg-transparent px-3 py-2 text-left text-petrole transition-colors hover:border-petrole/50 focus:outline-none"
      >
        <span>{optionSelectionnee?.label ?? ""}</span>
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`h-2 w-3 shrink-0 fill-none stroke-current stroke-2 transition-transform ${ouvert ? "rotate-180" : ""}`}
        >
          <path d="m1 1 5 5 5-5" />
        </svg>
      </button>

      {ouvert && (
        <ul
          id={`${id}-options`}
          role="listbox"
          aria-labelledby={id}
          className="absolute left-0 right-0 top-full z-40 mt-1 max-h-60 overflow-auto border border-petrole/20 bg-papier py-1 shadow-lg"
        >
          {options.map((option, index) => (
            <li
              id={`${id}-option-${index}`}
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onMouseDown={(event) => event.preventDefault()}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                choisirOption(index);
              }}
              onMouseEnter={() => setOptionActive(index)}
              className={`cursor-pointer px-3 py-2 text-sm transition-colors hover:bg-petrole/10 ${
                option.value === value ? "text-lumiere" : "text-encre"
              } ${optionActive === index ? "bg-petrole/5" : ""}`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
