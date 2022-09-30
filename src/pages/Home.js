
import { useSelector } from "react-redux/es/exports"

import MainContainer from "../components/MainContainer"
import ShortRecipeCard from "../components/ShortRecipeCard"

const renderRecipeCard = (recipes) => {
    if (!recipes) return

    return recipes.map(recipe => {
         return <ShortRecipeCard recipe={recipe} key={recipe.id} />
    })
}


const Home = () => {
    const recipes = useSelector(state => state.recipe)
    

    return (
        <MainContainer>
              <div className="hstack gap-4">
                 {renderRecipeCard(recipes)}
              </div>
        </MainContainer>
    )
}

export default Home