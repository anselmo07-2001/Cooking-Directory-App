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
          <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/addRecipe" element={<AddRecipeForm/>}/>
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
