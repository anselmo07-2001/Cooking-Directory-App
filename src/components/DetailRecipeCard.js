import style from "../myStyles/DetailRecipeCard.module.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"



const renderDetailRecipeCard = (recipeItems, recipeId, currentDarkLightThemeValue) => {
    const [ recipeItem ] = recipeItems.filter(recipeItem => recipeItem.id === recipeId)
    
    const switchLightDarkTheme = () => {
        return currentDarkLightThemeValue === "light" ? "text-dark" : "text-light"
    }

    return (
        <div className="container">
            <div className={`${style.recipeCardContainer}  mt-4 ${currentDarkLightThemeValue === "light" ? style.bgLight : style.bgDark}`}>
                <div className={`${switchLightDarkTheme()} detailCardBody px-4 pt-5 pb-4 text-secondary`}>
                    <div className="text-center mb-3">
                        <h1 className='mb-4'>{recipeItem.foodName}</h1>
                        <div> minute to cook</div>
                        <div>{recipeItem.ingredient.map(ing => ing.recipeIng).join(", ")}</div>
                    </div>
                    <div>{recipeItem.description}</div>
                </div>
            </div>
        </div>
    )
}



const DetailRecipeCard = () => {
    const { recipeId } = useParams()
    const recipeItems = useSelector(state => state.recipe);
    const currentDarkLightThemeValue = useSelector(state => state.colorTheme.mainTheme)


    return renderDetailRecipeCard(recipeItems, recipeId, currentDarkLightThemeValue)
}

export default DetailRecipeCard

