import { httpGet } from "../utils/rest"

export const searchLocation = async (locationName : string) => {
const res = await httpGet(`https://geocoding-api.open-meteo.com/v1/search?name=${locationName}&count=10&language=en&format=json`)
return res
}