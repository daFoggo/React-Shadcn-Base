import { Card } from "@/components/ui/card"
import DataTable from "@/components/ui/data-table"
import { Blocks } from "@/features/UserBehaviourStatistics"
import { useUserBehaviourStatistic } from "@/features/UserBehaviourStatistics/hooks/useUserBehaviourStatistics"
import { columns } from "@/features/UserBehaviourStatistics/utils/constants"
import { useEffect } from "react"

const UserBehaviourStatistics = () => {
  const { loadingAPI, getRoleStatistic, roleStatisticData } = useUserBehaviourStatistic();

  useEffect(() => {
    getRoleStatistic();
  }, []);

  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
        <Blocks />
      </div>
      <DataTable columns={columns} data={roleStatisticData} canEdit={false} loading={loadingAPI} />
    </Card>
  )
}

export default UserBehaviourStatistics