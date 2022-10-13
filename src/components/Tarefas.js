import React, { Component } from "react";
import "./Tarefas.css";

class Tarefas extends Component {
  state = {
    tarefas: ["Declarar IRPF", "Estudar React", "Levar carro para revisão"],
  };

  imagem = "/assets/hangloose.png";

  render() {
    return (
      <div>
        <p>{this.state.tarefas.length} tarefas pendentes.</p>
        <div id="blank">
          <img src={this.imagem} alt=""></img>
          <p>Nada a fazer agora.</p>
        </div>
      </div>
    );
  }
}

export default Tarefas;
