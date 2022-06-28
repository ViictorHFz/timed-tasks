import React from 'react';
import style from './Button.module.scss';

class Button extends React.Component {
    render() {
        return(
            <button className={style.botao}>
                Adicionar Tarefa
            </button>
        )
    }
}

export default Button;