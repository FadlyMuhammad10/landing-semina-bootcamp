import { USER_LOGIN, USER_LOGOUT } from "./constants";

let initialState = localStorage.getItem("auth")
  ? {
      token: JSON.parse(localStorage.getItem("auth")),
      user: JSON.parse(localStorage.getItem("user")),
    }
  : { token: null, user: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        user: action.user,
      };

    case USER_LOGOUT:
      return { token: null, user: null };

    default:
      return state;
  }
}
