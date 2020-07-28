import React from 'react';
import { FooterBase, Logo } from './styles';
import logo from "../../assets/Logo.png"

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <Logo src={logo} />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
