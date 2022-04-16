import React, { useState, useEffect } from "react";
import { formActions } from "../../../../../store/form-redux";
import { forgetpassActions } from "../../../../../store/forgetpassword";
import { useDispatch, useSelector } from "react-redux";
import styles from "./loginContainer.module.css";
import ZouthLogo from "../../../../stuff/ZouthLogo";
import Input from "../../../../stuff/Input";
import Button from "../../../../stuff/Button";
import { Link, useHistory } from "react-router-dom";

const LoginPage = () => {
  const { isValid: usernameValidity, isEmpty: isEmptyUsername } = useSelector(
    (state) => state.form.username
  );
  const { isValid: passwordValidity, isEmpty: isEmptyPassword } = useSelector(
    (state) => state.form.password
  );
  const dispatch = useDispatch();
  const [btnChecked, setbtnChecked] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch(forgetpassActions.resetForgetPassPage());
  }, [dispatch]);

  useEffect(() => {
    setbtnChecked(usernameValidity && passwordValidity);
  }, [usernameValidity, passwordValidity]);

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

  const submitLoginHandler = (event) => {
    event.preventDefault();
    if (btnChecked) history.push("/timeline");
  };

  const fPHandler = () => {
    dispatch(forgetpassActions.showForgetPassPage());
  };

  return (
    <div className={styles.loginContainer}>
      <ZouthLogo color={"fec603"} />
      <form className={styles.login} onSubmit={submitLoginHandler}>
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
        <Link to={"/homepage/resetpassword"}>
          <p onClick={fPHandler}> forgot password? </p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
