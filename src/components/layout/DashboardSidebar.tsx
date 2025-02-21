import * as React from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/AuthContext"
import { SIDEBAR_ROUTING } from "@/utils/constant"
import ThemeSwitcher from "../common/ThemeSwitcher"
import UserMenu from "../common/UserMenu"
import DashboardNavMain from "./DashboardNavMain"
import DashboardNavProjects from "./DashboardNavProjects"
import DashboardTeamSwitcher from "./DashboardTeamSwitcher"

const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { user } = useAuth()
    return (
        <Sidebar collapsible="icon" {...props} className="no-scrollbar">
            <SidebarHeader>
                <DashboardTeamSwitcher teams={SIDEBAR_ROUTING.teams} />
            </SidebarHeader>
            <SidebarContent>
                <DashboardNavMain items={SIDEBAR_ROUTING.navMain} />
                <DashboardNavProjects projects={SIDEBAR_ROUTING.projects} />
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