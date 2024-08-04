import clsx from "clsx";
import { ChangeEvent, forwardRef } from "react";
import { ComboboxInput } from "@headlessui/react";
import { Theme } from "./types";

interface ComboboxInputProps {
  className?: string;
  displayValue?: (theme: Theme) => string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ className, displayValue = () => "", onChange, ...rest }, ref) => {
    return (
      <ComboboxInput
        ref={ref}
        className={clsx(
          "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
          className
        )}
        displayValue={displayValue}
        onChange={onChange}
        {...rest}
      />
    );
  }
);

export default Input;
