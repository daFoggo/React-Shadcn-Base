import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { formatSidebarItems } from "@/utils/navigation"
import ThemeSwitcher from "../common/ThemeSwitcher"
import UserMenu from "../common/UserMenu"
import DashboardNavMain from "./DashboardNavMain"
import DashboardNavProjects from "./DashboardNavProjects"
import DashboardTeamSwitcher from "./DashboardTeamSwitcher"

const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { user } = useAuth()
    const { teams, navMain, projects } = formatSidebarItems()

    return (
        <Sidebar collapsible="icon" {...props} className="no-scrollbar">
            <SidebarHeader>
                <DashboardTeamSwitcher teams={teams} />
            </SidebarHeader>
            <SidebarContent>
                <DashboardNavMain items={navMain} />
                <DashboardNavProjects projects={projects} />
            </SidebarContent>
            <SidebarFooter className="flex flex-row justify-between items-center">
                <div>
                    <ThemeSwitcher />
                </div>
                <UserMenu user={user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

export default DashboardSidebar