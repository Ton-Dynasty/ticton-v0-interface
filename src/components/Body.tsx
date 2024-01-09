import Conversation from "./body/Conversation";
import Home from "./body/Home";
import Introduction from "./body/Introduction";
import Milestone from "./body/MileStone";
import RoleCarousel from "./body/RolesCarousel";
import Feature from "./body/Feature";
import Contact from "./body/Contact";
import Footer from "./Footer";

function Body() {
    return (
        <div className="p-[10px]">
            <Home />
            <Introduction />
            <Milestone />
            <RoleCarousel />
            <Conversation />
            <Feature />
            <Contact />
            <Footer />
        </div>
    );
}

export default Body;