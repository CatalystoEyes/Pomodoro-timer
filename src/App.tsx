import { useTimer } from "react-timer-hook";
import {
  EditButton,
  SettingsButton,
  WorkButton,
} from "./components/Buttons/PomodoroButtons";
import Header from "./components/Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PomodoroTimer({ expiryTimestamp }: any) {
  const { seconds, minutes, isRunning, start, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });
  return (
    <div className="h-screen flex flex-col bg-[url('./assets/garden.png')] text-white bg-cover bg-center">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl">Pomodoro timer</h1>
        <div className="flex flex-row text-3xl mt-2 select-none">
          <WorkButton />
          <EditButton />
        </div>

        <h1 className="text-6xl">
          <span>{minutes}</span>:<span>{seconds}</span>
        </h1>
        <div className="flex select-none">
          {!isRunning ? (
            <button
              onClick={start}
              className="m-2 text-3xl bg-black rounded-2xl px-4 py-1 hover:bg-white hover:text-black transition-all"
            >
              Start
            </button>
          ) : (
            <button
              onClick={pause}
              className="m-2 text-3xl bg-black rounded-2xl px-4 py-1 hover:bg-white hover:text-black transition-all"
            >
              Pause
            </button>
          )}
          <button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 2700);
              restart(time);
            }}
            className=" hover:scale-105 transition-all"
          >
            <img src="/repeat.svg" alt="Repeat" className="w-9 m-1" />
          </button>
          <SettingsButton />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2700);
  return (
    <div>
      <PomodoroTimer expiryTimestamp={time} />
    </div>
  );
}
