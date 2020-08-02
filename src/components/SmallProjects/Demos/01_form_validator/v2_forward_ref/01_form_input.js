import React, { useState, useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";

const FormInput = React.forwardRef((props, ref) => {
  // Destructuring
  const { id, label, type, placeholder } = props.input;
  // Reference for the input value
  const input = useRef();
  // State controlling
  const [formControl, setFormControl] = useState("form-control");
  const [errorMessage, setErrorMessage] = useState("Error message");

  // Make the functions accesible by parent component
  React.useImperativeHandle(ref, () => {
    // Show input accepted
    function showSuccess() {
      setFormControl("form-control success");
    }
    // Show input error message
    function showError(msg) {
      setFormControl("form-control error");
      setErrorMessage(msg);
    }
  });

  useLayoutEffect(() => {}, []);

  return (
    <div className={formControl} ref={ref}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} ref={input} />
      <small>{errorMessage}</small>
    </div>
  );
});

FormInput.propTypes = {
  input: PropTypes.object.isRequired,
};

export default FormInput;
