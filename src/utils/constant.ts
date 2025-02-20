import { Icons } from "@/components/common/Icons";
import { docsConfig } from "@/config/docs";
import { ChartArea, Database, Frame, Map, PieChart } from "lucide-react";

export const SAMPLE_SIDEBAR = {
  teams: [
    {
      name: docsConfig.websiteName,
      logo: Icons.logo,
      plan: "Organization",
    },
  ],
  navMain: [
    {
      title: "Data Management",
      url: "#data-magement",
      icon: Database,
      isActive: true,
      items: [
        {
          title: "Identification Data",
          url: "identification-data",
        },
        {
          title: "Institute Calendar Data",
          url: "institue-calendar-data",
        },
        {
          title: "Event Data",
          url: "event-data",
        },
      ],
    },
    {
      title: "Data Analysis",
      url: "#data-analysis",
      icon: ChartArea,
      items: [
        {
          title: "User Behaviour",
          url: "user-behaviour",
        },
        {
          title: "Appointment Requests",
          url: "appointment-requests",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
