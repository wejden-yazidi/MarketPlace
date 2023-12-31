import { createReducer, createAction } from "@reduxjs/toolkit";

// Define initial state with optional properties
const initialState = {
  isAuthenticated: false,
  isLoading: true,
  seller: null, // Make sure to use camelCase for consistency
  error: null,
};

// Define action creators using createAction
export const loadSellerRequest = createAction("loadSellerRequest"); // Use camelCase for action names
export const loadSellerSuccess = createAction("loadSellerSuccess");
export const loadSellerFail = createAction("loadSellerFail");

// Create the reducer with builder callback notation
export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSellerRequest, (state) => {
      state.isLoading = true;
      state.error = null; // Clear any previous errors when making a new request
    })
    .addCase(loadSellerSuccess, (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.seller = action.payload; // Use camelCase for consistency
      state.error = null; // Clear any previous errors on success
    })
    .addCase(loadSellerFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
     .addCase("clearErrors", (state) => {
      state.error = null;
    });
});

export default sellerReducer;
// Note: It's a good practice to clear errors when initiating a new request or on success to avoid stale error messages.
