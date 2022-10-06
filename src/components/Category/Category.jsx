import PropTypes from "prop-types";

export const Category = ({ strCategoryThumb, strCategory }) => {
  return (
    <li>
      <a href={strCategory}>
        <img src={strCategoryThumb} alt={strCategory} />
        <p>{strCategory}</p>
      </a>
    </li>
  );
};

Category.propTypes = {
  strCategoryThumb: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
