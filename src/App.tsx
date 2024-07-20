import { useState, useEffect, useRef } from 'react';
import {
  RestButton,
  SettingsButton,
  WorkButton,
} from './components/Buttons/PomodoroButtons';
import Header from './components/Header';

interface ITimeStampProps {
  expiryTimestamp: Date;
}

function PomodoroTimer({ expiryTimestamp }: ITimeStampProps) {
  const [remainingTime, setRemainingTime] = useState<number>(
    (expiryTimestamp.getTime() - new Date().getTime()) / 1000
  );
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    setIsRunning(true);
  };

  const pause = () => {
    setIsRunning(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const restart = () => {
    const newExpiryTimestamp = new Date();
    newExpiryTimestamp.setSeconds(newExpiryTimestamp.getSeconds() + 2700); 
    setIsRunning(true);
    setRemainingTime((newExpiryTimestamp.getTime() - new Date().getTime()) / 1000);
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setRemainingTime((prevRemainingTime) => {
          if (prevRemainingTime <= 1) {
            clearInterval(timerRef.current!);
            setIsRunning(false);
            return 0;
          }
          return prevRemainingTime - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);

  return (
    <div className="h-screen flex flex-col bg-[url('./assets/garden.png')] text-white bg-cover bg-center">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl select-none cursor-default">Pomodoro timer</h1>
        <div className="flex flex-row text-3xl mt-2 select-none">
          <WorkButton />
          <RestButton />
        </div>

        <h1 className="text-6xl select-none cursor-default">
          <span>{String(minutes).padStart(2, '0')}</span>:
          <span>{String(seconds).padStart(2, '0')}</span>
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
            onClick={restart}
            className="hover:scale-105 transition-all"
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
  time.setSeconds(time.getSeconds() + 2701);
  return (
    <div>
      <PomodoroTimer expiryTimestamp={time} />
    </div>
  );
}
