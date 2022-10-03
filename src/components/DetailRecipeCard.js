import style from "../myStyles/DetailRecipeCard.module.css"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"



const renderDetailRecipeCard = (recipeItems, recipeId) => {
    console.log(recipeItems,recipeId)
    const [ recipeItem ] = recipeItems.filter(recipeItem => recipeItem.id === recipeId)
    
    return (
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
    )
}



const DetailRecipeCard = () => {
    const { recipeId } = useParams()
    const recipeItems = useSelector(recipe => recipe.recipe);

    return (
       <p>{renderDetailRecipeCard(recipeItems, recipeId)}</p>
    )
}

export default DetailRecipeCard

{/* <div className={`${style.recipeCardContainer} bg-white mt-4`}>
            <div className="detailCardBody px-4 pt-5 pb-4 text-secondary">
                 <div className="text-center mb-3">
                    <h1 className="mb-4 text-dark">Greek Salad</h1>
                    <div>Take 25 minute to cook</div>
                    <div>ing, ing, ing, ing</div>
                 </div>

                 <div>In duis ipsum dolore labore exercitation Lorem mollit consectetur veniam magna consequat. Lorem cillum do non incididunt cupidatat dolore aliqua mollit sint officia in in. Cillum cillum id anim enim proident aliquip sint dolore amet excepteur ipsum. Eiusmod quis duis culpa commodo sint aliqua esse ut laboris. Ullamco exercitation quis eiusmod adipisicing quis deserunt reprehenderit aute quis consectetur deserunt excepteur. Cillum veniam qui exercitation cupidatat consectetur ut reprehenderit quis dolor sint cupidatat irure labore ipsum.</div>
            </div>
        </div> */}