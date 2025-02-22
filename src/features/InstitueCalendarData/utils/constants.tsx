import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { formatISODate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";
import { z } from "zod";

export const columns: ColumnDef<IRecord>[] = [
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
    accessorKey: "iso_datetime",
    header: "Date",
    cell: ({ row }) => (
      <span>{formatISODate(row.original.iso_datetime)}</span>
    )
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "attendees",
    header: "Attendees",
  },
  {
    accessorKey: "preparation",
    header: "Preparation",
  },
];


export const formSchema = z.object({
    files: z
        .instanceof(FileList)
        .refine(
            (files) =>
                files.length > 0 && files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            {
                message: "Please select a.docx file",
            },
        ),
})