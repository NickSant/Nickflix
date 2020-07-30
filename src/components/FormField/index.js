import React from "react";

import { FieldWrapper, FieldInput, FieldLabel, LabelSpan } from "./styles";

function FormField({ label, type, name, value, onChange }) {
  return (
    <FieldWrapper>
      <label for={name}>{label}</label>
      <FieldInput type={type} name={name} value={value} onChange={onChange} />
    </FieldWrapper>
  );
}

export default FormField;
