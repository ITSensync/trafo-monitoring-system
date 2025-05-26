import { format, toZonedTime } from "date-fns-tz";

export function utcToWib(date: string) {
  const timeZone = "Asia/Jakarta";
  const zonedDate = toZonedTime(date, timeZone);
  const formatted = format(zonedDate, "HH:mm:ss - dd/MM/yyyy", { timeZone });

  return formatted;
}

export function textTime(date: string) {
  const timeZone = "UTC";
  const zonedDate = toZonedTime(date, timeZone);
  const formatted = format(zonedDate, "HH:mm:ss - dd/MM/yyyy", { timeZone });

  return formatted;
}
