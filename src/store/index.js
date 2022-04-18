import { configureStore } from "@reduxjs/toolkit";

import forgetpassReducer from "./forgetpassword";
import tnrReducer from "./termsAndRules";
import colorChange from "./colorChange";
import form from "./form-redux";
import avatarReducer from "./avatar-redux";
import addingPostRedux from "./addingPost-redux";

const store = configureStore({
  reducer: {
    fp: forgetpassReducer,
    tnr: tnrReducer,
    cCh: colorChange,
    form: form,
    avatar: avatarReducer,
    addPost: addingPostRedux,
  },
});

export default store;
