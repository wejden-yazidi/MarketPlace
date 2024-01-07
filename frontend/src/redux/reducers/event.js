import { createReducer ,createAction} from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
 
};
// Define action creators using createAction
export const eventCreateRequest = createAction("prodeventCreateRequestuctCreateRequest");
export const eventCreateSuccess = createAction("eventCreateSuccess", (payload) => ({ payload })); // Include payload for action
export const eventCreateFail = createAction("eventCreateFail", (payload) => ({ payload })); // Include payload for action
export const clearErrors = createAction("clearErrors");


export const eventReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('eventCreateRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('eventCreateSuccess', (state, action) => {
      state.isLoading = false;
      state.event = action.payload;
      state.success = true;
    })
    .addCase('eventCreateFail', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })
    .addCase('getAlleventsShopRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsShopSuccess', (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    })
    .addCase('getAlleventsShopFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('deleteeventRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('deleteeventSuccess', (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase('deleteeventFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('getAlleventsRequest', (state) => {
      state.isLoading = true;
    })
    .addCase('getAlleventsSuccess', (state, action) => {
      state.isLoading = false;
      state.allEvents = action.payload;
    })
    .addCase('getAlleventsFailed', (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});

export default eventReducer;
