import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";

export const columns: ColumnDef<IRecord>[] = [
  {
    accessorKey: "role",
    header: "Vai trò",
  },
  {
    accessorKey: "count",
    header: "Số lượng người dùng",
  },
];

export const data: IRecord[] = [
  {
    role: "Khách",
    count: 50,
  },
  {
    role: "Cán bộ",
    count: 100,
  },
  {
    role: "Sinh viên",
    count: 50,
  },
];

export const statistics = [
  {
    title: "Verify Identity",
    value: 80,
    trend: 10,
    footer: "People have verified their identity through Kiosk",
  },
  {
    title: "Check In",
    value: 60,
    trend: -10,
    footer: "Student have checked in through Kiosk",
  }
]