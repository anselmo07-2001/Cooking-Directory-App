import { createSlice } from "@reduxjs/toolkit";

const ColorTheme = createSlice({
    name: "colorTheme",
    initialState: {
        navbarTheme : "purple",
        mainTheme : "light"
    },
    reducers: {
        changeNavColorTheme(state,payload) {
           return {
              ...state, navbarTheme : payload.payload
           }
        },
        changeLightDarkTheme(state,payload) {
            return {
                ...state, mainTheme : payload.payload
            }
        }
    }
})

export const ColorThemeAction = ColorTheme.actions
export default ColorTheme.reducer