import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Headers from "./component/Header";
import { About } from "./component/About";
import PortfolioSection from "./component/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      {/* <h1>Rupinder Kaur</h1> */}
    {/* <Headers/> */}
    {/* <About/> */}
    <PortfolioSection/>
  </StrictMode>
);
