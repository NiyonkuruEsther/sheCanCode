import { useContext } from "react";
import { CountriesContext } from "../../pages/Main";

const Search = () => {
  const { setCountries } = useContext(CountriesContext);
  return (
    <div>
      <label
        className="text-gray-950 relative bg-white min-w-sm max-w-md flex flex-col md:flex-row items-center justify-center border-4 border-white py-1 px-2 rounded-2xl gap-2 shadow-2xl  focus-within:border-blue-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Your keyword here"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          onChange={(e) => {
            setCountries((current) => {
              return {
                ...current,
                searchKeyWord: e.target.value
              };
            });
          }}
        />
      </label>
    </div>
  );
};

export default Search;
