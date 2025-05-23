import { NewHeader } from "./component/NewHeader";
import { HomePage } from "./component/HomePage";
import { About } from "./component/About";
import { Project } from "./component/Project";
import { Skills } from "./component/Skills";
import { Contect } from "./component/Contect";
import { Mousemove } from "./component/Mousemove";
import { ContextProvider } from "./Hooks/ContextHook";

function App() {
  return (
    <ContextProvider>
      <NewHeader />
      <HomePage />
      <About />
      <Project />
      <Skills />
      <Contect />
      <Mousemove />
    </ContextProvider>
  );
}

export default App;
