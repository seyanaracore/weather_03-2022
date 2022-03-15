import { getFetchApi } from "../Utils/constants";
import Api from "./Client";

export const getForecast = async (city) => {
   if (!city) return;

   const api = getFetchApi(city);
   return await Api.get(api);
};
