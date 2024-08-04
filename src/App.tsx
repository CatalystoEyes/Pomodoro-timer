import PomodoroTimer from "./components/Timer";

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 2701);

  return (
    <div>
      <PomodoroTimer expiryTimestamp={time} />
    </div>
  );
}
