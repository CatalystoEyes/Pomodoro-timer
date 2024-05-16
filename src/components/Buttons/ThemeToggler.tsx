import { Switch } from "@headlessui/react";
import { useState } from "react";

const ThemeToggler = () => {
  const [enabled, setEnabled] = useState(false);

  return (
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
  );
};

export default ThemeToggler;
