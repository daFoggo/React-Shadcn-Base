type RouteConfig = {
  [key: string]: { title: string };
};

export const routeConfig: RouteConfig = {
  "/identification-data": { title: "Identification data" },
  "/institue-calendar-data": { title: "Institute calendar data" },
  "/event-data": { title: "Event data" },
  "/user-behaviour": { title: "User behaviour" },
  "/appointment-requests": { title: "Appointment requests" },
};
