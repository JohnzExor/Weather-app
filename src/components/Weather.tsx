import { motion } from "framer-motion";

interface weather {
  datetime: string;
  description: string;
}

interface Data {
  days: weather;
  country: string;
}

const Weather = ({ days, country }: Data) => {
  return (
    <motion.div
      animate={{ y: [50, 0] }}
      transition={{ ease: "easeOut", duration: 2 }}
      className=" shadow-2xl text-center w-80 rounded-lg"
    >
      <div className=" p-4">
        <h1 className=" text-2xl">{country}</h1>
        <h1 className=" font-bold mt-4">{days.datetime}</h1>
        <p>{days.description}</p>
      </div>
    </motion.div>
  );
};

export default Weather;
