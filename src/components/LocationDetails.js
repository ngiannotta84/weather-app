import React from "react";
import PropTypes from "prop-types";

function LocationDeatails(props) {
  const { city, country } = props;
  return <h1>{`${city}, ${country}`}</h1>;
}
LocationDetails.propTypes = {
city: PropTypes.string,
country: PropTypes.string,
};

export default LocationDeatails;
