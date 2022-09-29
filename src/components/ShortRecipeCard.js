import style from "../myStyles/ShortRecipeCard.module.css"

const ShortRecipeCard = () => {
    return (
        <div className={style.card}>
            <div className="">
                <h3 className={style.cardHeading}>Veggie Stew</h3>
                <div className={style.cookingTime}>45 minutes to make</div>
                <div className={style.cookingDesc}>Voluptate mollit dolor duis sint nulla culpa labore amet culpa nulla non.
                Voluptate mollit dolor duis sint nulla culpa labore amet culpa nulla non.
                </div>
                <button className={style.cardBtn}>Cook this</button>
            </div>
        </div>
    )
}

export default ShortRecipeCard