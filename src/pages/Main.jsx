/* eslint-disable no-unused-vars */
import { useEffect, useState, createContext, useContext } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CountryCard from "../components/CountryCard";
import Menu from "../components/menu";

export const CountriesContext = createContext({
  countries: {},
  setOverdueBookCount: (countries) => {
    return countries;
  }
});

export function useCountriesContext() {
  return useContext(CountriesContext);
}

const Main = () => {
  const [countries, setCountries] = useState({
    countriesList: [],
    countriesPerPage: 10,
    searchKeyWord: "",
    filterBy: []
  });

  const contextValue = {
    countries,
    setCountries
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/${
            countries.searchKeyWord ? `name/${countries.searchKeyWord}` : "all"
          }`
        );
        setCountries((current) => ({
          ...current,
          countriesList: response.data
        }));
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [countries.searchKeyWord]);

  const gridCountriesList =
    countries.countriesPerPage === 10 || countries.countriesPerPage === 20
      ? "grid-cols-5"
      : "grid-cols-8";

  return (
    <CountriesContext.Provider value={contextValue}>
      <Layout>
        <div className="w-full mb-32 ">
          <Menu />
        </div>
        <div className="p-6 mb-12 flex flex-col gap-4 text-center items-center">
          <div>
            <h1 className="text-3xl font-bold m-0">Explore all countries</h1>
            <hr className="mt-3 " />
          </div>

          <p className="text-lg text-gray-300 w-4/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            cupiditate fuga possimus at iure iste impedit odio totam
            repudiandae. Omnis inventore itaque facilis ipsa. Expedita
            recusandae maiores iusto consequatur nam?
          </p>
        </div>
        <div
          className={` grid justify-items-center gap-8 ${gridCountriesList}`}
        >
          {
            countries.countriesList
              .filter((country) => {
                if (countries.filterBy.length > 0) {
                  return countries.filterBy.some(
                    (continent) => continent === country.continents[0]
                  );
                } else {
                  return true;
                }
              })
              // .slice(
              //   0,
              //   countries.countriesList.filter((country) => {
              //     if (countries.filterBy.length > 0) {
              //       return countries.filterBy.some(
              //         (continent) => continent === country.continents[0]
              //       );
              //     } else {
              //       return true;
              //     }
              //   }).length > 250
              //     ? 250
              //     : countries.countriesList.length
              // )
            .slice(0, countries.countriesPerPage)
            .map((country, index) => (
              <CountryCard key={index} country={country} />
            ))
          }
        </div>
        <div></div>
      </Layout>
    </CountriesContext.Provider>
  );
};

export default Main;
