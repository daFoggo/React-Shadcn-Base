import { Card } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { UploadForm } from "@/features/InstitueCalendarData";
import { useInstitueCalendar } from "@/features/InstitueCalendarData/hooks/useInstitueCalendar";
import { columns } from "@/features/InstitueCalendarData/utils/constants";
import { useEffect } from "react";

const InstitueCalendarData = () => {
  const { loadingAPI, getInstitueCalendar, updateInstitueCalendar, calendarData } = useInstitueCalendar();

  useEffect(() => {
    getInstitueCalendar();
  }, []);

  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <UploadForm onUpload={updateInstitueCalendar} loading={loadingAPI} />
      <DataTable
        columns={columns}
        data={calendarData}
        canEdit={false}
        loading={loadingAPI}
      />
    </Card>
  )
}

export default InstitueCalendarData