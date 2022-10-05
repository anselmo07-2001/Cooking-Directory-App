import { createSlice } from "@reduxjs/toolkit"


const SearchRecipe = createSlice({
    name : "search",
    initialState : {
        inputtedSearch : "",
        resultSearch : []
    },
    reducers : {
        renderSearchRecipe(state, action) {
            return {...state, resultSearch : action.payload}
        },
        inputtedSearch(state, action) {
            return {...state,  inputtedSearch : action.payload}
        }
    }
})

export const SearchRecipeAction = SearchRecipe.actions
export default SearchRecipe.reducer