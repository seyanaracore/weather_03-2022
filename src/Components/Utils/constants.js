const API = "https://api.openweathermap.org/data/2.5/forecast?q=";
const CITY = "Kiev";
const LANG = "ru";
const KEY = "389eb97974330697184bd3cff5ac6def";
const TEMP_UNIT = "metric";

export const FETCH_API = `${API}${CITY}&lang=${LANG}&units=${TEMP_UNIT}&APPID=${KEY}`;
