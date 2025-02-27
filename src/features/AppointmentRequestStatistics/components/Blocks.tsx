import StatisticBlock from "@/components/common/StatisticBlock"
import { statistics } from "../utils/constants"
const Blocks = () => {
  return (
    statistics.map((statistic, index) => (
      <StatisticBlock
        key={index}
        title={statistic.title}
        value={statistic.value}
        trend={statistic.trend}
        footer={statistic.footer}
      />
    ))
  )
}

export default Blocks