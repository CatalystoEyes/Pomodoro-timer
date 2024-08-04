type Props = {
  closeModal: () => void;
};

const Buttons: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="mt-9 flex justify-between select-none">
      <button
        className="order-first border-2 rounded-xl py-1 px-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
        type="button"
      >
        Reset all
      </button>
      <div className="">
        <button
          className="mr-3 border-2 rounded-xl py-1 px-3 border-blue-400 bg-blue-400 text-white hover:bg-blue-500 hover:border-blue-500 transition-all"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
        <button className="bg-white rounded-xl border-2 border-white py-1 px-3 text-black hover:bg-stone-300 hover:border-stone-300 transition-all">
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Buttons;
