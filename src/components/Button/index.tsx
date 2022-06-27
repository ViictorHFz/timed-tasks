import React from 'react';
import './style.scss';

class Button extends React.Component {
    render() {
        return(
            <button className='botao'>
                Adicionar Tarefa
            </button>
        )
    }
}

export default Button;