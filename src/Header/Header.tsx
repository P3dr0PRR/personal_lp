import Jhon from "../assets/JhonDoe.png";
import Menu from "../assets/menu.png";

import { useState } from "react";
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/50 backdrop-blur-md h-12.5 md:h-11 overflow-visible">
      {!isMenuOpen && (
        <div className="flex justify-center items-center h-full w-full md:justify-between p-4 pt-6">
          <img src={Jhon} alt="Jhon Doe" className="h-30 object-contain" />
          <div className="block md:hidden ">
            <img
              src={Menu}
              alt="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-white text-sm font-medium ml-4">
              Home
            </a>
            <a href="#" className="text-white text-sm font-medium ml-4">
              Portifolio
            </a>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="flex justify-center items-center h-full w-full md:justify-between p-4 pt-6">
          <img src={Jhon} alt="Jhon Doe" className="h-30 object-contain" />
          <div className="flex items-center justify-end gap-4 h-full w-full p-4">
            <a href="#" className="text-white text-sm font-medium mb-2">
              Home
            </a>
            <a href="#" className="text-white text-sm font-medium mb-2">
              Portifolio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
