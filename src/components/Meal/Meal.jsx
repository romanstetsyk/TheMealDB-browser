import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import css from "./Meal.module.css";

export const Meal = ({ idMeal, strMealThumb, strMeal }) => {
  return (
    <li className={css.category}>
      <Link className={css.link} to={idMeal}>
        <img
          className={css.image}
          src={strMealThumb}
          alt={strMeal}
          width="160px"
          height="100px"
        />
        <p className={css.name}>{strMeal}</p>
      </Link>
    </li>
  );
};

Meal.propTypes = {
  idMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  strMeal: PropTypes.string.isRequired,
};
