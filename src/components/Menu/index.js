import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
import Logo from "../../assets/Logo.png";

import ButtonLink from "./components/ButtonLink";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </Link>

      <Link to="/cadastro/video">
        <ButtonLink className="ButtonLink" href="/">
          Novo Vídeo
        </ButtonLink>
      </Link>
    </nav>
  );
}

export default Menu;
