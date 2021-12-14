import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Result from "./pages/Result";
import PlayerContext from "./context/PlayerContext";
import { useState } from "react";

function App() {
  const [state, setState] = useState({
    score: 0,
    player: "",
    computer: "",
  });
  const contextValue = {
    score: state.score,
    playerChoice: state.player,
    computerChoice: state.computer,
    setInfo: setState,
  };

  return (
    <div className="App">
      <PlayerContext.Provider value={contextValue}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
