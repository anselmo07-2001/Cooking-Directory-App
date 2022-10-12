import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from "../myStyles/EditRecipeCardModal.module.css"
import { RecipeActions } from '../Slices/RecipesSlice';

const isInputNotValid = (validity) => {
    return validity ? style.not_valid : ""
}


const handleChange = (value, id, ingredients,  setInputIngredient) => {
    const [ ingredient ] = ingredients.filter(item => item.id === id)
    const updatedIngredient = {...ingredient, recipeIng : value}
    
    const updatedInputIngredients = ingredients.map(item => {
        if (item.id === id) {
            return updatedIngredient
        }
        return item
    })

    setInputIngredient(updatedInputIngredients)
}


const handleRemoveIng = (ingId, ingredients, setInputIngredient, isDeletingExtraListIng) => {
    if (ingredients.length <= 1 && isDeletingExtraListIng === false) return

    const updatedListIng = ingredients.filter((ing) => ing.id !== ingId)
    setInputIngredient(updatedListIng)
}


const renderListIngredients = (ingredients,setInputIngredient) => {

    return ingredients.map((ing => {
        return (
           <li key={ing.id}>
               <div className={`d-flex gap-2 ${style.ingredientItem}`}>
                   <input type="text" 
                          className={`${style.input} ${isInputNotValid(ing?.isError)}`}
                          style={{marginLeft: "0.4rem"}}
                          value={ing.recipeIng} 
                          onChange={e => handleChange(e.target.value, ing.id, ingredients, setInputIngredient)}/>
                    <span onClick={() => handleRemoveIng(ing.id, ingredients, setInputIngredient, false)} style={{cursor:"pointer"}}>X</span>
               </div>
           </li>
        )
   }))
}


const addAnotherIng = (e, inputIngredient, setInputIngredient) => {
    e.preventDefault()
    const newIng = {
        id : uuidv4(),
        recipeIng : ""
    }

    const updatedListIng = [...inputIngredient, newIng] 
    setInputIngredient(updatedListIng)
}

const getCurrentTheme = (currentColorTheme, styleOnlyColor) => {
    if (currentColorTheme === "purple") {
        return style.bgColor_purple
    }

    if (currentColorTheme === "green") {
        return style.bgColor_green
    }

    if (currentColorTheme === "red") {
        return style.bgColor_red
    }

    console.log(styleOnlyColor)
}


const EditRecipeCardModal = ({setIsEditModalOpen, recipeId}) => {

    const [ recipeData ] = useSelector(state => state.recipe.filter(item => item.id === recipeId))
    const { navbarTheme } = useSelector((state) => state.colorTheme)
   

    const dispatch = useDispatch()
    const {foodName, cookingTime, description, ingredient, id} = recipeData
    
    const [inputFoodName, setInputFoodName] = useState(foodName)
    const [inputCookingTime, setInputCookingTime] = useState(cookingTime)
    const [inputDescription, setInputDescription] = useState(description)
    const [inputIngredient, setInputIngredient] = useState(ingredient)

   const [isInputFoodNameError, setIsInputFoodNameError] = useState(false)
   const [isInputCookingTimeError, setIsInputCookingTimeError] = useState(false)
   const [isInputDescriptionError, setIsInputDescriptionError] = useState(false)


   const handleSaveEdit = () => {
      inputFoodName === "" ? setIsInputFoodNameError(true) : setIsInputFoodNameError(false)
      inputCookingTime === "" ? setIsInputCookingTimeError(true) : setIsInputCookingTimeError(false)
      inputDescription === "" ? setIsInputDescriptionError(true) : setIsInputDescriptionError(false)


      const listIng = inputIngredient.map(item => {
         if (item.recipeIng === "") {
             return {...item, isError : true}
         }

         return {...item, isError : false}
      }) 

      setInputIngredient(listIng)
   }

   useEffect(() => {
        // In first run this will be false because, there are no isError property yet
        // it only add isError property when we hit the save button, then after save, remove it
        const isListIngOkey = inputIngredient.every(ing => ing?.isError === false)
        
        if (isListIngOkey) {
            if (!isInputFoodNameError && !isInputCookingTimeError && 
                !isInputDescriptionError ) {

                   const listIngredients = inputIngredient.map(({isError, ...rest}) => {
                        return rest
                   })

                   const updatedRecipe = {
                      id : id,
                      foodName : inputFoodName,
                      cookingTime : inputCookingTime,
                      ingredient : listIngredients,
                      description : inputDescription
                   }

                   dispatch(RecipeActions.updateRecipe(updatedRecipe))
                   setIsEditModalOpen(false)
                 
            }
        }
        else {
            console.log("bad")
        }

       

   },[isInputFoodNameError, isInputCookingTimeError, isInputDescriptionError, inputIngredient ])



    
    

    return createPortal(
        <div className={style.portalContainer}>
            <div className={style.formContainer}>
                <div className={`${style.hideModal} ${getCurrentTheme(navbarTheme, {styleOnlyColor: true})} `} onClick={() => setIsEditModalOpen(false)}>X</div>
                <form className={`${style.formEdit} ${getCurrentTheme(navbarTheme)}`}>
                    <div>
                        <div className={style.inputGroup}>
                            <label htmlFor="foodName" className={style.label}>Food Name</label>
                            <input type="text" className={`${style.input} ${isInputNotValid(isInputFoodNameError)}`} id="foodName" value={inputFoodName} onChange={(e) => setInputFoodName(e.target.value)}/>
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cookingTime" className={style.label}>Time to cook</label>
                            <input type="number" id="cookingTime" className={`${style.input} ${isInputNotValid(isInputCookingTimeError)}`} value={inputCookingTime} onChange={(e) => setInputCookingTime(e.target.value)}/>
                        </div>

                        <div className='mb-3'>
                            <label className={`${style.label} mb-3`}>Ingredient</label>
                            <ol className="d-flex flex-column gap-1">
                                {renderListIngredients(inputIngredient, setInputIngredient)}
                            </ol>


                            <div>
                                <button className={`${style.editBtn} ${getCurrentTheme(navbarTheme)} ${style.addIngBtn}`}
                                        onClick={(e) => addAnotherIng(e, inputIngredient, setInputIngredient)}
                                        style={{fontSize: "0.8rem"}}
                                    >Add more ingredient</button>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor='recipeMethod' className={`${style.label} mb-2`}>Recipe Method</label>
                            <textarea style={{height : "65px"}} value={inputDescription}  
                                      onChange={(e) => setInputDescription(e.target.value)}
                                      className={`${isInputNotValid(isInputDescriptionError)} ${style.textarea}`}/>
                        </div>
                </div>
                </form>
            </div>

            <div className={style.saveEditBtn}>
                <button className={`${style.editBtn} ${style.saveBtn} ${getCurrentTheme(navbarTheme)} d-block mx-auto rounded-3`}
                        onClick={handleSaveEdit}
                    >Save</button>
            </div>
        </div>,
    document.querySelector("#editRecipeCardModal"))
}

export default EditRecipeCardModal