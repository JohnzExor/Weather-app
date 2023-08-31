import { motion } from "framer-motion";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useState, useEffect } from "react";
import WeatherDetails from "./WeatherDetails";

interface WeatherData {
  days: [];
}

const GetWeatherDetails = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    days: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const [Address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const apiKey = "GTHP2L6SZACBVC27C7ZUCGBCL";
        const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/palawan?unitGroup=metric&include=current&key=${apiKey}&contentType=json`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setAddress(data.resolvedAddress);
        setWeatherData(data);
      } catch {
        console.log("Error");
      }
      setIsLoading(false);
    };

    getWeatherData();
  }, []);
  return (
    <div className="h-screen text-center">
      {isLoading ? (
        <AiOutlineLoading3Quarters className="m-auto top-2/4 left-2/4 absolute text-2xl animate-spin" />
      ) : (
        <motion.div
          animate={{ y: [250, 0] }}
          transition={{ duration: 3, delay: 2, ease: "easeOut" }}
        >
          <h1 className="mt-20 mb-10 text-7xl">{Address}</h1>
          {weatherData.days.map((days, index) => (
            <WeatherDetails days={days} key={index} index={index} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default GetWeatherDetails;
