import { ChevronsUpDown } from "lucide-react"
import * as React from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"

const DashboardTeamSwitcher = ({
    teams,
}: {
    teams: {
        name: string
        logo: React.ElementType
        plan: string
    }[]
}) => {
    const { isMobile } = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(teams[0])

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex justify-center items-center bg-muted rounded-lg size-8 aspect-square text-muted-foreground">
                                <activeTeam.logo className="size-4" />
                            </div>
                            <div className="flex-1 grid text-sm text-left leading-tight">
                                <span className="font-semibold truncate">
                                    {activeTeam.name}
                                </span>
                                <span className="text-xs truncate">{activeTeam.plan}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="rounded-lg w-[--radix-dropdown-menu-trigger-width] min-w-56"
                        align="start"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="text-muted-foreground text-xs">
                            Organization
                        </DropdownMenuLabel>
                        {teams.map((team, index) => (
                            <DropdownMenuItem
                                key={index}
                                onClick={() => setActiveTeam(team)}
                                className="gap-2 p-2"
                            >
                                <div className="flex justify-center items-center border rounded-sm size-6">
                                    <team.logo className="size-4 shrink-0" />
                                </div>
                                {team.name}
                            </DropdownMenuItem>
                        ))}
                        <DropdownMenuSeparator />
                        {/* <DropdownMenuItem className="gap-2 p-2">
                            <div className="flex justify-center items-center bg-background border rounded-md size-6">
                                <Plus className="size-4" />
                            </div>
                            <div className="font-medium text-muted-foreground">Add team</div>
                        </DropdownMenuItem> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default DashboardTeamSwitcher