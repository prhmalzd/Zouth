import React, {useState, useEffect, useReducer} from "react";
import { useSelector } from "react-redux";
import styles from './signupContainer.module.css'
import Input from '../../../../stuff/Input'
import Button from '../../../../stuff/Button'
import ZouthLogo from '../../../../stuff/ZouthLogo'
import TermAndRules from './TermAndRules'
import Rules from './Rules'

const usernameReducaer = (state, action) => {
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.trim().length > 3}}
  return {value: '', isValid: false}
}
const passwordReducaer = (state, action) => {
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.trim().length > 6}}
  return {value: '', isValid: false}
}
const repasswordReducaer = (state, action) => {
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: (action.val === action.reval)}}
  return {value: '', isValid: false}
}
const emailReducaer = (state, action) => {
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: validateEmail(action.val)}}
  return {value: '', isValid: false}
}

const SignUpContainer = (props) => {

  const [inputCheckBox, setinputCheckBox] = useState();
  const [btnChecked, setbtnChecked] = useState(false);

  const showtnr = useSelector((state) => state.tnr.tnrpage)

  useEffect(() => {
    const btnChecker = setTimeout(() => {
      setbtnChecked(
        usernameState.isValid && passwordState.isValid && repasswordState.isValid && emailState.isValid && inputCheckBox
      )
    }, 100)

    return() => {
      clearTimeout(btnChecker)
    }
  })

  const [usernameState, dispatchusername] = useReducer(usernameReducaer, {
    value: '',
    isValid: null
  })
  const [passwordState, dispatchpassword] = useReducer(passwordReducaer, {
    value: '',
    isValid: null
  })
  const [repasswordState, dispatchrepassword] = useReducer(repasswordReducaer, {
    value: '',
    isValid: null
  })
  const [emailState, dispatchemail] = useReducer(emailReducaer, {
    value: '',
    isValid: null
  })



  const onChangeInputOne = (event) => {
    dispatchusername({type: 'USER_INPUT', val: event.target.value})
  }

  const onChangeInputTwo = (event) => {
    dispatchpassword({type: 'USER_INPUT', val: event.target.value})
  }

  const onChangeInputThree = (event) => {
    dispatchrepassword({type: 'USER_INPUT', val: event.target.value, reval: passwordState.value})
  }

  const onChangeInputFour = (event) => {
    dispatchemail({type: 'USER_INPUT', val: event.target.value})
  }

  const onChangeCheckedInput = () => {
    setinputCheckBox(inputCheckBox => !inputCheckBox)
  }
  const submitFormHandler = (event) => {
    event.preventDefault();

    if(!btnChecked) {
      return;
    }
    console.log(usernameState.value , passwordState.value , repasswordState.value , emailState.value , inputCheckBox)
  }




  const mainFormSignUp = (
    <form className={styles.signUp} onSubmit={submitFormHandler}>
            <Input
              id={'username'}
              type={'username'}
              placeholder={'username'}
              value={usernameState.value}
              checkedB={usernameState.isValid}
              onChangeInput={onChangeInputOne}
            />
            <Input
              id={'password'}
              type={'password'}
              placeholder={'password'}
              value={passwordState.value}
              checkedB={passwordState.isValid}
              onChangeInput={onChangeInputTwo}
            />
            <Input
              id={'repassword'}
              type={'password'}
              placeholder={'Re-type password'}
              value={repasswordState.value}
              checkedB={repasswordState.isValid}
              onChangeInput={onChangeInputThree}
            />
            <Input
              id={'email'}
              type={'email'}
              placeholder={'E-mail'}
              value={emailState.value}
              checkedB={emailState.isValid}
              onChangeInput={onChangeInputFour}
            />
            <Rules
            onChangeInput={onChangeCheckedInput}/>
        <div className={styles.btnholder}>
          <Button
            checkedBtn={btnChecked}
            name={"btn"}
            type={"submit"}
            value={"Sign In"}
            bg={'16d6fa'}
          />
        </div>  
      </form>
  )

  return (
    <div className={`${styles.signUpContainer} ${showtnr && styles.termAndRulesContainer}`}>
      <ZouthLogo
        color={'16d6fa'}
      />
      {!showtnr && mainFormSignUp}
      {showtnr && <TermAndRules/>}
    </div>
  )
}

export default SignUpContainer;