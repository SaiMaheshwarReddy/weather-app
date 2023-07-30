import * as React from "react";

export const ForecastDataContext = React.createContext<{setForeCastData: Function, forecastData: object} | object>({});

export const ForecastProvider = ({ children }) => {
  const [forecastData, setForeCastData] = React.useState<null | any>(null);
  const [locationDetails, setLocationDetails] = React.useState()

  return (
    <ForecastDataContext.Provider
      value={{
        forecastData,
        setForeCastData,
        locationDetails,
        setLocationDetails
      }}
    >
      {children}
    </ForecastDataContext.Provider>
  );
};
