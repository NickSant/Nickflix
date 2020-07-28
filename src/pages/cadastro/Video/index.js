import React from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../../../components/PageTemplate";

function CadastroVideo() {
  return (
    <PageTemplate>
      <Link to="/cadastro/categoria">Cadastrar categoria</Link>
    </PageTemplate>
  );
}

export default CadastroVideo;
