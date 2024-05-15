import Header from "./components/Header";
import Setting from "./components/Settings";

function App() {
  return (
    <div className="h-screen flex flex-col bg-[url('./assets/garden.png')] text-white bg-cover bg-center">
      <Header />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl">Pomodoro timer</h1>
        <div className="flex flex-row text-3xl mt-2 select-none">
          <button className="transition-all hover:scale-105 m-2 py-1 px-2 bg-white rounded-3xl text-black w-30.5 flex items-center">
            <img src="/work.svg" alt="" className="ml-1 mr-1 w-10" />
            Work
          </button>
          <button className="transition-all hover:scale-105 m-2 py-1 px-2 border-2 border-white rounded-3xl w-30.5 flex items-center">
            <img src="/edit.svg" alt="" className="ml-1 mr-1 w-8" />
            Edit
          </button>
        </div>

        <h1 className="text-6xl">50:00</h1>
        <div className="flex select-none">
          <button className="m-2 text-3xl bg-black rounded-2xl px-4 py-1 hover:bg-white hover:text-black transition-all">
            Start
          </button>
          <button className=" hover:scale-105 transition-all">
            <img src="/repeat.svg" alt="Repeat" className="w-9 m-1" />
          </button>
          <button className="ml-1 hover:scale-105 transition-all">
            <Setting />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
