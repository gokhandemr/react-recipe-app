import React, {useEffect} from "react";
// Router DOM
import {useParams} from "react-router-dom";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipes} from "../redux/slices/recipesSlice";
import {unwrapResult} from "@reduxjs/toolkit";
// Components
import Recipes from "../components/recipes";
import Loading from "../components/loading";

export default function RecipesListPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.value);
  const isLoading = useSelector((state) => state.recipes.isLoading);

  useEffect(() => {
    dispatch(fetchRecipes(params))
      .then(unwrapResult)
      .then((response) => !response && navigate("/"))
      .catch((err) => console.log(err));
  }, [params]);

  // SEO
  document.title = params && params.name.charAt(0).toUpperCase() + params.name.slice(1);

  return recipes && isLoading ? (
    <Loading />
  ) : (
    <main>
      <Recipes recipes={recipes} title={params.name} />
    </main>
  );
}
