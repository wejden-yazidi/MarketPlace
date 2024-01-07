import axios from "axios";
import { server } from "../../server";
import {
  eventCreateRequest,
  eventCreateSuccess,
  eventCreateFail,
} from "../reducers/event";

// create event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch(eventCreateRequest());

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );

    dispatch(eventCreateSuccess(data.event));
  } catch (error) {
    dispatch(eventCreateFail(error.response.data.message));  // Utilisez la fonction eventCreateFail
  }
};

// get all events of a shop
export const getAllEventsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_EVENTS_SHOP_REQUEST",
    });

    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    dispatch({
      type: "GET_ALL_EVENTS_SHOP_SUCCESS",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_EVENTS_SHOP_FAILED",
      payload: error.response.data.message,
    });
  }
};

// delete event of a shop
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_EVENT_REQUEST",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DELETE_EVENT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_EVENT_FAILED",
      payload: error.response.data.message,
    });
  }
};

// get all events
export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch({
      type: "GET_ALL_EVENTS_REQUEST",
    });

    const { data } = await axios.get(`${server}/event/get-all-events`);
    dispatch({
      type: "GET_ALL_EVENTS_SUCCESS",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GET_ALL_EVENTS_FAILED",
      payload: error.response.data.message,
    });
  }
};
