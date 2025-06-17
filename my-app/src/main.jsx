import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import PortfolioSection from "./component/HomePage";
import { ContextHookProvider } from "./Hooks/ContextHook";
import { Products } from "./component/DtaFilter";
// import { Project } from "./component/Project";
// import { ContactPage } from "./component/Contect";
// import { NewHeader } from "./component/NewHeader";
// import { About } from "./component/About";
// import { Skills } from "./component/Skills";
// import { DemoCounter } from "./component/DemoCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHookProvider>
      {/* <NewHeader/>
      <PortfolioSection />
      <About/>
      <Skills/>
      <Project/>
      <ContactPage/> */}
      {/* <DemoCounter/> */}
      <Products/>
    </ContextHookProvider>
  </StrictMode>
);
