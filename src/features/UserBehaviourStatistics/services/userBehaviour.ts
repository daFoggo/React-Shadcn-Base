import axios from "@/lib/axios";
import { GET_ROLE_STATISTICS_IP } from "@/utils/endpoints";
import { IGetResponse } from "../types/Response";

export const userBehaviourService = {
  getRoleStatistic: () => {
    return axios.get<IGetResponse>(GET_ROLE_STATISTICS_IP);
  },
};
