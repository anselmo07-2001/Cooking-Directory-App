import { useEffect, useState } from "react"
import { v4 as uuidv4} from "uuid"
import style from "../myStyles/AddRecipeForm.module.css"

const AddRecipeForm = () => {

    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeMethod, setRecipeMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")

    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [listIngredients, setListIngredients] = useState([])
    const [currentIngredients, setCurrentIngredients] = useState("")

    const handleAddRecipe = (e) => {
        e.preventDefault()
    }

    const handleAddIngredients = (e) => {
        e.preventDefault()

        if (!recipeIngredients) return 

        setListIngredients(prev => [...prev, {id : uuidv4(), recipeIng : recipeIngredients}])  
        setRecipeIngredients("")
    }

    const handleRemoveIngredient = (id) => {
        const updatedList = listIngredients.filter(list => list.id !== id)
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
                                <input type="text" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)}/>
                            </div>

                            <div className={style.inputGroup}>
                                <label>Recipe Ingredient:</label>
                                <div className="d-flex gap-2 mb-2 align-items-center">
                                    <input type="text"  value={recipeIngredients} onChange={(e) => setRecipeIngredients(e.target.value)}/>
                                    <button className={style.formButton} onClick={(e) => handleAddIngredients(e)}>Add</button>
                                </div>
                                <div class={`text-secondary ${style.currentIng}`}>Current Ingredient: {currentIngredients}</div>
                            </div>


                            <div className={style.inputGroup}>
                                <label>Recipe Method:</label>
                                <textarea type="text" value={recipeMethod} onChange={(e) => setRecipeMethod(e.target.value)} />
                            </div>

                            <div className={style.inputGroup}>
                                <label>Cooking time (minute) </label>
                                <input type="text" value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}/>
                            </div>

                            <button className={style.formButton}>Submit</button>
                      </div>
                
                 </form>
            </div>
        </div>
    )
}

export default AddRecipeForm