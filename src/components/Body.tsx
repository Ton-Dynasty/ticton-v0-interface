import Conversation from "./body/Conversation";
import Home from "./body/Home";
import Introduction from "./body/Introduction";
import Milestone from "./body/MileStone";
import RoleCarousel from "./body/RolesCarousel";
import Feature from "./body/Feature";
import Contact from "./body/Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <Home />
      <Introduction />
      <Milestone />
      <RoleCarousel />
      <Conversation />
      <Feature />
      <Contact />
      <Footer />
    </>
  );
};

export default Body;
