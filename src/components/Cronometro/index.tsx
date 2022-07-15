import React from "react";
import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/date";

export default function Cronometro() {

  console.log('conversao :', tempoParaSegundos('01:01:01'))
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button>Começar</Button>
    </div>
  );
}
