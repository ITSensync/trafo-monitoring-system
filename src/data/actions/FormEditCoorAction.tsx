import { trafoService } from "../services";

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function editCoorAction(prevState: any, formData: FormData) {
  const rawLat = String(formData.get("lat"));
  const rawLng = String(formData.get("lng"));
  const requestBody = {
    lat: Number(rawLat.replace(",", ".")),
    lng: Number(rawLng.replace(",", ".")),
  };

  const trafoId = formData.get("id")?.toString();

  const responseData = await trafoService.update(
    trafoId ? trafoId : "",
    requestBody
  );

  if (!responseData) {
    return {
      ...prevState,
      isLoading: false,
      apiErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.status != 200) {
    return {
      ...prevState,
      isLoading: false,
      isError: true,
      apiErrors: {
        code: responseData.code,
        message: responseData.message,
      },
      message: "Failed to edit trafo data",
    };
  }

  return {
    isLoading: false,
    isSuccess: true,
    apiErrors: null,
    zodErrors: null,
    message: responseData.message,
  };
}
