import ImageCard from "./ImageCard";
import PropTypes from "prop-types";

const CountryCard = ({ country }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <ImageCard flags={country.flags} countryName={country.name.official} />
      <p className="">{country.name.common}</p>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.object
};

export default CountryCard;
