import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Formulario extends React.Component {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('state:', this.state)
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(event) => this.setState({ ...this.state, tarefa: event.target.value })}
            placeholder="O que você quer fazer?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={(event) => this.setState({ ...this.state, tempo: event.target.value })}
            id="tempo"
            min="00:00"
            max="1:30:00"
            required
          />
        </div>

        <Button>Adicionar</Button>
      </form>
    );
  }
}

export default Formulario;
