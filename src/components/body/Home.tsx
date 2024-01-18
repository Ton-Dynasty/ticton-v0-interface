import { Button } from "@/components/ui/button";
import "./Home.css";

const Home = () => {
  const links = [
    { text: "Document", href: "/" },
    { text: "Mini APP", href: "/" },
    { text: "Learn more", href: "/" },
  ];
  return (
    <div className="flex flex-col w-full h-[470px] justify-center items-center gap-9">
      <span className="py-0 text-center baloo-da font-bold title text-transparent bg-clip-text text-4xl md:text-6xl font-baloo-da">
        Tick-Tock, Tic Ton.
      </span>
      <span className="font-baloo-da text-center text-slate-300 w-full max-w-screen-md font-normal text-2xl md:text-3xl">
        Arbitrage and integrate with the leading decentralized oracle on TON.
      </span>
      <div className="font-baloo flex justify-center items-center gap-4">
        {links.map(({ text, href }) => (
          <Button
            variant={"home"}
            className="p-0.5"
            onClick={() => {
              window.open(href, "_blank");
            }}
          >
            <div className="flex w-full bg-slate-900 rounded-full px-3 py-1">
              <span className="p-0 m-0 w-full bg-gradient-to-br bg-clip-text from-[#93C5FD] to-[#8F96E6] text-transparent text-sm md:text-xl">
                {text}
              </span>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Home;
