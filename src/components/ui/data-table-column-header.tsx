"\"use client"

import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import type { Column } from "@tanstack/react-table"


interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({ column, title }: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className="text-sm font-medium">{title}</div>
  }

  return (
    <div onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="cursor-pointer flex gap-2 items-center w-full">
      <span>{title}</span>
      {column.getIsSorted() === "desc" ? (
        <ArrowDownIcon className=" size-4" />
      ) : column.getIsSorted() === "asc" ? (
        <ArrowUpIcon className=" size-4" />
      ) : null}
    </div>
  )
}

