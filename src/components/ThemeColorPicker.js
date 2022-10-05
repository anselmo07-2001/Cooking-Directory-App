import { useDispatch } from "react-redux/es/exports"
import { useSelector } from "react-redux/es/exports"

import { ColorThemeAction } from "../Slices/ColorTheme"
import style from "../myStyles/ThemeColorPicker.module.css"
import lightDarkToggleBtn from "../assets/Dark-theme-svgrepo-com.svg"



const handleClickColorTheme = (e, dispatch) => {
    const clickedColorTheme = e.target.attributes[1].name

    if (clickedColorTheme === "data-colorpurple") {
        dispatch(ColorThemeAction.changeNavColorTheme("purple"))
    }

    if (clickedColorTheme === "data-colorgreen") {
        dispatch(ColorThemeAction.changeNavColorTheme("green"))
    }

    if (clickedColorTheme === "data-colorred") {
        dispatch(ColorThemeAction.changeNavColorTheme("red"))
    }
}

const handleClickToggleDarkLightTheme = (dispatch, currentDarkLightThemeValue) => {
    if (currentDarkLightThemeValue === "light") {
        dispatch(ColorThemeAction.changeLightDarkTheme("dark"))
    }

    if (currentDarkLightThemeValue === "dark") {
        dispatch(ColorThemeAction.changeLightDarkTheme("light"))
    }
}



const ThemeColorPicker = () => {
    const dispatch = useDispatch()
    const currentDarkLightThemeValue = useSelector(state => state.colorTheme.mainTheme)

    return (
        <div className="container d-flex justify-content-around align-items-center" style={{padding: "0 1rem"}}>
            <div>
                <svg className={style.lightDarkToggleBtn} width="24px" height="24px"
                     viewBox="0 0 24 24" version="1.1" 
                     fill={currentDarkLightThemeValue === "light" ? "black" : "white" } 
                     onClick={() => handleClickToggleDarkLightTheme(dispatch, currentDarkLightThemeValue)}>
                        <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20 L12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 Z" id="🎨-Color"></path>
                </svg>
            </div>
            <div class={style.colorPicker} onClick={(e) => handleClickColorTheme(e, dispatch)}>
                <div class={style.colorPurple} data-colorpurple></div>
                <div class={style.colorGreen} data-colorgreen></div>
                <div class={style.colorRed} data-colorred></div>
            </div>
        </div>
    )
}

export default ThemeColorPicker;