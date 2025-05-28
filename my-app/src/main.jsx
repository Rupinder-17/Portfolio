import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PortfolioSection from "./component/HomePage";
import { ContextHookProvider } from "./Hooks/ContextHook";
import { Project } from "./component/Project";
import { ContactPage } from "./component/Contect";
import { NewHeader } from "./component/NewHeader";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHookProvider>
      <NewHeader/>
      <PortfolioSection />
      <Project/>
      <ContactPage/>
    </ContextHookProvider>
  </StrictMode>
);
