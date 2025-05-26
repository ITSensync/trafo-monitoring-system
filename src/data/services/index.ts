import { MonitoringService } from "./MonitoringService";

export const monitoringService = new MonitoringService(
  `${process.env.API_URL}/monitoring`
);
