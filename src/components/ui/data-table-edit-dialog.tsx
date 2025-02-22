"use client"

import type { Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface DataTableEditDialogProps<TData> {
  row: Row<TData>
}

export function DataTableEditDialog<TData>({ row }: DataTableEditDialogProps<TData>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogDescription>After editing the item, click Save changes to save the changes.</DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue={row.getValue("name")} className="col-span-3" />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" defaultValue={row.getValue("description")} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

