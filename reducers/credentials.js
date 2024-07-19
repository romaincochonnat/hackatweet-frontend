import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: "", username: "", firstname: "", image: "" },
};

export const credentialsSlice = createSlice({
  name: "credentialsReduc",

  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
      state.value.image = action.payload.image;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
      state.value.firstname = null;
    },
  },
});

export const { login, logout } = credentialsSlice.actions;
export default credentialsSlice.reducer;
