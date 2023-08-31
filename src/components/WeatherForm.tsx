import React, { useState } from "react";

import { TbWorldSearch } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  search: (country: string) => void;
  isFetchingData: boolean;
}

const WeatherForm = ({ search, isFetchingData }: Props) => {
  const [country, setCountry] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    search(country);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1 className=" text-4xl">Weather App</h1>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search a country."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 rounded-2xl border-black border"
        />
        <button type="submit" className="p-2">
          {isFetchingData ? (
            <AiOutlineLoading3Quarters className="text-3xl animate-spin" />
          ) : (
            <TbWorldSearch className=" text-3xl" />
          )}
        </button>
      </div>
    </form>
  );
};

export default WeatherForm;
