import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchRecipeById = createAsyncThunk("fetchRecipeById", async (id) => {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`).then((res) => res.json());
  return response;
});

const initialState = {
  value: {},
  isLoading: false,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecipeById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
    builder.addCase(fetchRecipeById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRecipeById.rejected, (state) => {
      state.isLoading = true;
      console.log("Servis Hatası");
    });
  },
});

export default recipeSlice.reducer;
