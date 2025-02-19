import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ handleClickItem }: { handleClickItem: () => void }) => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map((item) => (
        <li
          className="text-neutral-400 hover:text-white font-generalsans max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
          key={item.name}
          onClick={handleClickItem}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex items-center justify-between py-5 sm:px-10 px-5">
          <a
            href="https://cflinchbaugh.github.io/portfolio-v2/"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
            target="_blank"
          >
            Chris
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              alt="menu-toggle"
              className="h-6 w-6"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems handleClickItem={() => setIsOpen(false)} />
          </nav>
        </div>
      </div>

      <div
        className={`
        absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block
        ${isOpen ? "max-h-screen" : "max-h-0"}`}
      >
        <nav className="p-5">
          <NavItems handleClickItem={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
