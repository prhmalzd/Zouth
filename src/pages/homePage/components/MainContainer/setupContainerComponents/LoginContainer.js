import React, {useState, useReducer, useEffect} from "react";
import styles from './loginContainer.module.css'
import Input from '../../../../stuff/Input'
import Button from '../../../../stuff/Button'
import ZouthLogo from '../../../../stuff/ZouthLogo'

const usernameReducaer = (state, action) => {
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.trim().length > 3}}
  return {value: '', isValid: false}
}
const passwordReducaer = (state, action) => {
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: action.val.trim().length > 6}}
  return {value: '', isValid: false}
}

const LoginContainer = () => {

  const [btnChecked, setbtnChecked] = useState(false)

  const [usernameState, dispatchusername] = useReducer(usernameReducaer, {
    value: '',
    isValid: null
  })
  const [passwordState, dispatchpassword] = useReducer(passwordReducaer, {
    value: '',
    isValid: null
  })

  useEffect(() => {
    const btnChecker = setTimeout(() => {
      setbtnChecked(
        usernameState.isValid && passwordState.isValid
      )
    }, 100)

    return() => {
      clearTimeout(btnChecker)
    }
  }, [usernameState.isValid, passwordState.isValid])

  const onChangeUsername = (event) => {
    dispatchusername({type: 'USER_INPUT', val: event.target.value})
  }

  const onChangePassword = (event) => {
    dispatchpassword({type: 'USER_INPUT', val: event.target.value})
  }

  const submitFormHandler = event => {
    event.preventDefault()
  }


  return (
    <div className={styles.loginContainer}>
      <ZouthLogo
        color={'fec603'}
      />
      <form className={styles.login} onSubmit={submitFormHandler}>
            <Input  
              type={'name'}
              placeholder={'username'}
              checkedY={usernameState.isValid}
              onChangeInput={onChangeUsername}
              value={usernameState.value}
            />
            <Input  
              type={'password'}
              placeholder={'password'}
              checkedY={passwordState.isValid}
              onChangeInput={onChangePassword}
              value={passwordState.value}
            />
        <div className={styles.btnholder}>
          <Button
            checkedBtn={btnChecked}
            name={"btn"}
            type={"submit"}
            value={"Sign In"}
            bg={'fec603'}
          />
        </div>
            
      </form>
      <a href="#l"> forgot password? </a>
    </div>
  )
}

export default LoginContainer;