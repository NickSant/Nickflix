import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../../../components/PageTemplate";

function CadastroCategoria() {
  return (
    <PageTemplate>
      <Link to="/cadastro/categoria">Cadastrar</Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;