import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ComboboxOptions,
  Combobox,
  ComboboxButton,
  Label,
  Transition,
  ComboboxInput,
  ComboboxOption,
} from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

const themes = [
  { id: 1, name: "Garden" },
  { id: 2, name: "Anime" },
  { id: 3, name: "Rainy field" },
  { id: 4, name: "Night room" },
  { id: 5, name: "Space" },
];

const Compobox = () => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(themes[0]);

  const filteredThemes =
    query === ""
      ? themes
      : themes.filter((theme) => {
          return theme.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mt-3 flex justify-center mb-10">
      <Combobox value={selected} onChange={(value) => setSelected(value)}>
        <div className="block">
          <Label className="text-white">Select wallpaper</Label>
          <div className="relative mt-1">
            <ComboboxInput
              className={clsx(
                "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              displayValue={(theme) => theme?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
              <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
            </ComboboxButton>
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
            {filteredThemes.map((theme) => (
              <ComboboxOption
                key={theme.id}
                value={theme}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">{theme.name}</div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
};

export default Compobox;
