import { configureStore } from "@reduxjs/toolkit";

import RecipesSlice from "../Slices/RecipesSlice";

const store = configureStore({
    reducer: {
        recipe: RecipesSlice
    }
})


export default store