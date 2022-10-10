// import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Category } from "components/Category/Category";
import css from "./CategoryBoard.module.css";

export const CategoryBoard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(data => data.json())
      .then(json => setCategories(json.categories));
  }, []);

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

// CategoryBoard.propTypes = {
//   categories: PropTypes.arrayOf(
//     PropTypes.exact({
//       idCategory: PropTypes.string.isRequired,
//       strCategory: PropTypes.string.isRequired,
//       strCategoryThumb: PropTypes.string.isRequired,
//       strCategoryDescription: PropTypes.string.isRequired,
//     })
//   ),
// };
