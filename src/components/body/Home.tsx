import { Button } from "@/components/ui/button";
import TicTonLogo from "../../assets/logo.svg";

const Home = () => {
  const links = [
    { text: "Document", href: "#" },
    { text: "Mini APP", href: "#" },
    { text: "Learn more", href: "#" },
  ];
  return (
    <section className="flex h-[50rem] w-full flex-col items-center justify-center gap-9 md:h-screen">
      <img src={TicTonLogo} className=" m-3 h-28 w-28 rounded-full p-1"></img>
      <span className="title-gradient bg-clip-text py-0 text-center font-baloo-da text-4xl font-bold text-transparent md:text-6xl">
        Tick-Tock, Tic Ton.
      </span>
      <span className="w-full max-w-screen-md text-center font-baloo-da text-2xl font-normal text-slate-300 md:text-3xl">
        Arbitrage and integrate with the leading decentralized oracle on TON.
      </span>
      <div className="flex items-center justify-center gap-4 font-baloo">
        {links.map(({ text, href }) => (
          <Button
            variant={"home"}
            className="p-0.5"
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <div className="flex w-full rounded-full bg-slate-900 px-3 py-1">
              <span className="m-0 w-full bg-gradient-to-br from-[#93C5FD] to-[#8F96E6] bg-clip-text p-0 text-sm text-transparent md:text-xl">
                {text}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Home;
