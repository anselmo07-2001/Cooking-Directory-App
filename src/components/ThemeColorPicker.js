import { useDispatch } from "react-redux/es/exports"

import { ColorThemeAction } from "../Slices/ColorTheme"
import style from "../myStyles/ThemeColorPicker.module.css"


const handleClickColorTheme = (e, dispatch) => {
    const clickedColorTheme = e.target.attributes[1].name

    if (clickedColorTheme === "data-colorpurple") {
        dispatch(ColorThemeAction.changeColorTheme("purple"))
    }

    if (clickedColorTheme === "data-colorgreen") {
        dispatch(ColorThemeAction.changeColorTheme("green"))
    }

    if (clickedColorTheme === "data-colorred") {
        dispatch(ColorThemeAction.changeColorTheme("red"))
    }
}



const ThemeColorPicker = () => {
    const dispatch = useDispatch()

    return (
        <div className="container">
            <div class={style.colorPicker} onClick={(e) => handleClickColorTheme(e, dispatch)}>
                <div class={style.colorPurple} data-colorpurple></div>
                <div class={style.colorGreen} data-colorgreen></div>
                <div class={style.colorRed} data-colorred></div>
            </div>
        </div>
    )
}

export default ThemeColorPicker;