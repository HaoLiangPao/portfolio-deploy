import React, { useLayoutEffect, Fragment, useState } from "react";
import Header from "../../../../layout/Header";
import Footer from "../../../../layout/Footer";
import FormInput from "./01_form_input";

const FormValidator = () => {
  // Create react reference
  const name = React.createRef();
  const email = React.createRef();
  const password = React.createRef();
  const password2 = React.createRef();

  // Inputs state
  const inputs = [
    {
      id: "name",
      label: "Username",
      type: "text",
      placeHolder: "Enter username",
      ref: name,
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      placeHolder: "Enter email",
      ref: email,
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeHolder: "Enter password",
      ref: password,
    },
    {
      id: "password2",
      label: "Confirm Password",
      type: "password",
      placeHolder: "Enter the password again",
      ref: password2,
    },
  ];

  useLayoutEffect(() => {}, []);

  return (
    <Fragment>
      <Header current='projects'></Header>
      <div id='project-01'>
        <div className='container'>
          <form id='form' className='form'>
            <h2>Register with us</h2>
            {inputs.map((input) => (
              <FormInput
                input={input}
                key={input.id}
                ref={input.ref}
              ></FormInput>
            ))}

            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default FormValidator;
