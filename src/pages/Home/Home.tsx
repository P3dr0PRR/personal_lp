import Menubg from "../../assets/personal.jpg";
import JDoe from "../../assets/Jdoe.png";
import Wpp from "../../assets/wpp.png";

import { Footer } from "../../components/Footer/Footer.tsx";

export function Home() {
  return (
    <>
      <section
        id="Home"
        className="min-h-screen w-full flex items-center justify-center relative"
      >
        <img
          src={Menubg}
          alt="Personal"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 flex flex-col min-h-[25vh] items-center justify-center gap-4 text-center py-32">
          <div className="flex flex-col items-center justify-center gap-4 text-center ">
            <img
              src={JDoe}
              alt="Jon Doe J"
              className="h-32 w-32 bg-transparent"
            />
            <h2 className="slideInTitle">
              Com foco e direção, você vai além do que imagina.
            </h2>
            <p className="slideInSubtitle">buscando direção ?</p>
            <h2 className="slideInTitle">Entre em Contato</h2>
            <p className="slideInSubtitle">
              Do primeiro treino ao resultado final, eu cuido de cada detalhe.
              Seu único trabalho é evoluir.
            </p>
            <button className="BTNSlinks flex items-center gap-2 bg-green-500 hover:bg-green-600 cursor-pointer">
              <img src={Wpp} alt="WhatsApp" className="h-6 w-6" />
              Atendimento via WhatsApp
            </button>
            <span className=" block h-0.5 bg-white w-[25%]"></span>
            <div className="flex flex-col items-center justify-center gap-4 text-center ">
              <h2>Acesse nosso Portfolio</h2>
              <button className="BTNSlinks">Portfolio</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
