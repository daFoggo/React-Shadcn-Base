import { Card } from "@/components/ui/card"
import DataTable from "@/components/ui/data-table"
import { Blocks } from "@/features/IdentificationData"
import { columns, data } from "@/features/IdentificationData/utils/constants"

const IdentificationData = () => {
  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <Blocks />
      </div>
      <DataTable columns={columns} data={data} canEdit={false} />
    </Card>
  )
}

export default IdentificationData