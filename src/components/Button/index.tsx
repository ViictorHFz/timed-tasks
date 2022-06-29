import React from 'react';
import style from './Button.module.scss';

//No implicity children Props on React 18...
//O tipo de childrens são definidas como ReactNode - 
class Button extends React.Component <{children: React.ReactNode}> {
    render() {
        return(
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
