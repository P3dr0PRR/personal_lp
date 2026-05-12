import { Link } from "react-router-dom";

import Jhon from "../../assets/JhonDoe.png";
import Menu from "../../assets/menubg.png";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logo = (
    <img
      src={Jhon}
      alt="Jhon Doe"
      className="h-22 object-contain bg-transparent"
    />
  );
  const links = (
    <>
      <Link to="/" className="NavBTNS">
        Home
      </Link>
      <Link to="/portfolio" className="NavBTNS">
        Portfolio
      </Link>
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
          <nav className="hidden md:flex items-center p-4 gap-4 h-full w-full justify-end">
            {links}
          </nav>
        </div>
      )}

      {isMenuOpen && (
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between p-4 pt-6 w-full">
          {logo}
          <nav className="flex items-center justify-center md:justify-end gap-4 h-full w-full p-4">
            {links}
          </nav>
        </div>
      )}
    </header>
  );
}
