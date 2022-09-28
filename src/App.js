import NavBar from "./components/Navbar"
import MainContainer from "./components/MainContainer"
import DetailRecipeCard from "./components/DetailRecipeCard"

import "./App.module.css"

function App() {
  return (
    <>
    <NavBar/>
    <MainContainer>
        <DetailRecipeCard/>
    </MainContainer>
    </>
  );
}

export default App;
