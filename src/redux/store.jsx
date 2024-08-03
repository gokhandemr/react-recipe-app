import {configureStore} from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice";
import recipeReducer from "./slices/recipeSlice";
import themeReducer from "./slices/themeColorSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    recipe: recipeReducer,
    theme: themeReducer,
    search: searchReducer,
  },
});