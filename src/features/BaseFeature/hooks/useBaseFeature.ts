import useSWR from "swr";
import { IResponseData } from "../types/ResponseData";

export const useBaseFeature = () => {
  const { data, error, isLoading, mutate } = useSWR<IResponseData>("api", {
    refreshInterval: 3600000,
  });

  return {
    data,
    isLoading,
    isError: error,
    refresh: mutate,
  };
};
