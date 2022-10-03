import { useEffect, useState } from "react"
import { v4 as uuidv4} from "uuid"
import style from "../myStyles/AddRecipeForm.module.css"
import { RecipeActions } from "../Slices/RecipesSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const AddRecipeForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeMethod, setRecipeMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")

    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [listIngredients, setListIngredients] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState("")

    const [showError, setShowError] = useState(false)
    const [showErrorRecipeMethod, setShowErrorRecipeMethod] = useState(false)
    const [showErrorCookingTime, setShowErrorCookingTime] = useState(false)
    const [showErrorListIngredients, setShowErrorListIngredients] = useState(false)


    const handleAddRecipe = (e) => {
        e.preventDefault()

        if (!recipeTitle) {
            setShowError(true)
        }else {
            setShowError(false)
        }

        if (listIngredients.length === 0) {
            setShowErrorListIngredients(true)
        }
        else {
            setShowErrorListIngredients(false)
        }

        if (!recipeMethod) {
            setShowErrorRecipeMethod(true)
        }else {
            setShowErrorRecipeMethod(false)
        }

        if (!cookingTime) {
            setShowErrorCookingTime(true)
        }else {
            setShowErrorCookingTime(false)
        }


        if (recipeTitle && listIngredients.length !== 0 && recipeMethod && cookingTime) {
            

            dispatch(RecipeActions.createRecipe( {
                id : uuidv4(),
                foodName : recipeTitle,
                cookingTime : cookingTime,
                ingredient : listIngredients,
                description : recipeMethod
            }))

            setRecipeTitle("")
            setRecipeMethod("")
            setCookingTime("")
            setRecipeIngredients("")
            setListIngredients([])
            setCurrentIngredients("")

            navigate("/")
        }

    }

    const handleAddIngredients = (e) => {
        e.preventDefault()

        if (!recipeIngredients) return 

        
        setShowErrorListIngredients(false)
        setListIngredients(prev => [...prev, {id : uuidv4(), recipeIng : recipeIngredients}])  
        setRecipeIngredients("")
    }

    const handleRemoveIngredient = (id) => {
        const updatedList = listIngredients.filter(list => list.id !== id)

        if (updatedList.length === 0) {
            setShowErrorListIngredients(true)
        }

        setListIngredients(updatedList)
    }


    useEffect(() => {
       const listIng = listIngredients.map((list) => {
            return <span key={list.id} 
                         className={style.ingredient}
                         onClick={() => handleRemoveIngredient(list.id)}
                   >{list.recipeIng}</span>
       })

       setCurrentIngredients(listIng)
    },[listIngredients])


    return (
        <div className="container">
             <div className={style.formContainer}>
                 <form onSubmit={(e) => handleAddRecipe(e)}>
                      <h2 className="text-center mb-4">Add a new Recipe</h2>

                      <div className={style.formBody}>
                            <div className={style.inputGroup}>
                                <label>Recipe Title:</label>
                                <input type="text" 
                                       className={`${showError ? style.not_valid : ""}`}
                                       value={recipeTitle} 
                                       onChange={(e) => setRecipeTitle(e.target.value)}/>
                            </div>

                            <div className={style.inputGroup}>
                                <label>Recipe Ingredient:</label>
                                <div className="d-flex gap-2 mb-2 align-items-center">
                                    <input type="text"  value={recipeIngredients} 
                                                        onChange={(e) => setRecipeIngredients(e.target.value)}
                                                        className={`${showErrorListIngredients ? style.not_valid : ""}`}/>
                                    <button className={style.formButton} onClick={(e) => handleAddIngredients(e)}>Add</button>
                                </div>
                                <div class={`text-secondary ${style.currentIng}`}>Current Ingredient: {currentIngredients}</div>
                            </div>


                            <div className={style.inputGroup}>
                                <label>Recipe Method:</label>
                                <textarea type="text" value={recipeMethod} 
                                          onChange={(e) => setRecipeMethod(e.target.value)} 
                                          className={`${showErrorRecipeMethod ? style.not_valid : ""}`}/>
                            </div>

                            <div className={style.inputGroup}>
                                <label>Cooking time (minute) </label>
                                <input type="text" value={cookingTime} 
                                      onChange={(e) => setCookingTime(e.target.value)}
                                      className={`${showErrorCookingTime ? style.not_valid : ""}`}/>
                            </div>

                            <button className={style.formButton}>Submit</button>
                      </div>
                
                 </form>
            </div>
        </div>
    )
}

export default AddRecipeForm