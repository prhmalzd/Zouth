import { createSlice } from "@reduxjs/toolkit";

const initialFPState = {
  forgetpassPage: false,
  changepass: false,
  color: true,
};

const forgetpassword = createSlice({
  name: "forgetPass",
  initialState: initialFPState,
  reducers: {
    showForgetPassPage(state) {
      state.forgetpassPage = true;
      state.color = false;
    },
    resetForgetPassPage(state) {
      state.forgetpassPage = false;
      state.changepass = false;
      state.color = true;
    },
    submitchangepassword(state) {
      state.changepass = true;
      state.color = true;
    },
  },
});
export const forgetpassActions = forgetpassword.actions;
export default forgetpassword.reducer;
