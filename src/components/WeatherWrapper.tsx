import { useState } from "react";
import WeatherForm from "./WeatherForm";
import Weather from "./Weather";

import { BiSolidError } from "react-icons/bi";

interface data {
  days: [];
}

const WeatherWrapper = () => {
  const [data, setData] = useState<data>({
    days: [],
  });
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);

  const searchCountry = async (country: string) => {
    setFetchingData(true);
    setError(false);

    try {
      const apiKey = "GTHP2L6SZACBVC27C7ZUCGBCL";
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${country}/today?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setCountry(data.resolvedAddress);
      setData(data);
    } catch {
      setError(true);
    }
    setFetchingData(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div>
        <div className="shadow-2xl p-4 text-center w-80 rounded-2xl">
          <WeatherForm search={searchCountry} isFetchingData={fetchingData} />
          <p className=" text-red-700 mt-1">
            {error && (
              <div className="flex justify-center">
                <BiSolidError className=" text-2xl" />
                Invalid Country
              </div>
            )}
          </p>
        </div>
        {data.days.map((days, index) => (
          <Weather days={days} key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default WeatherWrapper;
