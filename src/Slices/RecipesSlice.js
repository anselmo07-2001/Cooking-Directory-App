import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice(
    {
        name: "recipes",
        initialState: [
            {
               id : "1",
               foodName: "Greek Salad",
               cookingTime: 35,
               ingredient: [{id : 1, recipeIng : "banana" }, {id : 2, recipeIng : "soup" }, {id : 3, recipeIng : "before" },],
               description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
            },
            {
                id : "2",
                foodName: "Pizza Pie",
                cookingTime: 25,
                ingredient: [{id : 1, recipeIng : "banana" }, {id : 2, recipeIng : "soup" }, {id : 3, recipeIng : "before" },],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
             {
                id : "3",
                foodName: "Corn Dog",
                cookingTime: 15,
                ingredient: [{id : 1, recipeIng : "banana" }, {id : 2, recipeIng : "soup" }, {id : 3, recipeIng : "before" },],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
             {
                id : "4",
                foodName: "Corn Dog",
                cookingTime: 15,
                ingredient: [{id : 1, recipeIng : "banana" }, {id : 2, recipeIng : "soup" }, {id : 3, recipeIng : "before" },],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
        ],
        reducers: {
            createRecipe(state,action) {
                state.push(action.payload)
            },
            readRecipe(state) {
                return state
            },
            deleteRecipe(state, action) {
                return state.filter(state => state.id !== action.payload)
            }
        }
    }
)


export const RecipeActions = RecipeSlice.actions
export default RecipeSlice.reducer
