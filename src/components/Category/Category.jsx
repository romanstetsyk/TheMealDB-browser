import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./Category.module.css";

export const Category = ({ strCategoryThumb, strCategory }) => {
  return (
    <li className={css.category}>
      <Link className={css.link} to={strCategory.toLowerCase()}>
        <img
          className={css.image}
          src={strCategoryThumb}
          alt={strCategory}
          width="160px"
          height="100px"
        />
        <p className={css.name}>{strCategory}</p>
      </Link>
    </li>
  );
};

Category.propTypes = {
  strCategoryThumb: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
