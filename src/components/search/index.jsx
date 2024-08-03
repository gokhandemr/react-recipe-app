import React, {useState} from "react";
// Style
import style from "./style.module.css";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {searchIsInactive} from "../../redux/slices/searchSlice";
// Router DOM
import {useNavigate} from "react-router-dom";

export default function Search() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDark = useSelector((state) => state.theme.isDark);

  const searchRecipes = (e, value) => {
    e.preventDefault();
    const newValue = value.trim().replace(/[</>\\*'_!$½%{&}=|"`~¨´]/g, "");
    if (newValue !== "") {
      navigate("/search/" + newValue);
    } else {
      alert("You didn't write anything.");
    }
  };

  return (
    <div className={`${style.search} ${isDark && style.darkTheme}`}>
      <form onSubmit={(e) => searchRecipes(e, value)}>
        <h2>What are you looking for?</h2>
        <button className="material-symbols-outlined">search</button>
        <input type="search" placeholder="Beef and Broccoli Stir-Fry" required onChange={(e) => setValue(e.target.value)} />
      </form>
      <button className={style.closeSearch + " material-symbols-outlined"} onClick={() => dispatch(searchIsInactive())}>
        close
      </button>
    </div>
  );
}
