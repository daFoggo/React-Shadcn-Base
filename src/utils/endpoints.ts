export const DICEBEAR_API = "https://api.dicebear.com/9.x/thumbs/svg?";
export const BACKEND_IP = import.meta.env.VITE_BACKEND_IP;
export const BACKEND_API = import.meta.env.VITE_BACKEND_API;

export const LOGIN_API = BACKEND_API + "/auth/login";

export const GET_INSTITUE_CALENDAR_DATA_IP =
  BACKEND_API + "/institute-calendar/get";
export const UPDATE_INSTITUE_CALENDAR_DATA_IP =
  BACKEND_API + "/institute-calendar/post";
export const GET_ROLE_STATISTICS_IP = BACKEND_IP + "/statistics/roles";
