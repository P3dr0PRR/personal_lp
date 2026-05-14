import JDchar from "../../assets/JDchar.png";

export function Sobre() {
  return (
    <section className="sections-appear sections mt-12">
      <div className="flex flex-col md:flex-row items-center justify-center rounded-md gap-8 m-4">
        <div className="flex flex-col space-y-4 flex-1">
          <h1>Quem está por trás da consultoria do ano</h1>
          <p className=" text-white">
            Me chamo JhonDoe, e sou o personal trainer por trás de uma das
            consultorias mais respeitadas em resultados reais. Minha
            especialidade é hipertrofia e recomposição corporal, unindo técnica,
            ciência e experiência prática para transformar corpos e
            mentalidades. Minha trajetória foi construída em anos de estudo
            contínuo, imersão em metodologias de treinamento e acompanhamento de
            alunos de diferentes países e realidades. Você
            está no lugar certo a consultoria que não vive de promessas, vive
            de entregas.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={JDchar}
            alt="JDchar"
            className="w-full h-full object-cover rounded-md border-1 border-gray-500"
          />
        </div>
      </div>
    </section>
  );
}
