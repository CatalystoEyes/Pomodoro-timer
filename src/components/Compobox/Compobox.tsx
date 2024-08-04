import {
  ComboboxOptions,
  Combobox,
  Label,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import { Theme } from "./types";
import ChildComboboxOption from "./ChildComboboxOption";
import Button from "./Button";
import Input from "./Input";

interface CompoboxProps {
  onThemeSelect: (theme: Theme) => void;
}

const themes: Theme[] = [
  { id: 1, name: "Garden" },
  { id: 2, name: "Anime" },
  { id: 3, name: "Rainy field" },
  { id: 4, name: "Night room" },
  { id: 5, name: "Space" },
];

const Compobox: React.FC<CompoboxProps> = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(themes[0]);

  const filteredThemes =
    query === ""
      ? themes
      : themes.filter(theme => {
          return theme.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mt-3 flex justify-center mb-10">
      <Combobox value={selected} onChange={value => setSelected(value)}>
        <div className="block">
          <Label className="text-white">Select wallpaper</Label>
          <div className="relative mt-1">
            <Input
              displayValue={theme => theme?.name}
              onChange={event => setQuery(event.target.value)}
            />
            <Button />
          </div>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className="w-[var(--input-width)] rounded-xl border border-white/5 bg-stone-950 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredThemes.map(theme => (
              <ChildComboboxOption theme={theme} />
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default Compobox;
