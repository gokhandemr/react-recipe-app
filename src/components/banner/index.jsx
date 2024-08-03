import React, {useState} from "react";
// Style
import style from "./style.module.css";
// Rotuer DOM
import {Link} from "react-router-dom";
// Redux
import {useSelector} from "react-redux";
// Components
import Search from "../search";

export default function Banner({recipes}) {
  const [counter, setCounter] = useState(0);
  const isDark = useSelector((state) => state.theme.isDark);
  const isSearch = useSelector((state) => state.search.search);

  const increaseBannerButton = () => {
    if (counter >= recipes.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const decreaseBannerButton = () => {
    if (counter === 0) {
      setCounter(recipes.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <section className={`${style.banner} ${isDark ? style.darkTheme : ""}`}>
      {isSearch ? (
        <Search />
      ) : (
        recipes[counter] && (
          <>
            <img src={recipes[counter].image} alt={recipes[counter].name} />
            <div className={style.bannerDetails}>
              <img className={style.bannerDetailsBackgroundImg} src={recipes[counter].image} alt={recipes[counter].name} />
              <div>
                <p>
                  Prep Time: {recipes[counter].prepTimeMinutes} dk | Cook Time: {recipes[counter].cookTimeMinutes} dk
                </p>
                <h2 className={isDark ? style.darkTheme : ""}>{recipes[counter].name}</h2>
                <p className={style.bannerDetailsDescription}>{recipes[counter].ingredients.map((item) => item + ". ")}</p>
                <Link className={style.goToRecipeButton} to={"/" + recipes[counter].id}>
                  <span className="material-symbols-outlined">subdirectory_arrow_right</span> Go to recipe
                </Link>
              </div>
            </div>
            <button className={style.bannerButton} onClick={() => increaseBannerButton()}>
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <button style={{right: "84px"}} className={style.bannerButton} onClick={() => decreaseBannerButton()}>
              <span className="material-symbols-outlined">arrow_left_alt</span>
            </button>
          </>
        )
      )}
    </section>
  );
}
