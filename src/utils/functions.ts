import { format } from "date-fns";
import { vi } from "date-fns/locale/vi";

export const formatISODate = (date: string) => {
  return format(new Date(date), "dd-MM-yyyy", { locale: vi });
};
