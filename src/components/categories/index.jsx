import React from "react";
// Style
import style from "./style.module.css";
// Router DOM
import {Link} from "react-router-dom";
// Reudx
import {useSelector} from "react-redux";
// Flags
import greekFlag from "../../flag-icons/greek.png";
import italyFlag from "../../flag-icons/italy.png";
import japanFlag from "../../flag-icons/japan.png";
import koreanFlag from "../../flag-icons/korean.png";
import mexicoFlag from "../../flag-icons/mexico.png";
import russiaFlag from "../../flag-icons/russia.png";
import spainFlag from "../../flag-icons/spain.png";
import turkeyFlag from "../../flag-icons/turkey.png";
import moroccoFlag from "../../flag-icons/morocco.png";
import indianFlag from "../../flag-icons/indian.png";

export default function Categories() {
  const isDark = useSelector((state) => state.theme.isDark);

  const countries = [
    {name: "Turkish", image: turkeyFlag},
    {name: "Russian", image: russiaFlag},
    {name: "Greek", image: greekFlag},
    {name: "Mexican", image: mexicoFlag},
    {name: "Spanish", image: spainFlag},
    {name: "Italian", image: italyFlag},
    {name: "Korean", image: koreanFlag},
    {name: "Japanese", image: japanFlag},
    {name: "Moroccan", image: moroccoFlag},
    {name: "Indian", image: indianFlag},
  ];

  return (
    <section className={`${style.categories} ${isDark ? style.darkTheme : ""}`}>
      <ul>
        {countries &&
          countries.map(({name, image}, index) => (
            <li className={style.category} key={index}>
              <Link to={`/countries/${name}`}>
                <img src={image} alt={name} />
                <h3>{name}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
