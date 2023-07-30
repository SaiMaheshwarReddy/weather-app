import React, { useContext } from 'react'
import Card from './Card'
import { ForecastDataContext } from '../context';
import {DateTime} from "luxon"
import { getInBetweenTemp } from '../utils/temperatureDataMapping';

const WeeklyWeatherDetails = () => {
  const { forecastData, setForeCastData, locationDetails = {} } = useContext(ForecastDataContext);
const {temperature_2m_min = [], temperature_2m_max = [], time = []} = forecastData?.daily || {}
const minTemperatures = temperature_2m_min 
const maxTemperature = temperature_2m_max
const dates = time
  return (
    <div className='w-full flex justify-start px-8 items-center py-12 bg-black gap-6 flex-wrap'>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card className="self-start justify-self-start place-self-start" /> */}
        {dates?.map((el,i) => {
          const dt= DateTime.fromISO(el)
          const day = i === 0 ? "Tomorrow" : dt?.weekdayLong
          const minTemp = minTemperatures[i]
          const maxTemp = maxTemperature[i]
          const [currentDayTemp] = getInBetweenTemp(minTemp, maxTemp)
          return <Card key={i} day={day} minTemp={minTemp} maxTemp={maxTemp} image={currentDayTemp?.img} />
        })}
    </div>
  )
}

export default WeeklyWeatherDetails