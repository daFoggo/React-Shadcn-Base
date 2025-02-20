import type { ReactNode } from "react";
import { SWRConfig } from "swr";

const defaultFetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(
      "An error occurred while fetching the data."
    ) as Error & {
      status: number;
      info: any;
    };
    error.status = res.status;
    error.info = await res.json();
    throw error;
  }

  return res.json();
};

const swrConfig = {
  fetcher: defaultFetcher,
  revalidateOnFocus: true,
  revalidateOnReconnect: true,
  shouldRetryOnError: true,
  errorRetryInterval: 5000,
  errorRetryCount: 3,
  focusThrottleInterval: 5000,
  dedupingInterval: 2000,
  loadingTimeout: 3000,
  keepPreviousData: false,
  suspense: false,
  fallbackData: undefined,
} as const;

export function SWRProvider({ children }: { children: ReactNode }) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
}

export { swrConfig };