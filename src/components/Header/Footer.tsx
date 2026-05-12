import Jhon from "../../assets/JhonDoe.png";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Youtube from "../../assets/youtube.png";

import Phone from "../../assets/phone.png";
import Mail from "../../assets/mail.png";
import Location from "../../assets/location.png";

export function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4 flex justify-between">
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
          <img src={Instagram} alt="Instagram" className="SocialMedias" />
          <img src={Facebook} alt="Facebook" className="SocialMedias" />
          <img src={Youtube} alt="YouTube" className="SocialMedias" />
        </div>
      </div>
      <div className="flex flex-col flex-1 border-x p-2 justify-center">
        <div className="flex items-center gap-4">
          <img src={Phone} alt="Phone" className="ContactIcons" />
          <span>(11) 99999-9999</span>
        </div>
        <span className="my-4 h-0.5 w-full bg-indigo-50"></span>
        <div className="flex items-center gap-4">
          <img src={Mail} alt="Email" className="ContactIcons" />
          <span>exemplo@dominio.com</span>
        </div>
        <span className="my-4 h-0.5 w-full bg-indigo-50"></span>
        <div className="flex items-center gap-4">
          <img src={Location} alt="Location" className="ContactIcons" />
          <span>GTA, San Andreas</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 border-x p-2">
        <h3 className="font-bold">Soluções</h3>
        <span className="block h-0.5 w-full bg-red-600 mb-2"></span>
        <ul className="list-disc list-inside text-left">
          <li>Programas de Treino Personalizado</li>
          <li>Planos de Hipertrofia</li>
          <li>Perda de Gordura e Definição</li>
          <li>Avaliação Física Completa</li>
          <li>Acompanhamento Online</li>
          <li>Consultoria de Performance</li>
        </ul>
      </div>
      <div className="flex flex-col flex-1 border-x p-2">
        <h3 className="font-bold">Sobre o Mim</h3>
        <span className="block h-0.5 w-full bg-red-600 mb-2"></span>
        <ul className="list-disc list-inside text-left">
          <li>Passo minha Metodologia de Treino</li>
          <li>Passo o resultados de Alunos</li>
          <li>Possuo Blog & Conteúdos</li>
          <li>Entre em contato</li>
        </ul>
      </div>
    </footer>
  );
}
