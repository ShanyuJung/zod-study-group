import "./App.css";
import { Infer } from "./components/Infer";
import { Parse } from "./components/Parse";
import { Pokemons } from "./components/Pokemons";
import { SafeParse } from "./components/SafeParse";

function App() {
  return (
    <div>
      {/* <Parse /> */}
      {/* <SafeParse /> */}
      {/* <Pokemons /> */}
      <Infer />
    </div>
  );
}

export default App;
