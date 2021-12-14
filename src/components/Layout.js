import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import PlayerContext from "../context/PlayerContext";
import ScoreBoard from "./ScoreBoard";

const Layout = () => {
  const gameContext = useContext(PlayerContext);

  return (
    <>
      <div className="wrapper">
        <main className="container">
          <ScoreBoard score={gameContext.score} />
          <Outlet />
          <div>
            <button>Rule</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
