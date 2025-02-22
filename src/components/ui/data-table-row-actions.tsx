"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import type { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableEditDialog } from "./data-table-edit-dialog"
import { DataTableViewDialog } from "./data-table-view-dialog"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  canEdit: boolean
}

export function DataTableRowActions<TData>({ row, canEdit }: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex data-[state=open]:bg-muted p-0 size-8">
          <DotsHorizontalIcon className="size-4" />
          <span className="sr-only">Open actions menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DataTableViewDialog row={row} />
        {canEdit && (
          <>
            <DropdownMenuSeparator />
            <DataTableEditDialog row={row} />
            <DropdownMenuItem>
              <span className="text-destructive hover:text-destructive">Delete</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

