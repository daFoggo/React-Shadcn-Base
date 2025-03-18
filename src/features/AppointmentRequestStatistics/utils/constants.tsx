import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { IRecord } from "../types/Record";
import { convertStatusToColor } from "./functions";

export const columns: ColumnDef<IRecord>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "purpose",
    header: "Purpose",
  },
  {
    accessorKey: "startTime",
    cell: ({ row }) => {
      const date = new Date(row.original.startTime);
      return <span>{format(
        date,
        "dd/MM/yyyy HH:mm"
      )}</span>
    },
    header: "Start Time",
  },
  {
    accessorKey: "endTime",
    header: "End Time",
    cell: ({ row }) => {
      const date = new Date(row.original.endTime);
      return <span>{format(
        date,
        "dd/MM/yyyy HH:mm"
      )}</span>
    },
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className={`line-clamp-1 ${convertStatusToColor(row.original.status)}`}>
          {row.original.status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "attendee",
    header: "Attendees",
  },
];

export const data: IRecord[] = [
  {
    id: 1,
    purpose: "ABC IProject Report Meeting",
    startTime: "2024-02-24T09:00:00",
    endTime: "2024-02-24T10:30:00",
    location: "Meeting Room A - 3rd Floor",
    status: "Completed",
    attendee: "Nguyen Van A, Tran Thi B, Le Van C"
  },
  {
    id: 2,
    purpose: "Developer Position Interview",
    startTime: "2024-02-24T14:00:00",
    endTime: "2024-02-24T15:00:00",
    location: "Interview Room - 2nd Floor",
    status: "In Progress",
    attendee: "Pham Thi D (HR), Le Van E (Tech Lead)"
  },
  {
    id: 3,
    purpose: "New Operations Training",
    startTime: "2024-02-25T08:30:00",
    endTime: "2024-02-25T11:30:00",
    location: "Training Room - 5th Floor",
    status: "Scheduled",
    attendee: "All CNS Department Staff"
  },
  {
    id: 4,
    purpose: "Sprint Review with Client",
    startTime: "2024-02-25T15:00:00",
    endTime: "2024-02-25T16:00:00",
    location: "Google Meet",
    status: "Scheduled",
    attendee: "DEV Team, PM, Client"
  },
  {
    id: 5,
    purpose: "Q1/2024 Summary",
    startTime: "2024-02-26T13:30:00",
    endTime: "2024-02-26T15:30:00",
    location: "Main Hall - 1st Floor",
    status: "Scheduled",
    attendee: "Leadership, Department Heads"
  },
  {
    id: 6,
    purpose: "New Technology Workshop",
    startTime: "2024-02-26T09:00:00",
    endTime: "2024-02-26T12:00:00",
    location: "Workshop Room - 4th Floor",
    status: "Canceled",
    attendee: "CNS Department, R&D Department"
  },
  {
    id: 7,
    purpose: "Weekly Coordination Meeting",
    startTime: "2024-02-27T08:00:00",
    endTime: "2024-02-27T09:00:00",
    location: "Meeting Room B - 3rd Floor",
    status: "Scheduled",
    attendee: "Department Heads"
  },
  {
    id: 8,
    purpose: "New Product Demo",
    startTime: "2024-02-27T14:00:00",
    endTime: "2024-02-27T16:00:00",
    location: "Demo Room - 2nd Floor",
    status: "Scheduled",
    attendee: "Product Team, Marketing Team, Potential Clients"
  },
  {
    id: 9,
    purpose: "New Employee Onboarding",
    startTime: "2024-02-28T09:00:00",
    endTime: "2024-02-28T12:00:00",
    location: "Training Room - 5th Floor",
    status: "Scheduled",
    attendee: "HR, New Employees, Mentors"
  },
  {
    id: 10,
    purpose: "Emergency Meeting on System Issues",
    startTime: "2024-02-28T16:00:00",
    endTime: "2024-02-28T17:00:00",
    location: "Meeting Room C - 3rd Floor",
    status: "Scheduled",
    attendee: "Technical Team, Support Team, Leadership"
  }
];

export const statistics = [
  {
    title: "Total",
    value: 100,
    trend: 10,
    footer: "Appointments booked from the beginning until now",
  },
  {
    title: "This Month",
    value: 50,
    trend: -10,
    footer: "Appointments booked this month",
  },
  {
    title: "Outstanding Department",
    value: "CNS",
    trend: null,
    footer: "Has the highest number of appointments",
  }
]