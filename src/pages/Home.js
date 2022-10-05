
import { useSelector } from "react-redux/es/exports"
import MainContainer from "../components/MainContainer"
import ShortRecipeCard from "../components/ShortRecipeCard"

const renderRecipeCard = (recipes,searchRecipe) => {

    if (searchRecipe.inputtedSearch !== "") {
        console.log("hit")
        return searchRecipe.resultSearch.map(recipe => {
            return (
               <div className="col-md-4 col-sm-6 g-4">
                   <ShortRecipeCard recipe={recipe} key={recipe.id} />
               </div>
            )
       })
    }


    if (!recipes) return

    return recipes.map(recipe => {
         return (
            <div className="col-md-4 col-sm-6 g-4">
                <ShortRecipeCard recipe={recipe} key={recipe.id} />
            </div>
         )
    })
}


const Home = () => {
    const recipes = useSelector(state => state.recipe)
    const searchRecipe = useSelector(state => state.searchRecipe)
    

    return (
        <MainContainer>
              <div className="container">
                 <div className="row">
                      {renderRecipeCard(recipes, searchRecipe)}
                 </div>
              </div>
        </MainContainer>
    )
}

export default Home