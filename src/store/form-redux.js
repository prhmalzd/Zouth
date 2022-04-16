import { createSlice } from "@reduxjs/toolkit";

const initialformState = {
  username: { value: "", isValid: null, isEmpty: null },
  password: { value: "", isValid: null, isEmpty: null },
  repassword: { value: "", isValid: null, isEmpty: null },
  email: { value: "", isValid: null, isEmpty: null },
};

const form = createSlice({
  name: "form",
  initialState: initialformState,
  reducers: {
    usernameChangeHandler(state, action) {
      if (action.payload.length > 3) {
        state.username.value = action.payload;
        state.username.isValid = true;
      } else {
        state.username.value = action.payload;
        state.username.isValid = false;
      }
    },
    usernameBlurHandler(state, action) {
      if (!action.payload.trim()) state.username.isEmpty = true;
      else state.username.isEmpty = false;
    },
    passwordChangeHandler(state, action) {
      if (action.payload.length > 6) {
        state.password.value = action.payload;
        state.password.isValid = true;
      } else {
        state.password.value = action.payload;
        state.password.isValid = false;
      }
    },
    passwordBlurHandler(state, action) {
      if (!action.payload.trim()) state.password.isEmpty = true;
      else state.password.isEmpty = false;
    },
    rePasswordChangeHandler(state, action) {
      if (action.payload.value === action.payload.passwordValue) {
        state.repassword.value = action.payload;
        state.repassword.isValid = true;
      } else {
        state.repassword.value = action.payload;
        state.repassword.isValid = false;
      }
    },
    rePasswordBlurHandler(state, action) {
      if (!action.payload.trim()) state.repassword.isEmpty = true;
      else state.repassword.isEmpty = false;
    },
    emailChangeHandler(state, action) {
      const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      };
      if (validateEmail(action.payload)) {
        state.email.value = action.payload;
        state.email.isValid = true;
      } else {
        state.email.value = action.payload;
        state.email.isValid = false;
      }
    },
    emailBlurHandler(state, action) {
      if (!action.payload.trim()) state.email.isEmpty = true;
      else state.email.isEmpty = false;
    },
    reloadPage(state) {
      state.username.isValid = null;
      state.password.isValid = null;
      state.repassword.isValid = null;
      state.email.isValid = null;
    },
  },
});
export const formActions = form.actions;
export default form.reducer;
