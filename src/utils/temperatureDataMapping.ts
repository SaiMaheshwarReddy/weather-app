import Clear from "../assets/Clear.png";
import Hail from "../assets/Hail.png";
import HeavyCloud from "../assets/HeavyCloud.png";
import HeavyRain from "../assets/HeavyRain.png";
import LightCloud from "../assets/LightCloud.png";
import LightRain from "../assets/LightRain.png";
import Shower from "../assets/Shower.png";
import Sleet from "../assets/Sleet.png";
import Snow from "../assets/Snow.png";
import Thunderstorm from "../assets/Thunderstorm.png";

const temperatureDataMapping = [
  {
    name: "Clear",
    min: { c: 20, f: 68 },
    max: { c: 35, f: 95 },
    img: LightCloud,
  },
  {
    name: "Thunderstorm",
    min: { c: 15, f: 59 },
    max: { c: 30, f: 86 },
    img: Thunderstorm,
  },
  {
    name: "Snow",
    min: { c: -5, f: 23 },
    max: { c: 5, f: 41 },
    img: Snow,
  },
  {
    name: "Sleet",
    min: { c: -2, f: 28 },
    max: { c: 2, f: 35 },
    img: Sleet,
  },
  {
    name: "Shower",
    min: { c: 10, f: 50 },
    max: { c: 25, f: 77 },
    img: Shower,
  },
  {
    name: "Hail",
    min: { c: -10, f: 14 },
    max: { c: -50, f: -58 },
    img: Hail,
  },

  {
    name: "Heavy Cloud",
    min: { c: 10, f: 50 },
    max: { c: 25, f: 77 },
    img: HeavyCloud,
  },
  {
    name: "Heavy Rain",
    min: { c: 15, f: 59 },
    max: { c: 30, f: 86 },
    img: HeavyRain,
  },
  {
    name: "Light Cloud",
    min: { c: 15, f: 59 },
    max: { c: 25, f: 77 },
    img: LightCloud,
  },
  {
    name: "Light Rain",
    min: { c: 10, f: 50 },
    max: { c: 25, f: 77 },
    img: LightRain,
  },

];

const weatherCodeDate = {
0: {
  name: "Clear",
  img: Clear,
},
1: {
  name: "Clear",
  img: Clear,
},
2: {
  name: "partly Cloudy",
  img: LightCloud
}, 
3: {
  name: "Overcast",
  img: HeavyCloud
},
45: {
  name: "Fog",
  img: Snow,
},
48: {
  name: "Fog",
  img: Snow,
},
51: {
  name: "Light Drizzle",
  img: LightRain
},
53: {
  name: "Moderate Drizzle",
  img: LightRain
},
55: {
  name: "Dense Drizzle",
  img: LightRain
}
}

export function getCurrentTemperature(temp:number) {
  const filteredData = temperatureDataMapping.filter((el) => {
    const { min, max } = el;
    const isBetween = temp >= min.c && temp <= max.c;
    return isBetween;
  });
  return filteredData;
}

export function getInBetweenTemp(minTemp:number,maxTemp:number) {
  const filteredData = temperatureDataMapping.filter((el) => {
    const { min, max } = el;
    const isBetween = minTemp >= min.c && maxTemp <= max.c;
    return isBetween;
  });
  return filteredData;
}

