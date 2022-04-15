import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetpassActions } from "../../../../../store/forgetpassword";
import { formActions } from "../../../../../store/form-redux";
import styles from "./loginContainer.module.css";
import Input from "../../../../stuff/Input";
import Button from "../../../../stuff/Button";
import ZouthLogo from "../../../../stuff/ZouthLogo";

const LoginContainer = (props) => {
  const showFP = useSelector((state) => state.fp.forgetpassPage);
  const { isValid: usernameValidity, isEmpty: isEmptyUsername } = useSelector(
    (state) => state.form.username
  );
  const { isValid: passwordValidity, isEmpty: isEmptyPassword } = useSelector(
    (state) => state.form.password
  );
  const { isValid: emailValidity, isEmpty: isEmptyEmail } = useSelector(
    (state) => state.form.email
  );
  const dispatch = useDispatch();

  const [btnChecked, setbtnChecked] = useState(false);
  const [fPbtnChecked, setFPbtnChecked] = useState(false);

  useEffect(() => {
    setbtnChecked(usernameValidity && passwordValidity);
    setFPbtnChecked(emailValidity);
  }, [usernameValidity, passwordValidity, emailValidity]);

  const onChangeUsername = (event) => {
    dispatch(formActions.usernameChangeHandler(event.target.value));
  };
  const onBlurUsernameHandler = (event) => {
    dispatch(formActions.usernameBlurHandler(event.target.value));
  };

  const onChangePassword = (event) => {
    dispatch(formActions.passwordChangeHandler(event.target.value));
  };
  const onBlurPasswordHandler = (event) => {
    dispatch(formActions.passwordBlurHandler(event.target.value));
  };

  const onChangeEmail = (event) => {
    dispatch(formActions.emailChangeHandler(event.target.value));
  };
  const onBlurEmailHandler = (event) => {
    dispatch(formActions.emailBlurHandler(event.target.value));
  };

  const fPHandler = () => {
    dispatch(forgetpassActions.showForgetPassPage());
  };

  const submitResetpassHandler = (event) => {
    event.preventDefault();
    dispatch(forgetpassActions.submitchangepassword());
  };

  const mainLogin = (
    <form className={styles.login}>
      <Input
        type={"text"}
        placeholder={"username"}
        checkedY={usernameValidity}
        onChangeInput={onChangeUsername}
        onBlurHandler={onBlurUsernameHandler}
      />
      {isEmptyUsername && <p>pls fill it.</p>}
      <Input
        type={"password"}
        placeholder={"password"}
        checkedY={passwordValidity}
        onChangeInput={onChangePassword}
        onBlurHandler={onBlurPasswordHandler}
      />
      {isEmptyPassword && <p>pls fill it.</p>}
      <div className={styles.btnholder}>
        <Button
          checkedBtn={btnChecked}
          name={"btn"}
          type={"submit"}
          value={"Sign In"}
          bg={"fec603"}
        />
      </div>
    </form>
  );

  const forgetPass = (
    <form className={styles.login} onSubmit={submitResetpassHandler}>
      <Input
        id={"email"}
        type={"email"}
        placeholder={"Enter your Email!"}
        checkedY={true}
        onChangeInput={onChangeEmail}
        onBlurHandler={onBlurEmailHandler}
      />
      {isEmptyEmail && <p>pls fill it.</p>}
      <div className={styles.btnholder}>
        <Button
          checkedBtn={fPbtnChecked}
          name={"btn"}
          type={"submit"}
          value={"Reset my Password"}
          bg={"fec603"}
        />
      </div>
    </form>
  );

  const passwordValidityStyle = `${styles.loginContainer} ${
    showFP && styles.forgetPassConteiner
  }`;

  return (
    <div className={passwordValidityStyle}>
      <ZouthLogo color={!fPbtnChecked && showFP ? "7e7e7e" : "fec603"} />
      {!showFP && mainLogin}
      {showFP && forgetPass}
      {!showFP && <p onClick={fPHandler}> forgot password? </p>}
    </div>
  );
};

export default LoginContainer;
