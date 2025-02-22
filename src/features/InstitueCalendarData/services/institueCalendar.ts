import axios from "@/lib/axios";
import {
  GET_INSTITUE_CALENDAR_DATA_IP,
  UPDATE_INSTITUE_CALENDAR_DATA_IP,
} from "@/utils/endpoints";
import { IFormData } from "../types/Formdata";
import { IGetResponse, IUploadResponse } from "../types/Response";

export const institueCalendarService = {
  get: () => {
    return axios.get<IGetResponse>(GET_INSTITUE_CALENDAR_DATA_IP);
  },

  update: (data: IFormData) => {
    const formData = new FormData();
    const file = data.files[0];

    if (!file) {
      throw new Error("No file selected");
    }

    formData.append("file", file);

    return axios.post<IUploadResponse>(
      UPDATE_INSTITUE_CALENDAR_DATA_IP,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
