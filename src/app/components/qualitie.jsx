import React from "react";
import PropTypes from "prop-types";
const Qualitie = ({ color, name }) => {
    return <li className={`badge m-2 bg-${color}`}>{name}</li>;
};
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Qualitie;
