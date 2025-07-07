import { format, toZonedTime } from "date-fns-tz";

export function utcToWib(date: string) {
  const timeZone = "Asia/Jakarta";
  const zonedDate = toZonedTime(date, timeZone);
  const formatted = format(zonedDate, "HH:mm - dd/MM/yyyy", { timeZone });

  return formatted;
}

export function textTime(date: string) {
  const timeZone = "UTC";
  const zonedDate = toZonedTime(date, timeZone);
  const formatted = format(zonedDate, "HH:mm:ss - dd/MM/yyyy", { timeZone });

  return formatted;
}

export function isoToTime(date: string) {
  const timeZone = "UTC";
  const zonedDate = toZonedTime(date, timeZone);
  const formatted = format(zonedDate, "HH:mm", { timeZone });

  return formatted;
}

export function dateToYYYYMMDD(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // bulan dari 0–11
  const dd = String(date.getDate()).padStart(2, "0");

  const formatted = `${yyyy}-${mm}-${dd}`;

  return formatted;
}
