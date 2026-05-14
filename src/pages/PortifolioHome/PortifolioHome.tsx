import Menubg from "../../assets/personal.jpg";
import { Hero } from "./Hero";
import { Projetos } from "./Projetos/Projetos";
import {Sobre} from "./Sobre";
import { Planos } from "./Planos";

export function PortifolioHome() {
  return (
    <section id="Portfolio" className=" bg-linear-to-b from-gray-900 via-gray-700 to-gray-900">
      <div className="w-full h-[500px] relative">
        <img
          src={Menubg}
          alt="Personal"
          className="absolute inset-0 h-full w-full object-cover z-0"
        />
        <div className="absolute inset-0 z-10 flex items-center justify-start px-8">
          <Hero />
        </div>
      </div>
      <div className="">
        <Projetos />
        <Sobre />
        <Planos />
      </div>
    </section>
  );
}
