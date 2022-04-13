import { configureStore } from "@reduxjs/toolkit"

import forgetpassReducer from './forgetpassword'
import tnrReducer from './termsAndRules'

const store = configureStore({
  reducer: {fp : forgetpassReducer, tnr: tnrReducer}
})

export default store