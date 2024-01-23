import { Button } from "./ui/button";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <div className=" sticky flex w-full items-center justify-between px-3 py-3">
      <div className="flex items-center">
        <img className=" px-3" src={logo} />
        <span className="bg-gradient-to-b from-blue-300 to-indigo-400  bg-clip-text font-monda text-xl font-normal text-transparent">
          TICTON
        </span>
      </div>
      <div className="hidden gap-5 font-baloo text-[20px] text-[#CBD5E1] lg:flex">
        <a href="#" target="_blank">
          What is TICTON?
        </a>
        <a href="https://ton-dynasty.github.io/ticton-doc/" target="_blank">
          Document
        </a>
        <a href="https://t.me/tictonchat" target="_blank">
          Community
        </a>
      </div>
      <Button variant={"launch"} className="h-10 px-4 py-2">
        Launch App
      </Button>
    </div>
  );
}

export default NavBar;
