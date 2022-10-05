import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import NavBar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import DetailRecipeCard from "./components/DetailRecipeCard"
import ShortRecipeCard from "./components/ShortRecipeCard"
import ThemeColorPicker from "./components/ThemeColorPicker"
import AddRecipeForm from "./components/AddRecipeForm"
import Home from "./pages/Home"


import style from "./App.module.css"


const getCurrentLightDarkTheme = (currentLightDarkThemeValue) => {
   if (currentLightDarkThemeValue === "light") {
       return style.light_theme
   }

   if (currentLightDarkThemeValue === "dark") {
    return style.dark_theme
}
}


function App() {

  const currentLightDarkThemeValue = useSelector(state => state.colorTheme.mainTheme)

  return (
    <>
       <BrowserRouter>
          <div className={`${style.mainWrapper} ${getCurrentLightDarkTheme(currentLightDarkThemeValue)}`}>
              <NavBar/>
              <ThemeColorPicker/>
              <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/addRecipe" element={<AddRecipeForm/>}/>
                    <Route path="/recipe/:recipeId" element={<DetailRecipeCard/>}/>
              </Routes>
          </div>
       </BrowserRouter>
    </>
  );
} 

export default App;
