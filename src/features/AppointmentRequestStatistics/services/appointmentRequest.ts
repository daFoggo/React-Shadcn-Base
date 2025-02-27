import axios from "@/lib/axios";
import { GET_APP_REQUEST_STATISTICS_IP } from "@/utils/endpoints";
import { IGetResponse } from "../types/Response";

export const appointmentRequestService = {
  getRoleStatistic: () => {
    return axios.get<IGetResponse>(GET_APP_REQUEST_STATISTICS_IP);
  },
};
