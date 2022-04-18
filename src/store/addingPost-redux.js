import { createSlice } from "@reduxjs/toolkit";

const initialaddPostState = {
  posts: [
    {
      name: "Parham",
      logo: "P",
      context: "Welcome to Zouth!",
      src: "",
    },
  ],
};

const addpost = createSlice({
  name: "addingPost",
  initialState: initialaddPostState,
  reducers: {
    addPostHandler(state, action) {
      state.posts.unshift(action.payload);
    },
  },
});
export const addpostActions = addpost.actions;
export default addpost.reducer;
