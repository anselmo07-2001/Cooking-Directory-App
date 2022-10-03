import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import DetailRecipeCard from "./components/DetailRecipeCard"
import ShortRecipeCard from "./components/ShortRecipeCard"
import ThemeColorPicker from "./components/ThemeColorPicker"
import AddRecipeForm from "./components/AddRecipeForm"
import Home from "./pages/Home"


import "./App.module.css"

function App() {
  return (
    <>
       <BrowserRouter>
          <NavBar/>
          <ThemeColorPicker/>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/addRecipe" element={<AddRecipeForm/>}/>
                <Route path="/recipe/:recipeId" element={<DetailRecipeCard/>}/>
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
