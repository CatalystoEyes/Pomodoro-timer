import { DialogTitle } from "@headlessui/react";
import { PauseMinutesInput, WorkMinutesInput } from "../Forms/MinutesInput.tsx";
import Compobox from "../Compobox/Compobox.tsx";
import Buttons from "./Buttons.tsx";

type Props = {
  closeModal: () => void;
};

const Panel: React.FC<Props> = ({ closeModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <DialogTitle
          as="h3"
          className="text-3xl font-medium leading-6 text-white text-center"
        >
          General setting
        </DialogTitle>
        <button type="button" className="w-5" onClick={closeModal}>
          <img src="/close.svg" alt="Close" />
        </button>
      </div>

      <div className="mt-2 flex w-3/4 m-auto">
        <WorkMinutesInput />
        <PauseMinutesInput />
      </div>
      <Compobox />
      <Buttons closeModal={closeModal} />
    </div>
  );
};

export default Panel;
