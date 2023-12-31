import { createReducer,createAction  } from "@reduxjs/toolkit";

// Define initial state with optional properties
const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

// Define action creators using createAction
export const LoadUserRequest = createAction("LoadUserRequest");
export const LoadUserSuccess = createAction("LoadUserSuccess");
export const LoadUserFail = createAction("LoadUserFail");

// Create the reducer with builder callback notation
export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LoadUserRequest, (state) => {
      state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase(LoadUserFail, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
export default userReducer;