import Mensal from "../../assets/Mensal.png";
import Semestral from "../../assets/Semestral.png";
import Anual from "../../assets/Anual.png";

export function Planos() {
  return (
    <section className="sections-appear sections mt-12">
      <div className="conteudo space-y-3 ">
        <p className="font-bold text-xl">Planos acessíveis</p>
        <h2 >
          Escolha o plano ideal para o seu momento e comece agora a treinar com
          a consultoria eleita a melhor do ano.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="h-full">
            <div className="border rounded-sm shadow-md h-full flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={Mensal}
                  alt="Plano Mensal"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold">Plano Mensal</h3>
                <p className="text-gray-300 text-sm">
                  Perfeito para quem quer resultados consistentes
                </p>
                <p className="font-semibold text-red-500">Valor x por mês</p>
                <p className="text-gray-300 text-sm">
                  Receba treinos atualizados todos os meses, ajustes semanais e
                  acompanhamento direto para garantir sua evolução contínua.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="border rounded-sm shadow-md h-full flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={Semestral}
                  alt="Plano Semestral"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold">Plano Semestral</h3>
                <p className="text-gray-300 text-sm">
                  Compromisso com a evolução, com mais economia
                </p>
                <p className="font-semibold text-red-500">
                  Valor x por semestre
                </p>
                <p className="text-gray-300 text-sm">
                  O plano semestral é a escolha ideal para quem quer abraçar uma
                  jornada completa de transformação. Com 6 meses de
                  acompanhamento estruturado, você recebe planejamento
                  evolutivo, treinos periodizados e suporte contínuo —
                  garantindo constância e resultados sólidos.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full">
            <div className="border rounded-sm shadow-md h-full flex flex-col">
              <div className="w-full aspect-[3/4] overflow-hidden">
                <img
                  src={Anual}
                  alt="Plano Anual"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold">Plano Anual</h3>
                <p className="text-gray-300 text-sm">
                  Transformação completa, suporte total
                </p>
                <p className="font-semibold text-red-500">Valor x por ano</p>
                <p className="text-gray-300 text-sm">
                  O plano anual oferece o máximo em personalização. É pensado
                  para quem quer comprometer-se com a própria melhor versão por
                  12 meses, incluindo ajustes ilimitados, acompanhamento
                  próximo, evolução planejada e um método que respeita sua
                  rotina, corpo e individualidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
