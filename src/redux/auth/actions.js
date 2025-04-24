import { jwtDecode } from "jwt-decode";
import { USER_LOGIN, USER_LOGOUT } from "./constants";

export function userLogin(token) {
  return {
    type: USER_LOGIN,
    token,
    user: jwtDecode(token),
  };
}

export function userLogout() {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
  localStorage.removeItem("payload1");
  return {
    type: USER_LOGOUT,
  };
}
