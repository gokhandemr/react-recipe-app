import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk("fetchRecipes", async (params) => {
  let response;
  if (params !== undefined) {
    if (params.type === "meal") {
      response = await fetch(`https://dummyjson.com/recipes/meal-type/${params.name}`).then((res) => res.json());
    } else if (params.type === "countries") {
      response = await fetch(`https://dummyjson.com/recipes/tag/${params.name}`).then((res) => res.json());
    } else if (params.type === "search") {
      response = await fetch(`https://dummyjson.com/recipes/search?q=${params.name}`).then((res) => res.json());
    }
  } else {
    response = await fetch("https://dummyjson.com/recipes").then((res) => res.json());
  }

  return response.recipes;
});

const initialState = {
  value: [],
  isLoading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchRecipes.rejected, (state) => {
      state.isLoading = true;
      console.log("Rejected Error: recipesSlice.jsx");
    });
  },
});

export default recipesSlice.reducer;
