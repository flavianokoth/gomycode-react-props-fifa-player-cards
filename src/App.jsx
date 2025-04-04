import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./components/PlayersList";

const App = () => {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Football Players</h1>
      <PlayersList />
    </div>
  );
};

export default App;
