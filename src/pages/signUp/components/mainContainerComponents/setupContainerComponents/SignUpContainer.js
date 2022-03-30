import React, {useState} from "react";
import styles from './signupContainer.module.css'
import Input from '../../../../stuff/Input'
import Button from '../../../../stuff/Button'
import ZouthLogo from '../../../../stuff/ZouthLogo'
import Rules from './Rules'



const SignUpContainer = () => {


  const [inputOneChecked, setinputOneChecked] = useState(false);
  const [inputOneUnchecked, setinputOneUnchecked] = useState(false);


  const [inputTwoChecked, setinputTwoChecked] = useState(false);
  const [inputTwoUnchecked, setinputTwoUnchecked] = useState(false);

  const [inputThreeChecked, setinputThreeChecked] = useState(false);
  const [inputThreeUnchecked, setinputThreeUnchecked] = useState(false);

  const [inputFourChecked, setinputFourChecked] = useState(false);
  const [inputFourUnchecked, setinputFourUnchecked] = useState(false);

  const [inputCheckBox, setinputCheckBox] = useState();

  const [btnChecked, setbtnChecked] = useState(false)



  const [inputValues, setInputValues] = useState(
    {
      username: '',
      password: '',
      repassword: '',
      email: ''
    }
  )


  const onChangeInputOne = (event) => {
    const l = event.target.value.length
    const v = event.target.value
    if (l > 3) {
      setinputOneUnchecked(false)
      setinputOneChecked(true)
      setInputValues({
        ...inputValues,
        username: v
      })
      if(inputTwoChecked && inputThreeChecked && inputFourChecked && inputCheckBox) {
        setbtnChecked(true)
      }
    } else if(l === 0) {
      setinputOneChecked(false)
      setinputOneUnchecked(false)
      setbtnChecked(false)
    } else if(l <= 3) {
      setinputOneChecked(false)
      setinputOneUnchecked(true)
      setbtnChecked(false)
    }
  }

  const onChangeInputTwo = (event) => {
    const l = event.target.value.length
    const v = event.target.value
    if (l > 6) {
      setinputTwoUnchecked(false)
      setinputTwoChecked(true)
      setInputValues({
        ...inputValues,
        password: v
      })
      if(inputOneChecked && inputThreeChecked && inputFourChecked && inputCheckBox) {
        setbtnChecked(true)
      }
    } else if(l === 0) {
      setinputTwoChecked(false)
      setinputTwoUnchecked(false)
      setbtnChecked(false)
    } else if(l <= 6) {
      setinputTwoChecked(false)
      setinputTwoUnchecked(true)
      setbtnChecked(false)
    }
  }

  const onChangeInputThree = (event) => {
    const l = event.target.value.length
    const v = event.target.value
    if (v === inputValues.password && inputValues.password.length !== 0) {
      setinputThreeUnchecked(false)
      setinputThreeChecked(true)
      setInputValues({
        ...inputValues,
        repassword: v
      })
      if(inputTwoChecked && inputOneChecked && inputFourChecked && inputCheckBox) {
        setbtnChecked(true)
      }
    } else if(l === 0) {
      setinputThreeChecked(false)
      setinputThreeUnchecked(false)
      setbtnChecked(false)
    } else {
      setinputThreeChecked(false)
      setinputThreeUnchecked(true)
      setbtnChecked(false)
    }
  }

  const onChangeInputFour = (event) => {
    const l = event.target.value.length
    const v = event.target.value
    if (validateEmail(v)) {
      setinputFourUnchecked(false)
      setinputFourChecked(true)
      setInputValues({
        ...inputValues,
        email: v
      })
      if(inputTwoChecked && inputThreeChecked && inputOneChecked && inputCheckBox) {
        setbtnChecked(true)
      }
    } else if(l === 0) {
      setinputFourChecked(false)
      setinputFourUnchecked(false)
      setbtnChecked(false)
    } else {
      setinputFourChecked(false)
      setinputFourUnchecked(true)
      setbtnChecked(false)
    }
  }

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
        return re.test(email);
  }

  const onChangeCheckedInput = () => {
    setinputCheckBox(!inputCheckBox)
    if(inputTwoChecked && inputThreeChecked && inputOneChecked && !inputCheckBox) {
      setbtnChecked(true)
    } else {
      setbtnChecked(false)
    }
  }



  return (
    <div className={styles.signUpContainer}>
      <ZouthLogo
        color={'16d6fa'}
      />
      <form className={styles.signUp}>
            <Input  
              type={'name'}
              placeholder={'username'}
              checkedB={inputOneChecked}
              unchecked={inputOneUnchecked}
              onChangeInput={onChangeInputOne}
            />
            <Input  
              type={'password'}
              placeholder={'password'}
              checkedB={inputTwoChecked}
              unchecked={inputTwoUnchecked}
              onChangeInput={onChangeInputTwo}
            />
            <Input  
              type={'password'}
              placeholder={'Re-type password'}
              checkedB={inputThreeChecked}
              unchecked={inputThreeUnchecked}
              onChangeInput={onChangeInputThree}
            />
            <Input  
              type={'email'}
              placeholder={'E-mail'}
              checkedB={inputFourChecked}
              unchecked={inputFourUnchecked}
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
    </div>
  )
}

export default SignUpContainer;