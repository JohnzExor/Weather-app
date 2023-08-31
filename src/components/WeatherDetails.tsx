import { motion } from "framer-motion";

interface details {
  datetime: string;
  tempmax: string;
  tempmin: string;
  description: string;
}

interface WeatherDetails {
  days: details;
  index: number;
}

const WeatherDetails = ({ days, index }: WeatherDetails) => {
  const delay = index * 0.6;
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="mt-4 mb-2 w-96 p-4 rounded-2xl shadow-2xl"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2, delay: delay, ease: "easeOut" }}
      >
        <h1 className=" text-2xl font-bold">{days.datetime}</h1>
        <h1 className="font-bold">Min and Max Temperature</h1>
        <div>
          <p>{days.tempmin + "-" + days.tempmax}</p>
        </div>
        <p>{days.description}</p>
      </motion.div>
    </div>
  );
};

export default WeatherDetails;
