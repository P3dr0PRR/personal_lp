import Jhon from "../assets/JhonDoe.png";
import Menu from "../assets/menu.png";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = (
    <img src={Jhon} alt="Jhon Doe" className="h-22 object-contain" />
  );
  const links = (
    <>
      <a href="#" className="NavBTNS">
        Home
      </a>
      <a href="#" className="NavBTNS">
        Portifolio
      </a>
    </>
  );

  return (
    <header
      className={`bg-black/50 backdrop-blur-md overflow-hidden fixed top-0 left-0 w-full z-50 ${isMenuOpen ? "h-auto" : "h-22"}`}
    >
      {!isMenuOpen && (
        <div className="flex justify-center items-center w-full md:justify-between h-22">
          {logo}
          <div className="block md:hidden">
            <img
              src={Menu}
              alt="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className="hidden md:flex items-center p-4 gap-4 h-full w-full justify-end">
            {links}
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4 pt-6 w-full">
          {logo}
          <div className="flex items-center justify-center md:justify-end gap-4 h-full w-full p-4">
            {links}
          </div>
        </div>
      )}
    </header>
  );
}