/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CountryCard from "../components/CountryCard";

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          setCountries(response.data);
          console.log(response.data);
        });
    };

    fetchCountries();
  }, []);

  return (
    <Layout>
      <div className="p-6 mb-12 flex flex-col gap-4 text-center items-center">
        <h1 className="text-3xl font-bold m-0">Explore all countries</h1>
        <p className="text-lg text-gray-300 w-3/6">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate fuga possimus at iure iste impedit odio totam repudiandae. Omnis inventore itaque facilis ipsa. Expedita recusandae maiores iusto consequatur nam?
        </p>
      </div>
      <div className="grid grid-cols-6 justify-items-center gap-12">
        {countries.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </div>
      <div></div>
    </Layout>
  );
};

export default Main;
