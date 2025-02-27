export const convertStatusToColor = (status: string) => {
  switch (status) {
    case "Đã lên lịch":
      return "";
    case "Đang diễn ra":
      return "bg-violet-500/10 text-violet-500 border-violet-500";
    case "Đã hoàn thành":
      return "bg-green-500/10 text-green-500 border-green-500";
    case "Đã hủy":
      return "bg-red-500/10 text-red-500 border-red-500";
    default:
      return "";
  }
};
