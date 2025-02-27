"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "Jan", appointments: 45 },
    { month: "Feb", appointments: 50 },
    { month: "Mar", appointments: 55 },
    { month: "Apr", appointments: 60 },
    { month: "May", appointments: 65 },
    { month: "Jun", appointments: 70 },
    { month: "Jul", appointments: 75 },
    { month: "Aug", appointments: 68 },
    { month: "Sep", appointments: 62 },
    { month: "Oct", appointments: 59 },
    { month: "Nov", appointments: 55 },
    { month: "Dec", appointments: 50 },
]

const chartConfig = {
    appointments: {
        label: "Total appointments",
        color: "hsl(var(--chart-1))",
    },
}

const AnnualChart = () => {
    const totalAppointments = React.useMemo(() => chartData.reduce((acc, curr) => acc + curr.appointments, 0), [])

    return (
        <Card className="border-primary/20 hover:border-primary w-full transition-all duration-300">
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                <div>
                    <CardTitle>In this year</CardTitle>
                    <CardDescription>Total appointments in {
                        new Date().getFullYear()
                    }</CardDescription>
                </div>
                <div className="font-bold text-2xl">Total: {totalAppointments}</div>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer config={chartConfig} className="w-full max-h-56">
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent className="w-40" nameKey="appointments" />} />
                        <Bar dataKey="appointments" fill={`var(--color-appointments)`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default AnnualChart

