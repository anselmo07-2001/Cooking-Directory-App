import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { AiFillEdit } from "react-icons/ai"
import { Link } from "react-router-dom"

import style from "../myStyles/ShortRecipeCard.module.css"
import EditRecipeCardModal from "./EditRecipeCardModal"
import { RecipeActions } from "../Slices/RecipesSlice"




const getCurrentFontColorTheme = (currentDarkLightThemeValue) => {
    if (currentDarkLightThemeValue === "light") {
        return style.card_fc_lightBg
    }

    if (currentDarkLightThemeValue === "dark") {
        return style.card_fc_darkBg
    }
}





const ShortRecipeCard = (props) => {
    const {foodName, cookingTime, description, id} = props.recipe
    const currentDarkLightThemeValue = useSelector(state => state.colorTheme.mainTheme)
    const dispatch = useDispatch()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const handleRemoveCard = () => {
        dispatch(RecipeActions.deleteRecipe(id))
    }

    const handleEditRecipeCard = () => {
        setIsEditModalOpen(!isEditModalOpen)
    }

    


    return (
        <div className={`${style.card} ${getCurrentFontColorTheme(currentDarkLightThemeValue)}`}>
            <div className='d-flex flex-column justify-content-between h-100'>
                <div>
                    <div className={`${style.operations} d-flex align-items-center gap-3`}>
                        <div onClick={handleEditRecipeCard} 
                             className="d-flex justify-content-center align-items-center"
                             style={{paddingTop:"1.5px"}}>
                                  <AiFillEdit size={"1rem"} style={{cursor:"pointer"}}/>
                        </div>
                        <div className={style.removeBtn} onClick={handleRemoveCard}>X</div>
                    </div>
                    <h3 className={`${style.cardHeading} mt-2`}>{foodName}</h3>
                    <div className={
                            `${style.cookingTime}
                             ${currentDarkLightThemeValue === "light" ? style.sub_head_fc_dark : style.sub_head_fc_light}
                            `
                        }>{cookingTime} minutes to make</div>
                    <div className={style.cookingDesc}>{description}</div>
                </div>
                <Link to={`/recipe/${id}`}>
                     <button className={`${style.cardBtn}
                                         ${currentDarkLightThemeValue === "light" ? style.cardBtn_darkTheme : style.cardBtn_LightTheme}
                                        `
                        }>Cook this</button>
                </Link>
            </div>

            {isEditModalOpen ? <EditRecipeCardModal setIsEditModalOpen={setIsEditModalOpen} recipeId={id}/> : ""}
        </div>
    )
}

export default ShortRecipeCard