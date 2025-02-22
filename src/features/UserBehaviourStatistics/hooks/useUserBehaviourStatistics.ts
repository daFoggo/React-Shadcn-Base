import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { IRecord } from "../types/Record";
import { userBehaviourService } from "../services/userBehaviour";

export const useUserBehaviourStatistic = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [roleStatisticData, setRoleStatisticData] = useState<IRecord[]>([]);

  const getRoleStatistic = async () => {
    setLoadingAPI(true);
    try {
      const response = await userBehaviourService.getRoleStatistic();
      if (response.data.success) {
        setRoleStatisticData(response.data.payload);
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

  return {
    getRoleStatistic,
    loadingAPI,
    roleStatisticData,
  };
};