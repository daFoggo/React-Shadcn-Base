import { IStatisticBlockProps } from "@/types/StatisticBlock"
import { TrendingUp } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"

const StatisticBlock = ({
    title,
    value,
    trend,
    footer,
}: IStatisticBlockProps) => {
    return (
        <Card className="relative flex flex-col gap-4 bg-gradient-to-b from-transparent to-primary/5 hover:shadow-lg dark:hover:shadow-primary/20 hover:shadow-primary/10 p-4 border-primary transition-all duration-300">
            <CardTitle>{title}</CardTitle>
            <CardContent className="flex items-center gap-4 p-0">
                <p className="font-bold text-3xl">{value}</p>
                {
                    trend && trend > 0 ? (
                        <Badge variant="outline" className="space-x-2 bg-green-500/10 px-4 py-2 border-none text-green-500">
                            <span>{trend}%</span>
                            <TrendingUp className="size-4" />
                        </Badge>
                    ) : (
                        <Badge variant="outline" className="space-x-2 bg-red-500/10 px-4 border-none text-red-500">
                            <span>{trend}%</span>
                            <TrendingUp className="size-4 rotate-180 transform" />
                        </Badge>
                    )
                }
            </CardContent>
            <CardFooter className="p-0 text-muted-foreground text-xs">{footer}</CardFooter>
        </Card>
    )
}

export default StatisticBlock