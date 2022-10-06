import PropTypes from "prop-types";
import css from "./Category.module.css";

export const Category = ({ strCategoryThumb, strCategory }) => {
  return (
    <li className={css.category}>
      <a className={css.link} href={strCategory}>
        <img
          className={css.image}
          src={strCategoryThumb}
          alt={strCategory}
          width="160px"
          height="100px"
        />
        <p className={css.name}>{strCategory}</p>
      </a>
    </li>
  );
};

Category.propTypes = {
  strCategoryThumb: PropTypes.string.isRequired,
  strCategory: PropTypes.string.isRequired,
};
