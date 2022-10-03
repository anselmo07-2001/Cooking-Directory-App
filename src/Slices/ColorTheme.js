import { createSlice } from "@reduxjs/toolkit";

const ColorTheme = createSlice({
    name: "colorTheme",
    initialState: "purple",
    reducers: {
        changeColorTheme(state,payload) {
           return state.replace(state, payload.payload)
        }
    }
})

export const ColorThemeAction = ColorTheme.actions
export default ColorTheme.reducer