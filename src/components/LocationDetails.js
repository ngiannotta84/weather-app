import React from "react";
import PropTypes from "prop-types";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-details">{`${city}, ${country}`}</h1>
  );
}
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  errorMessage: PropTypes.string,
};

export default LocationDetails;
