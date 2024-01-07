import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  product: null,
  success: false,
  products: [],
  message: null,
  allProducts: [],
  error: null,
};
// Define action creators using createAction
export const productCreateRequest = createAction("productCreateRequest");
export const productCreateSuccess = createAction("productCreateSuccess", (payload) => ({ payload })); // Include payload for action
export const productCreateFail = createAction("productCreateFail", (payload) => ({ payload })); // Include payload for action
export const clearErrors = createAction("clearErrors");


export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('productCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('productCreateSuccess', (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase('productCreateFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase('getAllProductsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllProductsShopSuccess', (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase('getAllProductsShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('deleteProductRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteProductSuccess', (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase('deleteProductFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('getAllProductsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAllProductsSuccess', (state, action) => {
      state.isLoading = false;
      state.allProducts = action.payload;
    })
    .addCase('getAllProductsFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

export default productReducer;
