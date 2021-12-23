import Board from "./components/Board";
import GameContextProvider from "./components/GameContext";
import "./App.css";

function App() {
  return (
    <GameContextProvider>
        <Board/>
    </GameContextProvider>
  );
}

export default App;
