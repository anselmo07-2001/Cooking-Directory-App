import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import style from "../myStyles/Navbar.module.css"
import { SearchRecipeAction } from "../Slices/SearchRecipe"


const selectedColorTheme = (colorTheme) => {
    if (colorTheme === "purple") {
        return style.bg_purple
    }

    if (colorTheme === "green") {
        return style.bg_green
    }

    if (colorTheme === "red") {
        return style.bg_red
    }
}




const NavBar = () => {
   const { navbarTheme } = useSelector((state) => state.colorTheme)
   const recipes = useSelector(state => state.recipe)
   const [inputSearch, setInputSearch] = useState("")
   const dispatch = useDispatch()

   const handleSearch = (e) => {
       setInputSearch(e.target.value)
       dispatch(SearchRecipeAction.inputtedSearch(e.target.value))
   }

   useEffect(() => {
        const searchRecipes = recipes.filter((recipe) => {
            if (recipe.foodName.toLowerCase().includes(inputSearch.toLowerCase())) {
                return recipe
            }
        })

        dispatch(SearchRecipeAction.renderSearchRecipe(searchRecipes))         
   },[inputSearch])



   return (
       <nav className={`navbar navbar-expand-md navbar-dark ${style.myNavbar} ${selectedColorTheme(navbarTheme)}`}>
           <div className="container">
                <Link to="/" ><h1 className="navbar-brand text-white fs-3 fw-bolder myNav-logo mb-0">Cooking Directory</h1></Link>
                <button className={`${style.myNavbar_toggler} ${selectedColorTheme(navbarTheme)}`}
                        data-bs-toggle="collapse"
                        data-bs-target="#nav"
                        aria-controls="nav"
                        aria-label="Expan Navigation">
                     <span class={style.line}></span> 
                     <span class={style.line}></span> 
                     <span class={style.line} style={{marginBottom: 0}}></span>
                </button>
                <div className={`collapse navbar-collapse ${style.myNavbar_collapse}`} id="nav">
                    <div className={`${style.myNavLink} hstack gap-3`}>
                        <div className="d-flex align-items-center gap-3">
                            <label className="form-label text-white mb-0" htmlFor="search">Search:</label>
                            <input type="text" className="form-control" id="search" value={inputSearch} onChange={handleSearch}/>
                        </div>
                        <Link to="/addRecipe" className={`${style.myBtn_createRecipe} btn btn-outline-light`}>Create Recipe</Link>
                    </div>
                </div>
           </div>
       </nav>
   )
}

export default NavBar