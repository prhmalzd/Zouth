import React from "react";
import styles from './input.module.css'

const Input = (props) => {
  const onChangeHandler = (event) => {
  props.onChangeInput(event)
  }
  return (
    <div 
    className={`${styles.form__group} ${styles.field}`}>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        className={`
          ${styles.form__field}
          ${props.checkedY && styles.checkedStyleY}
          ${props.checkedB && styles.checkedStyleB}
          ${props.unchecked && styles.unchecked}
          `}
        placeholder={props.placeholder}
        required
        onChange={onChangeHandler}
      />
      <label
        className={`
        ${styles.form__label}
        ${props.checkedY && styles.labelcurrectY}
        ${props.checkedB && styles.labelcurrectB}
        ${props.unchecked && styles.labeluncurrect}
        `}
        htmlFor={props.id}>
          {props.placeholder}
      </label>
    </div>
  )

}

export default Input;