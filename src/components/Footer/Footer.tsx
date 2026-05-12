import Jhon from "../../assets/JhonDoe.png";

import { Contatos, SocialMedias, Solucoes, SobreMim } from "./Footer.ts";

export function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

      <div className="flex flex-col flex-1 border-x p-2 items-center">
        <img
          src={Jhon}
          alt="Jhon Doe"
          className="h-22 object-contain bg-transparent"
        />
        <p className="text-center">
          Bem-vindo ao seu novo começo. Minha missão é projetar o corpo que você
          sempre imaginou.
        </p>

        <div className="flex gap-4 mt-4 justify-center">
          {Object.values(SocialMedias).map(
            (item: { src: string; alt: string }) => (
              <img
                key={item.alt}
                src={item.src}
                alt={item.alt}
                className="SocialMedias"
              />
            ),
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1 border-x p-2 justify-center">
        {Object.values(Contatos).map(
          (item: { src: string; alt: string; value: string }) => (
            <div key={item.alt} className="flex items-center gap-4">
              <img src={item.src} alt={item.alt} className="ContactIcons" />
              <span>{item.value}</span>
            </div>
          ),
        )}
      </div>

      <div className="flex flex-col flex-1 border-x p-2">
        <h3 className="font-bold">Soluções</h3>
        <span className="block h-0.5 w-full bg-red-600 mb-2"></span>
        {Object.values(Solucoes).map((item: { title: string }) => (
          <div>
            <ul className="list-disc list-inside text-left">
              <li>{item.title}</li>
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col flex-1 border-x p-2">
        <h3 className="font-bold">Sobre o Mim</h3>
        <span className="block h-0.5 w-full bg-red-600 mb-2"></span>
        {Object.values(SobreMim).map((item: { title: string }) => (
          <ul className="list-disc list-inside text-left">
            <li>{item.title}</li>
          </ul>
        ))}
      </div>
    </footer>
  );
}
