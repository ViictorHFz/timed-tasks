import React, { useEffect, useState } from "react";
import Button from "../Button";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/ITarefa";

interface Props {
  selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }
  }, [selecionado])

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha uma tarefa e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo}/>
      </div>
      <Button>Começar</Button>
    </div>
  );
}
