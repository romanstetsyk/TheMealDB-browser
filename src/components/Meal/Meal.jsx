import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./Meal.module.css";

export const Meal = ({ idCategory, strCategoryThumb, strCategory }) => {
  return (
    <li className={css.category}>
      <Link className={css.link} to={idCategory}>
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

Meal.propTypes = {
  strCategoryThumb: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
