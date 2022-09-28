import style from "../myStyles/Navbar.module.css"

const NavBar = () => {
   console.log(style)
   return (
       <>
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




       {/* <nav className={`navbar navbar-expand-md py-3 ${style.myNavbar_bgColor}`}>
           <div className="container">
                <h1 className="navbar-brand text-white fs-5 fw-bolder myNav-logo mb-0">Cooking Mama</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
               </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className={`${style.myNavLink} hstack gap-3`}>
                        <div className="d-flex align-items-center gap-3">
                            <label className="form-label text-white mb-0" htmlFor="search">Search:</label>
                            <input type="text" className="form-control" id="search"/>
                        </div>
                        <button className="btn btn-outline-light">Create Recipe</button>
                    </div>
                </div>
           </div>
       </nav> */}


       {/* <nav class={`navbar navbar-expand-lg ${style.myNavbar_bgColor}`}>
  <div class="container">
    <h1 class="navbar-brand">Cooking Mama</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <div className={`${style.myNavLink} hstack gap-3`}>
                        <div className="d-flex align-items-center gap-3">
                            <label className="form-label text-white mb-0" htmlFor="search">Search:</label>
                            <input type="text" className="form-control" id="search"/>
                        </div>
                        <button className="btn btn-outline-light">Create Recipe</button>
                    </div>
    </div>
  </div>
</nav>









       <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

       </>

   )
}

export default NavBar