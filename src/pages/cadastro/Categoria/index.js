import React, { useState } from "react";
import { Link } from "react-router-dom";

import PageTemplate from "../../../components/PageTemplate";
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000",
  };

  const [categories, setCategories] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(initialValues);

  function setValues(key, value) {
    setCategoryInfo({
      ...categoryInfo,
      [key]: value,
    });
  }

  function handleChanges(e) {
    setValues(e.target.getAttribute("name"), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategories([...categories, categoryInfo]);

    setCategoryInfo(initialValues);
  }

  return (
    <PageTemplate>
      <h1> Cadastro de Categoria: {categoryInfo.name}</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="name"
          value={categoryInfo.name}
          onChange={handleChanges}
        />

        <FormField
          label="Descrição: "
          type="text"
          name="description"
          value={categoryInfo.description}
          onChange={handleChanges}
        />

        <FormField
          label="Color: "
          type="color"
          name="color"
          value={categoryInfo.color}
          onChange={handleChanges}
        />

        <button> Cadastrar </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Voltar para Home</Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
