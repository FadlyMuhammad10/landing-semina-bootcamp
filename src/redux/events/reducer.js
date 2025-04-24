const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.isLoading };
    case "SET_EVENTS":
      return { ...state, events: action.events };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default eventsReducer;
