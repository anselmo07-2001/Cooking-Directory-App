import style from "../myStyles/ShortRecipeCard.module.css"

const ShortRecipeCard = (props) => {
    const {foodName, cookingTime, description } = props.recipe

    return (
        <div className={style.card}>
            <div className="d-flex flex-column justify-content-between h-100">
                <div>
                    <h3 className={style.cardHeading}>{foodName}</h3>
                    <div className={style.cookingTime}>{cookingTime} minutes to make</div>
                    <div className={style.cookingDesc}>{description}</div>
                </div>
                <button className={`${style.cardBtn}`}>Cook this</button>
            </div>
        </div>
    )
}

export default ShortRecipeCard