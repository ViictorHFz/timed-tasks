import React from "react";
import style from "./Button.module.scss";

//No implicity children Props on React 18...
//O tipo de childrens são definidas como ReactNode -

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}

export default Button;
