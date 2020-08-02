import React, { Fragment } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ContactForm from "../contactComponents/ContactForm";
import ContactInfo from "../contactComponents/ContactInfo";

const Contact = () => {
  return (
    <Fragment>
      <Header current='contact'></Header>
      <ContactForm></ContactForm>
      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </Fragment>
  );
};

export default Contact;
