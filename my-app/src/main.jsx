import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Headers from "./component/Header";
import PortfolioSection from "./component/HomePage";
import { About } from "./component/About";
import { ContextHookProvider } from "./Hooks/ContextHook";
import { Project } from "./component/Project";
import { ContactPage } from "./component/Contect";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHookProvider>
      <PortfolioSection />
      {/* <About /> */}
      <Project/>
      <ContactPage/>
    </ContextHookProvider>
  </StrictMode>
);
