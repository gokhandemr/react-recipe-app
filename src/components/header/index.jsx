import {useState} from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {Link, NavLink, useNavigate} from "react-router-dom";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {changeThemeColor} from "../../redux/slices/themeColorSlice";
import {searchIsActive} from "../../redux/slices/searchSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const navigate = useNavigate();
  const [responsiveNav, setResponsiveNav] = useState(false);

  const body = document.querySelector("body");
  if (isDark) {
    body.className = "dark-theme";
  } else {
    body.className = "";
  }

  const searchButtonFunction = () => {
    dispatch(searchIsActive());
    navigate("/");
  };

  return (
    <header className={`${style.header} ${isDark && style.darkTheme}`}>
      <Link to={"/"}>
        <h1>
          <span className="material-symbols-outlined">restaurant</span> Recipes
        </h1>
      </Link>
      <button className={`${"material-symbols-outlined"} ${style.responsiveButton}`} onClick={() => setResponsiveNav(!responsiveNav)}>
        menu
      </button>
      <nav className={`${style.headerNav} ${responsiveNav && style.responsiveNav}`}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"meal/lunch"}>Lunch</NavLink>
        <NavLink to={"meal/breakfast"}>Breakfast</NavLink>
        <NavLink to={"meal/dessert"}>Dessert</NavLink>
        <NavLink to={"meal/snack"}>Snack</NavLink>
        {!responsiveNav ? "|" : <hr />}
        <button className={`${"material-symbols-outlined"} ${style.searchButton}`} onClick={() => searchButtonFunction()}>
          search
        </button>
        <button className={style.darkModeButton} onClick={() => dispatch(changeThemeColor())}>
          {!isDark ? <span className="material-symbols-outlined">dark_mode</span> : <span className="material-symbols-outlined">light_mode</span>}
        </button>
      </nav>
    </header>
  );
}
