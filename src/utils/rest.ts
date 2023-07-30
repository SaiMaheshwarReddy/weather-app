import axios from "axios";
const BASE_URL = "https://api.open-meteo.com/v1/";
export const getLocationDetailsUrl = ({lat,long}) => {
return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
}

export const FORECAST = ({ lat, long }: { lat: number; long: number }) =>
  `forecast?latitude=${lat}&longitude=${long}&forecast_days=5&hourly=temperature_2m,relativehumidity_2m,pressure_msl,surface_pressure,visibility&daily=temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&windspeed_unit=mph&timezone=auto`;

// forecast?latitude=17.43&longitude=78.44&hourly=temperature_2m,relativehumidity_2m,pressure_msl,surface_pressure,visibility&current_weather=true"

export function httpGet(url: string) {
  return axios.get(BASE_URL + url);
}



