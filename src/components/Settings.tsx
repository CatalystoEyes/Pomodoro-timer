import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import Compobox from "./Compobox";
import { PauseMinutesInput, WorkMinutesInput } from "./Forms/MinutesInput";

export default function Setting() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-dark border-stone-600 border-2 p-6 text-left align-middle shadow-xl transition-all">
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
                    <WorkMinutesInput />
                    <PauseMinutesInput />
                  </div>
                  <Compobox />
                  <div className="mt-9 flex justify-between	select-none">
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
