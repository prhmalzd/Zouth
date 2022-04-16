import { createSlice } from "@reduxjs/toolkit";

const initialavatarState = {
  body: { bodyHolder: {}, bodyCheck: false },
  head: { headHolder: {}, headCheck: false },
  ear: { earHolder: {}, earCheck: false },
  eyeBrow: { eyeBrowHolder: {}, eyeBrowCheck: false },
  eye: { eyeHolder: {}, eyeCheck: false },
  lip: { lipHolder: {}, lipCheck: false },
  nose: { noseHolder: {}, noseCheck: false },
};

const avatar = createSlice({
  name: "avatar",
  initialState: initialavatarState,
  reducers: {
    bodyCatching(state, action) {
      state.body.bodyHolder = action.payload;
      state.body.bodyCheck = true;
    },
    headCatching(state, action) {
      state.head.headHolder = action.payload;
      state.head.headCheck = true;
    },
    eyeCatching(state, action) {
      state.eye.eyeHolder = action.payload;
      state.eye.eyeCheck = true;
    },
    eyeBrowCatching(state, action) {
      state.eyeBrow.eyeBrowHolder = action.payload;
      state.eyeBrow.eyeBrowCheck = true;
    },
    noseCatching(state, action) {
      state.nose.noseHolder = action.payload;
      state.nose.noseCheck = true;
    },
    lipCatching(state, action) {
      state.lip.lipHolder = action.payload;
      state.lip.lipCheck = true;
    },
    earCatching(state, action) {
      state.ear.earHolder = action.payload;
      state.ear.earCheck = true;
    },
  },
});
export const avatarActions = avatar.actions;
export default avatar.reducer;
