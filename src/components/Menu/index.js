import React from 'react';

import './Menu.css';
import Logo from '../../assets/Logo.png';

import ButtonLink from "./components/ButtonLink";

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo"/>
            </a>
            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>
        </nav>

    );
}

export default Menu;