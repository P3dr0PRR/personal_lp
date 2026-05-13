import { useState } from "react";
import { ProjetosData } from "./projetosData";

import chevronR from "../../assets/chevron_right.png";
import chevronL from "../../assets/chevron_left.png";

export function Projetos() {
  const [courrentProjects, setCourrentProjects] = useState(0);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center rounded-md gap-8 m-4">
        <h1>A consultoria referência em resultados reais</h1>
        <h3 className="text-red-600 bg-black/50 rounded-md p-4">
          Transformações construídas com método, estratégia e acompanhamento de
          verdade
        </h3>
        <span className=" block h-0.5 bg-[rgb(186,230,253)]"></span>
      </div>
      <div className="flex items-center justify-center gap-4">
          <div className="py-6 bg-red-800 rounded-l-lg hover:scale-110 transition-transform duration-300">
             <img
          src={chevronL}
          alt="Chevron Left"
          onClick={() =>
            setCourrentProjects(
              courrentProjects === 0 ? 2 : courrentProjects - 1,
            )
          }
        />
       
          </div>
       
        <div className="flex items-center justify-center gap-4">
          {Object.values(ProjetosData)
            .slice(courrentProjects, courrentProjects + 3)
            .map((item: { src: string; alt: string }) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className="w-64 h-64 object-cover rounded-md"
              />
            ))}

          <div className="py-6 bg-red-800 rounded-r-lg hover:scale-110 transition-transform duration-300">
            <img
              src={chevronR}
              alt="Chevron Right"
              onClick={() =>
                setCourrentProjects(
                  courrentProjects === 2 ? 0 : courrentProjects + 1,
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
