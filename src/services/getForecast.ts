import { FORECAST, httpGet } from "../utils/rest"

export const getForecast = async ({lat, long}:{lat:number, long:number}) => {
    const queryUrl = FORECAST({lat,long })
    const result = await httpGet(queryUrl)
    return result
}