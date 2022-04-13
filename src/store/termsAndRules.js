import { createSlice } from "@reduxjs/toolkit";

const initialtnrState = { tnrpage: false}

const tnr = createSlice({
  name: 'tnr',
  initialState: initialtnrState,
  reducers: {
    showtnr(state) {
      state.tnrpage = true
    },
    hidetnr(state) {
      state.tnrpage = false
    }
  }
})
export const tnrActions = tnr.actions
export default tnr.reducer;