import { getData } from "../../utils/fetch";
import { SET_LOADING, SET_EVENTS, SET_ERROR } from "./constants";

export const startFetchingEvents = (isLoading) => {
  return {
    type: SET_LOADING,
    isLoading,
  };
};

export const successFetchingEvents = (events) => {
  return {
    type: SET_EVENTS,
    events,
  };
};

export const errorFetchingEvents = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};

export const fetchEvents = () => async (dispatch) => {
  dispatch(startFetchingEvents(true));
  try {
    const response = await getData("/events");

    dispatch(successFetchingEvents(response?.data));
  } catch (error) {
    dispatch(errorFetchingEvents(error));
  } finally {
    dispatch(startFetchingEvents(false));
  }
};
