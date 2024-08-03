import React from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {Link} from "react-router-dom";

export default function Recipe({recipe}) {
  return (
    recipe && (
      <article className={style.recipe}>
        <Link to={"/" + recipe.id}>
          <div className={style.imageWrapper}>
            <img src={recipe.image} alt={recipe.name} />
          </div>
          <h4 className={style.recipeTitle}>{recipe.name}</h4>
          <p className={style.recipeDetails}>
            {recipe.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </p>
        </Link>
      </article>
    )
  );
}
