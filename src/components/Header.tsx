const Header = () => {
  return (
    <div className="flex justify-between select-none">
      <div className="m-5">
        <p className="text-5xl">Powed by</p>
        <p className="text-3xl">Catalysto</p>
      </div>
      <a href="https://github.com/CatalystoEyes/pomodoro-timer" target="_blank">
        <img src="/GitHub.svg" alt="GitHub" className="w-12 m-6" />
      </a>
    </div>
  );
};

export default Header;
