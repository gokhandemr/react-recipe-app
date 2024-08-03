import React from "react";
// Components
import Recipe from "../recipe";
// Style
import style from "./style.module.css";

export default function Recipes({recipes, title}) {
  return (
    <>
      {title && <h4 className={style.recipesTitle}>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>}
      <div className={style.recipesList}>{recipes && recipes.map((recipe, index) => <Recipe key={index} recipe={recipe} />)}</div>
    </>
  );
}
