import Menubg from "../../assets/personal.jpg";
import { Hero } from "./Hero";

export function PortifolioHome() {
  return (
    <section
      id="Portfolio"
      className="w-full h-[500px] relative"
    >
      <img
        src={Menubg}
        alt="Personal"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
     <div className="absolute inset-0 z-10 flex items-center justify-start px-8">
  <Hero />
</div>
    </section>
  );
}