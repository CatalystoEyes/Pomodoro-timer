import { ComboboxButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Button = () => {
  return (
    <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
      <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
    </ComboboxButton>
  );
};

export default Button;
