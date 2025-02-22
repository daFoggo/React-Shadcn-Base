"use client"

import type { Row } from "@tanstack/react-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface DataTableViewDialogProps<TData> {
  row: Row<TData>
}

export function DataTableViewDialog<TData>({ row }: DataTableViewDialogProps<TData>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>View</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Details</DialogTitle>
          <DialogDescription>View item details.</DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div>
            <strong>Name:</strong> {row.getValue("name")}
          </div>
          <div>
            <strong>Description:</strong> {row.getValue("description")}
          </div>
          {/* Add more fields as needed */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

