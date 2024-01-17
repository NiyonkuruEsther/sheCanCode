import PropTypes from "prop-types";

const ImageCard = ({ flags, countryName }) => {
  return (
    <div className="w-full relative group">
      <img
        className="object-cover min-h-32 max-h-32 w-full object-center hover:brightness-[.2] after:content-[attr(before)]"
        src={flags.png}
        alt={flags.alt}
      />
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-sm bg-gray-200 text-black font-semibold">
        {countryName}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  flags: PropTypes.object,
  countryName: PropTypes.string
};

export default ImageCard;
