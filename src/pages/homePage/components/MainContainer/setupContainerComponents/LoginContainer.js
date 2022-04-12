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
const emailReducaer = (state, action) => {
  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }
  if (action.type === 'USER_INPUT') {return {value: action.val, isValid: validateEmail(action.val)}}
  return {value: '', isValid: false}
}

const LoginContainer = (props) => {

  const [btnChecked, setbtnChecked] = useState(false)
  const [fPbtnChecked, setFPbtnChecked] = useState(false)

  const [forgetPassClicked , setForgetPassClicked] = useState(false)

  const [usernameState, dispatchusername] = useReducer(usernameReducaer, {
    value: '',
    isValid: null
  })
  const [passwordState, dispatchpassword] = useReducer(passwordReducaer, {
    value: '',
    isValid: null
  })
  const [emailState, dispatchemail] = useReducer(emailReducaer, {
    value: '',
    isValid: null
  })


  useEffect(() => {
    const btnChecker = setTimeout(() => {
      setbtnChecked(
        usernameState.isValid && passwordState.isValid
      )
      setFPbtnChecked(emailState.isValid)
    }, 100)

    return() => {
      clearTimeout(btnChecker)
    }
  }, [usernameState.isValid, passwordState.isValid, emailState.isValid])

  const onChangeUsername = (event) => {
    dispatchusername({type: 'USER_INPUT', val: event.target.value})
  }

  const onChangePassword = (event) => {
    dispatchpassword({type: 'USER_INPUT', val: event.target.value})
  }

  const submitFormHandler = event => {
    event.preventDefault()
  }


  const fPHandler = () => {
    props.forgetPasswordHandler()
    setForgetPassClicked(true)
  }
  const onChangeEmail = (event) => {
    dispatchemail({type: 'USER_INPUT', val: event.target.value})
  }
  const submitResetpassHandler = event => {
    event.preventDefault()
    if (fPbtnChecked) {
      props.forgetResetSubmitHandler()
    }
  }

  const mainLogin = (
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
  )

  const forgetPass = (
    <form className={styles.login} onSubmit={submitResetpassHandler}>
      <Input
        id={'email'}
        type={'email'}
        placeholder={'Enter your Email!'}
        checkedY={true}
        onChangeInput={onChangeEmail}
        value={emailState.value}
      />
      <div className={styles.btnholder}>
      <Button
          checkedBtn={fPbtnChecked}
          name={"btn"}
          type={"submit"}
          value={"Reset my Password"}
          bg={'fec603'}
        />
      </div>
            
    </form>
  )
  
  const passwordStyleValidity = `${styles.loginContainer} ${forgetPassClicked && styles.forgetPassConteiner}`

  return (
    <div className={passwordStyleValidity}>
      <ZouthLogo
        color={!fPbtnChecked && forgetPassClicked ? '7e7e7e' : 'fec603'}
      />
      {!forgetPassClicked && mainLogin}
      {forgetPassClicked && forgetPass}
      {!forgetPassClicked && <p onClick={fPHandler}> forgot password? </p>}
    </div>
  )
}

export default LoginContainer;