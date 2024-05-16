import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export const WorkMinutesInput = () => {
  return (
    <Field className="mx-3">
      <Label className=" text-white text-lg">Work</Label>
      <Input
        className={clsx(
          "mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
      <Label className="text-sm/6 text-white">minutes</Label>
    </Field>
  );
};

export const PauseMinutesInput = () => {
  return (
    <Field className="mx-3">
      <Label className=" text-white text-lg" text-lg>
        Pause
      </Label>
      <Input
        className={clsx(
          "mt-1 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        )}
      />
      <Label className="text-sm/6 text-white">minutes</Label>
    </Field>
  );
};
