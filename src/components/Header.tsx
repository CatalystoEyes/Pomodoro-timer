import { shell } from '@tauri-apps/api';

const openExternalLink = async(url: string) => {
  try {
    await shell.open(url);
  } catch (error) {
    console.error('Failed to open URL:', error);
  }
}

const Header = () => {
  return (
    <div className="flex justify-between select-none">
      <div className="m-5 cursor-default">
        <p className="text-5xl">Powed by</p>
        <p className="text-3xl">Catalysto</p>
      </div>
      <button onClick={() => openExternalLink("https://github.com/CatalystoEyes/pomodoro-timer")}>
        <img src="/GitHub.svg" alt="GitHub" className="w-12 m-6" />
      </button>
    </div>
  );
};

export default Header;
