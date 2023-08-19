import React from "react";

const FormInput = (props) => {
  const { id, onChange, label, ...inputValues } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        name={props.name}
        onChange={onChange}
        {...inputValues}
      />
    </div>
  );
};

export default FormInput;
