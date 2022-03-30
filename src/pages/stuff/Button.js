import React from "react";
import styles from './button.module.css';

const Button = (props) => {
  return (
    <input
      style={{backgroundColor: props.checkedBtn ? '#'+props.bg : '#7e7e7e' }}
      className={`
      ${styles.btn}
      ${props.checkedBtn && styles.btnCheckedStyle}
      `}
      name={props.name}
      type={props.type}
      value={props.value}
    />
  )
}


export default Button;