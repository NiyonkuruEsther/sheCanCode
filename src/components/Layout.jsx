import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-950 text-white min-h-screen h-full">
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;
