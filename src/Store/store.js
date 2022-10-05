import { configureStore } from "@reduxjs/toolkit";

import RecipesSlice from "../Slices/RecipesSlice";
import ColorTheme from "../Slices/ColorTheme";
import SearchRecipe from "../Slices/SearchRecipe";

const store = configureStore({
    reducer: {
        recipe: RecipesSlice,
        colorTheme : ColorTheme,
        searchRecipe : SearchRecipe
    }
})


export default store