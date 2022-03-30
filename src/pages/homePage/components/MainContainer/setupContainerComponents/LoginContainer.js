import React, {useState} from "react";
import styles from './loginContainer.module.css'
import Input from '../../../../stuff/Input'
import Button from '../../../../stuff/Button'
import ZouthLogo from '../../../../stuff/ZouthLogo'



const LoginContainer = () => {


  const [inputOneChecked, setinputOneChecked] = useState(false);
  const [inputOneUnchecked, setinputOneUnchecked] = useState(false);


  const [inputTwoChecked, setinputTwoChecked] = useState(false);
  const [inputTwoUnchecked, setinputTwoUnchecked] = useState(false);

  const [btnChecked, setbtnChecked] = useState(false)


  const onChangeInputOne = (event) => {
    const l = event.target.value.length
    if (l > 3) {
      setinputOneUnchecked(false)
      setinputOneChecked(true)
      if(inputTwoChecked) {
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
    if (l > 6) {
      setinputTwoUnchecked(false)
      setinputTwoChecked(true)
      if(inputOneChecked) {
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



  return (
    <div className={styles.loginContainer}>
      <ZouthLogo
        color={'fec603'}
      />
      <form className={styles.login}>
            <Input  
              type={'name'}
              placeholder={'username'}
              checkedY={inputOneChecked}
              unchecked={inputOneUnchecked}
              onChangeInput={onChangeInputOne}
            />
            <Input  
              type={'password'}
              placeholder={'password'}
              checkedY={inputTwoChecked}
              unchecked={inputTwoUnchecked}
              onChangeInput={onChangeInputTwo}
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