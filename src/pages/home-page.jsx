import React, {useEffect} from "react";
// Components
import Banner from "../components/banner";
import Categories from "../components/categories";
import Recipes from "../components/recipes";
import Loading from "../components/loading";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipes} from "../redux/slices/recipesSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.value);
  const isLoading = useSelector((state) => state.recipes.isLoading);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  // SEO
  document.title = "Vite + React | Recipe App";
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Banner recipes={recipes && recipes.slice(1, 7)} />
          <Categories />
          <main>
            <Recipes recipes={recipes && recipes.slice(0, 6)} title={"Latest Recipes"} />
            <Recipes recipes={recipes && recipes.slice(7, 13)} title={"Most Popular Ones"} />
            <Recipes recipes={recipes && recipes.slice(13, 19)} title={"Super Delicious"} />
          </main>
        </>
      )}
    </>
  );
}
