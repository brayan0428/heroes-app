import { AUTH_LOGIN, AUTH_LOGOUT } from "../types";

export const authReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_LOGIN:
      return {
        ...payload,
        logged: true,
      };
    case AUTH_LOGOUT:
      return {
        logged: false,
      };
    default:
      break;
  }
};
