import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { institueCalendarService } from "../services/institueCalendar";
import { IFormData } from "../types/Formdata";
import { IRecord } from "../types/Record";

export const useInstitueCalendar = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [calendarData, setCalendarData] = useState<IRecord[]>([]);

  const getInstitueCalendar = async () => {
    setLoadingAPI(true);
    try {
      const response = await institueCalendarService.get();
      if (response.data.success) {
        setCalendarData(response.data.payload);
        toast({
          title: "Lấy dữ liệu thành công",
        });
      }
      return response.data.payload;
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra khi lấy dữ liệu",
        variant: "destructive",
      });
      return [];
    } finally {
      setLoadingAPI(false);
    }
  };

  const updateInstitueCalendar = async (data: IFormData) => {
    setLoadingAPI(true);
    try {
      const response = await institueCalendarService.update(data);
      if (response.data.success) {
        toast({
          title: "File tải lên thành công",
        });
        await getInstitueCalendar();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Có lỗi xảy ra khi tải lên file",
        variant: "destructive",
      });
    } finally {
      setLoadingAPI(false);
    }
  };

  return {
    getInstitueCalendar,
    updateInstitueCalendar,
    loadingAPI,
    calendarData,
  };
};