import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PortfolioSection from "./component/HomePage";
import { ContextHookProvider } from "./Hooks/ContextHook";
import { Project } from "./component/Project";
import { ContactPage } from "./component/Contect";
import { NewHeader } from "./component/NewHeader";
import { About } from "./component/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHookProvider>
      <NewHeader/>
      <PortfolioSection />
      <About/>
      <Project/>
      <ContactPage/>
    </ContextHookProvider>
  </StrictMode>
);
