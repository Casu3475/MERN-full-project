import { createSlice } from "@reduxjs/toolkit";

// Initial state of redux store
// The state is typically stored in a Redux store, which is a centralized location for managing and updating application state.
// we avoid the need to pass state down through multiple levels of components,
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

//  The state can be updated using actions, which are plain JavaScript objects that describe a change to be made to the state.
// Reducers are functions that take the current state and an action as arguments, and return a new state based on the action.
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"; // change light mode to dark mode
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    }, // payload is the data that is sent to the store
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends; // update friends
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts; // update posts
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts; // we grab the post that matches the id of the post we want to update
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
