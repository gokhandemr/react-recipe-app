import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{marginTop: "36px", textAlign: "center"}}>
      <p>
        <Link to={"https://github.com/gokhandemr"} target="_blank">
          Gökhan DEMİR
        </Link>
      </p>
    </footer>
  );
}
