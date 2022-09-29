import NavBar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import DetailRecipeCard from "./components/DetailRecipeCard"
import ShortRecipeCard from "./components/ShortRecipeCard"
import ThemeColorPicker from "./components/ThemeColorPicker"
import AddRecipeForm from "./components/AddRecipeForm"

import "./App.module.css"

function App() {
  return (
    <>
    <NavBar/>
    <MainContainer>
        <DetailRecipeCard/>
        <ShortRecipeCard/>
        <ThemeColorPicker/>
        <AddRecipeForm/>
    </MainContainer>
    </>
  );
}

export default App;
