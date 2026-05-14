import Mensal from "../../assets/Mensal.png";
import Semestral from "../../assets/Semestral.png";
import Anual from "../../assets/Anual.png";

export function Message() {
  return (
    <section className="sections-appear sections flex flex-col space-y-4 mt-12">
      <h1 className="text-3xl font-bold text-center">
        Se você quer emagrecer, definir e evoluir com método, acompanhamento e
        reconhecimento nacional, o próximo passo é simples.
      </h1>
      <a
        href="#"
        className="cursor-pointer bg-lime-400 hover:scale-110 transition-transform duration-300 rounded-md mx-12 p-6 text-center font-bold text-lg text-gray-900"
      >
        Quero fazer parte do time
      </a>
      <div className="flex items-start">
        <div className="flex items-center">
          <img src={Mensal} alt="Mensal" className=" hover:scale-110 transition-transform duration-300rounded-full w-8 h-8 object-cover" />
          <img src={Semestral} alt="Semestral" className=" hover:scale-110 transition-transform duration-300 rounded-full w-8 h-8 object-cover" />
          <img src={Anual} alt="Anual" className=" hover:scale-110 transition-transform duration-300 rounded-full w-8 h-8 object-cover" />
        </div>
        <p className="text-gray-300">+ de x alunos felizes</p>
      </div>
    </section>
  );
}
