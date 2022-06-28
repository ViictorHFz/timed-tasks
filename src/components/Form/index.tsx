import React from "react";
import Button from "../Button";
import style from './Form.module.scss';

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione uma tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer fazer?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input type="time" step="1" name="tempo" id="tempo" min="00:00" max="1:30:00" required />
        </div>

        <Button>
          Adicionar
        </Button>
      </form>
    );
  }
}

export default Formulario;
