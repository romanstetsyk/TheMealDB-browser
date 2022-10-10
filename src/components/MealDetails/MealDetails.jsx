import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const MealDetails = () => {
  const { idMeal } = useParams();

  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(data => data.json())
      .then(json => {
        console.log(json.meals[0]);
        setMeal(json.meals[0]);
      });
  }, []);

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <p>Cuisine: {meal.strArea}</p>
      <h2>Ingredients</h2>
      {Array.from({ length: 20 }, (_, i) => i + 1).map(
        n =>
          meal[`strIngredient${n}`] && (
            <p key={n}>
              {meal[`strIngredient${n}`]}: {meal[`strMeasure${n}`]}
            </p>
          )
      )}
      <h2>Instructions</h2>
      <p>{meal.strInstructions}</p>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
    </div>
  );
};
