import { MonitoringService } from "./MonitoringService";
import { TrafoService } from "./TrafoService";

export const monitoringService = new MonitoringService(
  `${process.env.API_URL}/monitoring`
);
export const trafoService = new TrafoService(
  `${process.env.API_URL}/trafo`
);
