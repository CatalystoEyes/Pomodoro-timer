import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  ComboboxButton,
  Transition,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { Switch } from "@headlessui/react";
import { Description, Field, Input, Label } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const people = [
  { id: 1, name: "Garden" },
  { id: 2, name: "Anime" },
  { id: 3, name: "Rainy field" },
  { id: 4, name: "Night room" },
  { id: 5, name: "Space" },
];

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(people[0]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <div className="transform rotate-90">
        <button type="button" onClick={openModal}>
          <img src="/settings.svg" alt="Settings" className="w-10 m-1" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between items-center mb-8">
                    <DialogTitle
                      as="h3"
                      className="text-3xl font-medium leading-6 text-white text-center"
                    >
                      General setting
                    </DialogTitle>
                    <button type="button" className="w-5" onClick={closeModal}>
                      <img src="/close.svg" alt="" />
                    </button>
                  </div>

                  <div className="mt-2 flex w-3/4 m-auto">
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
                  </div>
                  <div className="mt-3 flex justify-center">
                    <Combobox
                      value={selected}
                      onChange={(value) => setSelected(value)}
                    >
                      <div className="block">
                        <Label className="text-white">Select wallpaper</Label>
                        <div className="relative">
                          <ComboboxInput
                            className={clsx(
                              "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
                              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                            )}
                            displayValue={(person) => person?.name}
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
                          {filteredPeople.map((person) => (
                            <ComboboxOption
                              key={person.id}
                              value={person}
                              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                            >
                              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
                              <div className="text-sm/6 text-white">
                                {person.name}
                              </div>
                            </ComboboxOption>
                          ))}
                        </ComboboxOptions>
                      </Transition>
                    </Combobox>
                  </div>
                  <div className="py-3 flex justify-center mt-3 mb-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative mr-2 flex h-7 w-14 cursor-pointer rounded-full bg-white/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                      />
                    </Switch>
                    <p className="text-white text-lg">Color background</p>
                  </div>
                  <div className="mt-4 flex justify-between	select-none">
                    <button className="order-first border-2 rounded-xl py-1 px-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all">
                      Reset all
                    </button>
                    <div className="">
                      <button
                        className="mr-3 border-2 rounded-xl py-1 px-3 border-blue-400 bg-blue-400 text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
                        type="button"
                        onClick={closeModal}
                      >
                        <button>Close</button>
                      </button>
                      <button className="bg-white rounded-xl border-2 border-white py-1 px-3 text-black hover:bg-stone-300 hover:border-stone-300 transition-all">
                        Save changes
                      </button>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
