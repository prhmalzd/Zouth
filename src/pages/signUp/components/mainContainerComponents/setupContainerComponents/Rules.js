import React from "react";
import { useDispatch } from "react-redux";
import styles from './rules.module.css'
import { tnrActions } from "../../../../../store/termsAndRules";


const Rules = (props) => {
  const onChangeHandler = (event) => {
    props.onChangeInput(event)
    }
  const dispatch = useDispatch()
  const showtnr = () => {
    dispatch(tnrActions.showtnr())
  } 
  return (
    <div className={styles.rules}>
        <label className={`${styles.checkbox} ${styles.path}`}>
          <input type="checkbox" id="checkbox" name="rules" onChange={onChangeHandler} required/>
          <svg viewBox="0 0 21 21" width="21px" height="21px">
          <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
          </svg>
        </label>
        <label className={styles.labelrules}>
          <p>i agree with</p>
          <p onClick={showtnr}>terms and rules</p>
        </label>
    </div>
  )
}

export default Rules