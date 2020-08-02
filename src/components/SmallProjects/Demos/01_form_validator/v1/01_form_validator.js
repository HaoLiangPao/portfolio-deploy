import React, { Fragment, useState } from "react";
import Header from "../../../../layout/Header";
import Footer from "../../../../layout/Footer";

const FormValidator = () => {
  // Form-Input
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [password2Input, setPassword2Input] = useState("");

  // Form-Control
  const [nameControl, setNameControl] = useState("form-control");
  const [emailControl, setEmailControl] = useState("form-control");
  const [passwordControl, setPasswordControl] = useState("form-control");
  const [password2Control, setPassword2Control] = useState("form-control");

  // Form-errorMessage
  const [nameMsg, setNameMsg] = useState("Error Message");
  const [emailMsg, setEmailMsg] = useState("Error Message");
  const [passwordMsg, setPasswordMsg] = useState("Error Message");
  const [password2Msg, setPassword2Msg] = useState("Error Message");

  // Methods
  // Check valid email
  function checkEmail() {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailInput)) {
      showSuccess("email");
    } else {
      showError("email", "Email is not valid!");
    }
  }
  // Check input length
  function checkLength(id, min, max) {
    let msg, value;
    switch (id) {
      case "username":
        value = nameInput;
        break;
      case "password":
        value = passwordInput;
        break;
      default:
        break;
    }
    if (value.length < min) {
      msg = `${id} must be at least ${min} characters`;
      showError(id, msg);
    } else if (value.length > max) {
      msg = `${id} must be at most ${max} characters`;
      showError(id, msg);
    } else {
      showSuccess(id);
    }
  }
  // Check passwords
  function checkPasswordsMatch() {
    if (passwordInput === password2Input && passwordInput !== "") {
      showSuccess("password");
      showSuccess("password2");
    } else {
      showError("password", "Passwords do not match!");
      showError("password2", "Passwords do not match!");
    }
  }
  // Show input error message
  const showError = (id, msg) => {
    switch (id) {
      case "username":
        setNameControl("form-control error");
        setNameMsg(msg);
        break;
      case "email":
        setEmailControl("form-control error");
        setEmailMsg(msg);
        break;
      case "password":
        setPasswordControl("form-control error");
        setPasswordMsg(msg);
        break;
      case "password2":
        setPassword2Control("form-control error");
        setPassword2Msg(msg);
        break;
      default:
        break;
    }
  };
  // Show input accepted
  const showSuccess = (id) => {
    switch (id) {
      case "username":
        setNameControl("form-control success");
        break;
      case "email":
        setEmailControl("form-control success");
        break;
      case "password":
        setPasswordControl("form-control success");
        break;
      case "password2":
        setPassword2Control("form-control success");
        break;
      default:
        break;
    }
  };
  // Handel input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "username":
        setNameInput(value);
        break;
      case "email":
        setEmailInput(value);
        break;
      case "password":
        setPasswordInput(value);
        break;
      case "password2":
        setPassword2Input(value);
        break;
      default:
        break;
    }
  };
  // Check all fields are filled
  function checkRequired() {
    let fields = [
      {
        id: "username",
        input: nameInput,
      },
      {
        id: "email",
        input: emailInput,
      },
      {
        id: "password",
        input: passwordInput,
      },
      {
        id: "password2",
        input: password2Input,
      },
    ];
    fields.forEach((field) => {
      if (field.input.trim() === "") {
        showError(field.id, `${field.input} is required!`);
      } else {
        showSuccess(field.id);
      }
    });
  }
  // Handel submit forms
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    checkRequired();
    // Check input length
    checkLength("username", 3, 15);
    checkLength("password", 6, 25);
    // Check email
    checkEmail();
    // Check password match
    checkPasswordsMatch();
  };

  return (
    <Fragment>
      <Header current='projects'></Header>
      <div id='project-01' className='project'>
        <div className='container'>
          <form id='form' className='form' onSubmit={(e) => handleSubmit(e)}>
            <h2>Register with us</h2>
            <div className={nameControl}>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                placeholder='Enter username'
                onChange={(e) => handleChange(e)}
                onBlur={(e) => checkLength(e.target.id, 3, 15)}
                value={nameInput}
              />
              <small>{nameMsg}</small>
            </div>
            <div className={emailControl}>
              <label htmlFor='email'>Email</label>
              <input
                type='text'
                id='email'
                placeholder='Enter email'
                onChange={(e) => handleChange(e)}
                onBlur={(e) => checkEmail()}
                value={emailInput}
              />
              <small>{emailMsg}</small>
            </div>
            <div className={passwordControl}>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Enter password'
                onChange={(e) => handleChange(e)}
                onBlur={(e) => checkLength(e.target.id, 6, 25)}
                value={passwordInput}
              />
              <small>{passwordMsg}</small>
            </div>
            <div className={password2Control}>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                type='text'
                id='password2'
                placeholder='Enter password2'
                onChange={(e) => handleChange(e)}
                onBlur={(e) => checkPasswordsMatch()}
                value={password2Input}
              />
              <small>{password2Msg}</small>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Fragment>
  );
};

export default FormValidator;
