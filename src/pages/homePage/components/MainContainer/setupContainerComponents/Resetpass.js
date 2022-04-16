import React, { useState, useEffect } from "react";
import { formActions } from "../../../../../store/form-redux";
import { forgetpassActions } from "../../../../../store/forgetpassword";
import { useDispatch, useSelector } from "react-redux";
import styles from "./loginContainer.module.css";
import ZouthLogo from "../../../../stuff/ZouthLogo";
import Input from "../../../../stuff/Input";
import Button from "../../../../stuff/Button";

const Resetpass = () => {
  const { isValid: emailValidity, isEmpty: isEmptyEmail } = useSelector(
    (state) => state.form.email
  );
  const dispatch = useDispatch();

  const [fPbtnChecked, setFPbtnChecked] = useState(false);

  useEffect(() => {
    setFPbtnChecked(emailValidity);
  }, [emailValidity]);

  const onChangeEmail = (event) => {
    dispatch(formActions.emailChangeHandler(event.target.value));
  };
  const onBlurEmailHandler = (event) => {
    dispatch(formActions.emailBlurHandler(event.target.value));
  };

  const submitResetpassHandler = (event) => {
    event.preventDefault();
    dispatch(forgetpassActions.submitchangepassword());
  };

  return (
    <div className={`${styles.loginContainer} ${styles.forgetPassConteiner}`}>
      <ZouthLogo color={!fPbtnChecked ? "7e7e7e" : "fec603"} />
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
    </div>
  );
};

export default Resetpass;
