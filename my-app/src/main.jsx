import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Headers from "./component/Header";
import PortfolioSection from "./component/HomePage";
import { About } from "./component/About";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      {/* <h1>Rupinder Kaur</h1> */}
    {/* <Headers/> */}
    <PortfolioSection/>
    <About/>
  </StrictMode>
);
