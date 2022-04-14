import { configureStore } from "@reduxjs/toolkit";

import forgetpassReducer from "./forgetpassword";
import tnrReducer from "./termsAndRules";
import colorChange from "./colorChange";

const store = configureStore({
  reducer: { fp: forgetpassReducer, tnr: tnrReducer, cCh: colorChange },
});

export default store;
