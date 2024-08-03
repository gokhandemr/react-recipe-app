import React, {useEffect} from "react";
// Style
import style from "./style.module.css";
// Components
import Loading from "../../components/loading";
// Router DOM
import {useNavigate, useParams} from "react-router-dom";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipeById} from "../../redux/slices/recipeSlice";
import {unwrapResult} from "@reduxjs/toolkit";

export default function RecipePage() {
  const params = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe.value);
  const isLoading = useSelector((state) => state.recipe.isLoading);
  const isDark = useSelector((state) => state.theme.isDark);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRecipeById(params.id))
      .then(unwrapResult)
      .then((response) => !response.name && navigate("/"))
      .catch((err) => console.log(err));
  }, []);

  // SEO
  document.title = recipe.name && recipe.name;

  return recipe && isLoading ? (
    <Loading />
  ) : (
    <main className={isDark ? style.darkTheme : ""}>
      <h2 className={style.recipeName}>{recipe.name}</h2>
      <div className={style.recipeDetails}>
        <p>
          <span className="material-symbols-outlined">cooking</span> {recipe.cookTimeMinutes} mins
        </p>
        <p>
          <span className="material-symbols-outlined">schedule</span> {recipe.prepTimeMinutes} mins
        </p>
        <p>
          <span className="material-symbols-outlined">nutrition</span> {recipe.caloriesPerServing} calories
        </p>
        <p>
          <span className="material-symbols-outlined">star</span> {recipe.rating} rating
        </p>
      </div>
      <div className={style.recipeWrapper}>
    
      <img className={style.responsiveImage} src={recipe.image} alt={recipe.name} />

        <div className={style.ingredients}>
          <h3>
            <span className="material-symbols-outlined">grocery</span> Ingredients
          </h3>
          <ul>{recipe.ingredients && recipe.ingredients.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
        <img src={recipe.image} alt={recipe.name} />
        <div className={style.instructions}>
          <h3>
            <span className="material-symbols-outlined">menu_book</span> Instructions
          </h3>
          <ul>{recipe.instructions && recipe.instructions.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </div>
      </div>
    </main>
  );
}
