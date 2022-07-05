import { ITarefa } from "../../types/ITarefa";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista({ tarefas }: { tarefas: Array<ITarefa>}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Tarefas do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
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
