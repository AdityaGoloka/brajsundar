// user-slice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: null,
    userData: {},
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.userToken = action.payload.token;
    },
    removeUserData: (state, action) => {
      state.userData = {};
      state.userToken = null;
    },
  },
});

export const { setUserData, removeUserData } = userSlice.actions;

// export const selectUserData = (state) => state.user.userId;

export default userSlice.reducer;
