import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss';

interface Props {
  tarefas: Array<ITarefa>,
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            {...item} //spread operator para fazer desestruturação (ou destructuring) do objeto item (array de tarefas)
            //tarefa={item.tarefa}
            //tempo={item.tempo}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
