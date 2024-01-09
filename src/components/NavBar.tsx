import { LaunchButton } from "./ui/LaunchButton";
import logo from "../assets/logo.svg";
import "./NavBar.css";

function NavBar() {
    return (
        <div className=" flex w-full px-[12px] py-[11.25px] justify-between items-center">
            <div className="flex items-center">
                <img className=" px-[10px]" src={logo} />
                <span className="monda logo-text">TICTON</span>
            </div>
            <div className="gap-5 text-[#CBD5E1] text-[20px] baloo hidden lg:flex">
                <a href="#">
                    What is TICTON?
                </a>
                <a href="#">
                    Document
                </a>
                <a href="#">
                    Community
                </a>
            </div>
            <LaunchButton>
                Launch App
            </LaunchButton>
        </div>
    );
}

export default NavBar;