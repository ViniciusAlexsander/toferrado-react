import React from "react";
import Tarefas from "./components/Tarefas";

function App() {
  return (
    <div className="app">
      <div className="component">
        <div className="componentHeader">
          <h1 className="componentTitle">Minhas tarefas</h1>
        </div>
        <div className="componentContent">
          <Tarefas />
        </div>
      </div>
    </div>
  );
}

export default App;
