import { createSlice } from "@reduxjs/toolkit";

const initialcolorState = { colorpage: "#EA1A7F", coloronHover: "red" };

const colorchange = createSlice({
  name: "colorchange",
  initialState: initialcolorState,
  reducers: {
    yellow(state) {
      state.colorpage = "#fec603";
      state.coloronHover = "yellow";
    },
    green(state) {
      state.colorpage = "#a8f387";
      state.coloronHover = "green";
    },
    red(state) {
      state.colorpage = "#EA1A7F";
      state.coloronHover = "red";
    },
    purple(state) {
      state.colorpage = "#af87ce";
      state.coloronHover = "purple";
    },
    blue(state) {
      state.colorpage = "#16d6fa";
      state.coloronHover = "blue";
    },
  },
});
export const colorchangeActions = colorchange.actions;
export default colorchange.reducer;
