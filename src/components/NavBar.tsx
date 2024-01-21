import { LaunchButton } from "./ui/LaunchButton";
import logo from "../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <div className=" sticky flex w-full items-center justify-between px-3 py-3">
      <div className="flex items-center">
        <img className=" px-3" src={logo} />
        <span className="logo-text font-monda">TICTON</span>
      </div>
      <div className="hidden gap-5 font-baloo text-[20px] text-[#CBD5E1] lg:flex">
        <a href="#">What is TICTON?</a>
        <a href="#">Document</a>
        <a href="#">Community</a>
      </div>
      <LaunchButton>Launch App</LaunchButton>
    </div>
  );
}

export default NavBar;
