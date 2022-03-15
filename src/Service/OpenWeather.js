import { FETCH_API } from "../Utils/constants";
import Api from "./Client";

export const getForecast = async () => {
   return await Api.get(FETCH_API);
};
