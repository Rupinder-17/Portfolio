import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Headers from "./component/Header";
import PortfolioSection from "./component/HomePage";
import { About } from "./component/About";
import { ContextHookProvider } from "./Hooks/ContextHook";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextHookProvider>
      {/* <Headers/> */}
      <PortfolioSection />
      <About />
    </ContextHookProvider>
  </StrictMode>
);
