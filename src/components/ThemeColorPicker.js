import style from "../myStyles/ThemeColorPicker.module.css"

const ThemeColorPicker = () => {
    return (
        <div class={style.colorPicker}>
            <div class={style.colorPurple}></div>
            <div class={style.colorGreen}></div>
            <div class={style.colorRed}></div>
        </div>
    )
}

export default ThemeColorPicker;