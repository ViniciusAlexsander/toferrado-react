import React, { Component } from "react";
import "./Tarefas.css";
import Tarefa from "./Tarefa";

class Tarefas extends Component {
  state = {
    tarefas: ["Declarar IRPF", "Estudar React", "Levar carro para revisão"],
    novaTarefa: "",
  };
  imagem = "/assets/hangloose.png";

  render() {
    return (
      <div className="component">
        <div className="componentHeader">
          <h1 className="componentTitle">Minhas tarefas</h1>
        </div>
        <div className="componentContent">
          <div>{this.listaDeTarefas()}</div>
          <div id="blank" className={this.listaVazia() ? "" : "hidden"}>
            <img src={this.imagem} alt="hangloose" />
            <p>Nada a fazer agora.</p>
          </div>
          <div className="field mt2">
            <input
              type="text"
              value={this.state.novaTarefa}
              onChange={this.trataNovaTarefa}
              autoComplete="off"
            />
            <button onClick={this.adicionaTarefa} className="button primary">
              <img src="./assets/plus1.png" alt="adicionar" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  trataNovaTarefa = (evento) => {
    this.setState({ novaTarefa: evento.target.value });
  };

  adicionaTarefa = () => {
    if (this.state.novaTarefa !== "") {
      const novoVetorDeTarefas = [...this.state.tarefas, this.state.novaTarefa];
      this.setState({
        tarefas: novoVetorDeTarefas,
        novaTarefa: "",
      });
    }
  };

  listaVazia() {
    return this.state.tarefas.length === 0;
  }

  listaDeTarefas() {
    if (this.state.tarefas.length === 0) return "";
    return (
      <ul className={`list ${this.listaVazia() ? "hidden" : ""}`}>
        {this.state.tarefas.map((t, i) => (
          <Tarefa key={i} descricao={t} />
        ))}
      </ul>
    );
  }
}

export default Tarefas;
