import { ComboboxOption } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid"; // Ensure you import CheckIcon
import { Theme } from "./types";

interface ChildComboboxOptionProps {
  theme: Theme;
}

const ChildComboboxOption: React.FC<ChildComboboxOptionProps> = ({ theme }) => {
  return (
    <ComboboxOption
      key={theme.id}
      value={theme}
      className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
    >
      <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
      <div className="text-sm/6 text-white">{theme.name}</div>
    </ComboboxOption>
  );
};

export default ChildComboboxOption;
