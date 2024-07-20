import Setting from "../Settings";

export const WorkButton = () => {
  return (
    <button className="transition-all hover:scale-105 m-2 py-1 px-2 bg-white rounded-3xl text-black w-30.5 flex items-center">
      <img src="/work.svg" alt="" className="ml-1 mr-1 w-10" />
      Work
    </button>
  );
};

export const RestButton = () => {
  return (
    <div>
      <button className="transition-all hover:scale-105 m-2 py-1 px-2 border-2 border-white rounded-3xl w-30.5 flex items-center">
        <img src="/edit.svg" alt="" className="ml-1 mr-1 w-8" />
        Rest
      </button>
    </div>
  );
};


export const SettingsButton = () => {
  return (
    <button className="ml-1 hover:scale-105 transition-all">
      <Setting />
    </button>
  );
};
