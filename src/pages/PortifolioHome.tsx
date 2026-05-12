import Menubg from "../assets/personal.jpg";

export function PortifolioHome() {
    return (
         <section
        id="Portfolio"
        className="min-h-screen w-full flex items-center justify-center relative"
      >
        <img
          src={Menubg}
          alt="Personal"
       className="absolute inset-0 h-full w-full object-cover"
        />
        </section>
    )
}