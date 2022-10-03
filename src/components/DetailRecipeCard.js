import style from "../myStyles/DetailRecipeCard.module.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"



const renderDetailRecipeCard = (recipeItems, recipeId) => {
    const [ recipeItem ] = recipeItems.filter(recipeItem => recipeItem.id === recipeId)
    
    return (
        <div className="container">
            <div className={`${style.recipeCardContainer} bg-white mt-4`}>
                <div className="detailCardBody px-4 pt-5 pb-4 text-secondary">
                    <div className="text-center mb-3">
                        <h1 className="mb-4 text-dark">{recipeItem.foodName}</h1>
                        <div>Take {recipeItem.cookingTime} minute to cook</div>
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
    const recipeItems = useSelector(recipe => recipe.recipe);

    return renderDetailRecipeCard(recipeItems, recipeId)
}

export default DetailRecipeCard

