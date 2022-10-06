import PropTypes from "prop-types";
import { Category } from "../Category/Category";
import css from "./CategoryBoard.module.css";

export const CategoryBoard = ({ categories }) => {
  return (
    <section>
      <ul className={css.categoryBoard}>
        {categories.map(category => (
          <Category
            key={category.idCategory}
            strCategoryThumb={category.strCategoryThumb}
            strCategory={category.strCategory}
          />
        ))}
      </ul>
    </section>
  );
};

CategoryBoard.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.exact({
      idCategory: PropTypes.string.isRequired,
      strCategory: PropTypes.string.isRequired,
      strCategoryThumb: PropTypes.string.isRequired,
      strCategoryDescription: PropTypes.string.isRequired,
    })
  ),
};
