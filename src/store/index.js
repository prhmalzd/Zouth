import { configureStore } from "@reduxjs/toolkit";

import forgetpassReducer from "./forgetpassword";
import tnrReducer from "./termsAndRules";
import colorChange from "./colorChange";
import form from "./form-redux";

const store = configureStore({
  reducer: {
    fp: forgetpassReducer,
    tnr: tnrReducer,
    cCh: colorChange,
    form: form,
  },
});

export default store;
