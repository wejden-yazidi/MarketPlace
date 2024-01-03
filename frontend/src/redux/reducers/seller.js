import { createReducer, createAction } from "@reduxjs/toolkit";

// Define initial state with optional properties
const initialState = {
  isLoading: true, // Set initial loading state to false
  isSeller: false, // Initialize isSeller state
  seller: null,    // Initialize seller state
  error: null,     // Initialize error state
};

// Define action creators using createAction
export const loadSellerRequest = createAction("loadSellerRequest");
export const loadSellerSuccess = createAction("loadSellerSuccess", (payload) => ({ payload })); // Include payload for action
export const loadSellerFail = createAction("loadSellerFail", (payload) => ({ payload })); // Include payload for action
export const clearErrors = createAction("clearErrors");

// Create the reducer with builder callback notation
export const sellerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSellerRequest, (state) => {
      state.isLoading = true;
    })
    .addCase(loadSellerSuccess, (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
      state.error = null; // Clear any previous errors
    })
    .addCase(loadSellerFail, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false; // Clear isSeller state on failure
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    });
});

export default sellerReducer;
