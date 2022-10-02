import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice(
    {
        name: "recipes",
        initialState: [
            {
               id : 1,
               foodName: "Greek Salad",
               cookingTime: 35,
               ingredient: ["banana", "beans", "2 tuna"],
               description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
            },
            {
                id : 2,
                foodName: "Pizza Pie",
                cookingTime: 25,
                ingredient: ["bread", "soup", "beef"],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
             {
                id : 3,
                foodName: "Corn Dog",
                cookingTime: 15,
                ingredient: ["Dog", "corn", "butter"],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
             {
                id : 4,
                foodName: "Corn Dog",
                cookingTime: 15,
                ingredient: ["Dog", "corn", "butter"],
                description: "Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis Qui excepteur minim id incididunt consectetur eu ex ex esse sint nulla cillum labore nostrud. Pariatur reprehenderit nulla dolore magna reprehenderit. Pariatur veniam id labore duis."
             },
        ],
        reducers: {
            createRecipe(state,payload) {
                state.push(payload.payload)
            },
            readRecipe(state) {
                return state
            }
        }
    }
)


export const RecipeActions = RecipeSlice.actions
export default RecipeSlice.reducer
