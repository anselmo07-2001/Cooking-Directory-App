import style from "../myStyles/AddRecipeForm.module.css"

const AddRecipeForm = () => {
    return (
        <div className="container">
             <div className={style.formContainer}>
                 <form>
                      <h2 className="text-center mb-4">Add a new Recipe</h2>

                      <div className={style.formBody}>
                            <div className={style.inputGroup}>
                                <label>Recipe Title:</label>
                                <input type="text"/>
                            </div>

                            <div className={style.inputGroup}>
                                <label>Recipe Ingredient:</label>
                                <div className="d-flex gap-2 mb-2 align-items-center">
                                    <input type="text"/>
                                    <button className={style.formButton}>Add</button>
                                </div>
                                <div class="text-secondary">Current Ingredient:</div>
                            </div>


                            <div className={style.inputGroup}>
                                <label>Recipe Method:</label>
                                <textarea type="text"/>
                            </div>

                            <div className={style.inputGroup}>
                                <label>Cooking time (minute) </label>
                                <input type="text"/>
                            </div>

                            <button className={style.formButton}>Submit</button>
                      </div>
                
                 </form>
            </div>
        </div>
    )
}

export default AddRecipeForm