import PropTypes from "prop-types";

export const PageTitle = ({ text }) => {
  return <h1>{text}</h1>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
