import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { DICEBEAR_API } from "@/utils/endpoints";
import { ColumnDef } from "@tanstack/react-table";
import ViewImage from "../components/ViewImage";
import { IRecord } from "../types/Record";

export const columns: ColumnDef<IRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
  },
  {
    accessorKey: "dob",
    header: "DOB",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "img",
    header: "Identification Image",
    cell: ({ row }) => <ViewImage row={row.original} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} canEdit={false} />,
  },
];

export const data: IRecord[] = [
  {
    id: "REC001",
    name: "Nguyen Van A",
    role: "Software Engineer",
    department: "Engineering",
    dob: "1990-05-15",
    gender: "male",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC002",
    name: "Tran Thi B",
    role: "Product Manager",
    department: "Product",
    dob: "1988-09-23",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC003",
    name: "Le Van C",
    role: "UI/UX Designer",
    department: "Design",
    dob: "1993-12-07",
    gender: "male",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC004",
    name: "Pham Thi D",
    role: "Business Analyst",
    department: "Business",
    dob: "1991-03-30",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC005",
    name: "Hoang Van E",
    role: "DevOps Engineer",
    department: "Engineering",
    dob: "1994-08-18",
    gender: "male",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC006",
    name: "Vo Thi F",
    role: "Marketing Specialist",
    department: "Marketing",
    dob: "1992-11-25",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC007",
    name: "Do Van G",
    role: "Frontend Developer",
    department: "Engineering",
    dob: "1995-02-14",
    gender: "male",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC008",
    name: "Nguyen Thi H",
    role: "HR Manager",
    department: "Human Resources",
    dob: "1989-07-20",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC009",
    name: "Tran Van I",
    role: "Backend Developer",
    department: "Engineering",
    dob: "1993-04-12",
    gender: "male",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC010",
    name: "Le Thi K",
    role: "Content Writer",
    department: "Marketing",
    dob: "1996-01-08",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  },
  {
    id: "REC011",
    name: "Pham Van L",
    role: "Data Analyst",
    department: "Data",
    dob: "1990-06-16",
    gender: "female",
    img: [
      DICEBEAR_API,
      DICEBEAR_API,
      DICEBEAR_API,
    ]
  }
];

export const statistics = [
  {
    title: "Total submitted",
    value: 200,
    trend: 10,
    footer: "People have submitted their identification data",
  },
]