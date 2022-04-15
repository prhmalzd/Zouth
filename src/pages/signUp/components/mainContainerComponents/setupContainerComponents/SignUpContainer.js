import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../../../../store/form-redux";
import styles from "./signupContainer.module.css";
import Input from "../../../../stuff/Input";
import Button from "../../../../stuff/Button";
import ZouthLogo from "../../../../stuff/ZouthLogo";
import TermAndRules from "./TermAndRules";
import Rules from "./Rules";

const SignUpContainer = (props) => {
  const dispatch = useDispatch();

  const { isValid: usernameValidity, isEmpty: isEmptyUsername } = useSelector(
    (state) => state.form.username
  );

  const {
    value: passwordValue,
    isValid: passwordValidity,
    isEmpty: isEmptyPassword,
  } = useSelector((state) => state.form.password);

  const { isValid: repasswordValidity, isEmpty: isEmptyrePassword } =
    useSelector((state) => state.form.repassword);

  const { isValid: emailValidity, isEmpty: isEmptyEmail } = useSelector(
    (state) => state.form.email
  );

  const [inputCheckBox, setinputCheckBox] = useState();
  const [btnChecked, setbtnChecked] = useState(false);

  const showtnr = useSelector((state) => state.tnr.tnrpage);

  useEffect(() => {
    dispatch(formActions.reloadPage());
  }, [showtnr]);

  useEffect(() => {
    setbtnChecked(
      usernameValidity &&
        passwordValidity &&
        repasswordValidity &&
        emailValidity &&
        inputCheckBox
    );
  }, [
    usernameValidity,
    passwordValidity,
    repasswordValidity,
    emailValidity,
    inputCheckBox,
  ]);

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

  const onChangeRePassword = (event) => {
    dispatch(
      formActions.rePasswordChangeHandler({
        value: event.target.value,
        passwordValue,
      })
    );
  };
  const onBlurRePasswordHandler = (event) => {
    dispatch(formActions.rePasswordBlurHandler(event.target.value));
  };

  const onChangeEmail = (event) => {
    dispatch(formActions.emailChangeHandler(event.target.value));
  };
  const onBlurEmailHandler = (event) => {
    dispatch(formActions.emailBlurHandler(event.target.value));
  };

  const onChangeCheckedInput = () => {
    setinputCheckBox((inputCheckBox) => !inputCheckBox);
  };

  const mainFormSignUp = (
    <form className={styles.signUp}>
      <Input
        id={"username"}
        type={"username"}
        placeholder={"username"}
        checkedB={usernameValidity}
        onChangeInput={onChangeUsername}
        onBlurHandler={onBlurUsernameHandler}
      />
      {isEmptyUsername && <p>fill the username!</p>}
      <Input
        id={"password"}
        type={"password"}
        placeholder={"password"}
        checkedB={passwordValidity}
        onChangeInput={onChangePassword}
        onBlurHandler={onBlurPasswordHandler}
      />
      {isEmptyPassword && <p>fill the password!</p>}
      <Input
        id={"repassword"}
        type={"password"}
        placeholder={"Re-type password"}
        checkedB={repasswordValidity}
        onChangeInput={onChangeRePassword}
        onBlurHandler={onBlurRePasswordHandler}
      />
      {isEmptyrePassword && <p>type password again!</p>}
      <Input
        id={"email"}
        type={"email"}
        placeholder={"E-mail"}
        checkedB={emailValidity}
        onChangeInput={onChangeEmail}
        onBlurHandler={onBlurEmailHandler}
      />
      {isEmptyEmail && <p>fill the email!</p>}
      <Rules onChangeInput={onChangeCheckedInput} />
      <div className={styles.btnholder}>
        <Button
          checkedBtn={btnChecked}
          name={"btn"}
          type={"submit"}
          value={"Sign In"}
          bg={"16d6fa"}
        />
      </div>
    </form>
  );

  return (
    <div
      className={`${styles.signUpContainer} ${
        showtnr && styles.termAndRulesContainer
      }`}
    >
      <ZouthLogo color={"16d6fa"} />
      {!showtnr && mainFormSignUp}
      {showtnr && <TermAndRules />}
    </div>
  );
};

export default SignUpContainer;
