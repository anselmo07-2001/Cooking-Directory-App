import style from "../myStyles/Navbar.module.css"

const NavBar = () => {
   console.log(style)
   return (
       <nav className={`navbar navbar-expand-md navbar-dark ${style.myNavbar}`}>
           <div className="container">
                <h1 className="navbar-brand text-white fs-5 fw-bolder myNav-logo mb-0">Cooking Mama</h1>
                <button className={style.myNavbar_toggler}
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
                            <input type="text" className="form-control" id="search"/>
                        </div>
                        <button className={`${style.myBtn_createRecipe} btn btn-outline-light`}>Create Recipe</button>
                    </div>
                </div>
           </div>
       </nav>
   )
}

export default NavBar