import style from "../myStyles/DetailRecipeCard.module.css"

const DetailRecipeCard = () => {
    return (
        <div className={`${style.recipeCardContainer} bg-white mt-4`}>
            <div className="detailCardBody px-4 pt-5 pb-4 text-secondary">
                 <div className="text-center mb-3">
                    <h1 className="mb-4 text-dark">Greek Salad</h1>
                    <div>Take 25 minute to cook</div>
                    <div>ing, ing, ing, ing</div>
                 </div>

                 <div>In duis ipsum dolore labore exercitation Lorem mollit consectetur veniam magna consequat. Lorem cillum do non incididunt cupidatat dolore aliqua mollit sint officia in in. Cillum cillum id anim enim proident aliquip sint dolore amet excepteur ipsum. Eiusmod quis duis culpa commodo sint aliqua esse ut laboris. Ullamco exercitation quis eiusmod adipisicing quis deserunt reprehenderit aute quis consectetur deserunt excepteur. Cillum veniam qui exercitation cupidatat consectetur ut reprehenderit quis dolor sint cupidatat irure labore ipsum.</div>
            </div>
        </div>
    )
}

export default DetailRecipeCard