import React, { Component } from "react";

class Tarefa extends Component {
  state = {
    descricao: this.props.descricao,
  };
  render() {
    return <li>{this.state.descricao}</li>;
  }
}

export default Tarefa;
