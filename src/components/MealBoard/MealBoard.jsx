import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Meal } from "components/Meal/Meal";
import css from "./MealBoard.module.css";

export const MealBoard = () => {
  const { category } = useParams();

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(data => data.json())
      .then(json => setList(json.meals));
  }, [category]);

  console.log(list);
  return (
    <section>
      <ul className={css.categoryBoard}>
        {list.map(meal => (
          <Meal
            key={meal.idMeal}
            idMeal={meal.idMeal}
            strMealThumb={meal.strMealThumb}
            strMeal={meal.strMeal}
          />
        ))}
      </ul>
    </section>
  );
};
