import { useState, useEffect } from "react";
import { ProjetosData } from "./projetosData";

import chevronR from "../../../assets/chevron_right.png";
import chevronL from "../../../assets/chevron_left.png";

export function Projetos() {
  const [courrentProjects, setCourrentProjects] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="sections-appear sections">
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
                courrentProjects === 0
                  ? Object.values(ProjetosData).length - itemsPerPage
                  : courrentProjects - 1,
              )
            }
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          {Object.values(ProjetosData)
            .slice(courrentProjects, courrentProjects + itemsPerPage)
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
                  courrentProjects ===
                    Object.values(ProjetosData).length - itemsPerPage
                    ? 0
                    : courrentProjects + 1,
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
