import { useState } from "react";
import { toast } from "sonner";
import { appointmentRequestService } from "../services/appointmentRequest";
import { IRecord } from "../types/Record";

export const useAppointmentRequestStatistic = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [appointmentStatisticData, setAppointmentStatisticData] = useState<
    IRecord[]
  >([]);

  const getAppointmentStatistic = async () => {
    setLoadingAPI(true);
    try {
      const response = await appointmentRequestService.getRoleStatistic();
      if (response.data.success) {
        setAppointmentStatisticData(response.data.payload);
      }
      return response.data.payload;
    } catch (error) {
      toast.error("Có lỗi xảy ra khi lấy dữ liệu");
      return [];
    } finally {
      setLoadingAPI(false);
    }
  };

  return {
    getAppointmentStatistic,
    loadingAPI,
    appointmentStatisticData,
  };
};
