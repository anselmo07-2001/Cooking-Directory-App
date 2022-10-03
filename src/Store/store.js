import { configureStore } from "@reduxjs/toolkit";

import RecipesSlice from "../Slices/RecipesSlice";
import ColorTheme from "../Slices/ColorTheme";

const store = configureStore({
    reducer: {
        recipe: RecipesSlice,
        colorTheme : ColorTheme
    }
})


export default store