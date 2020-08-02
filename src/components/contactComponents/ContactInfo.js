import React from "react";

const ContactInfo = () => {
  return (
    <section id='contact-b' class='py-3 bg-dark'>
      <div class='container'>
        <div class='contact-info'>
          <div>
            <i class='fas fa-envelope fa-2x'></i>
            <h3>Email</h3>
            <p>h.liang@mail.utoronto.ca</p>
          </div>
          <div>
            <i class='fas fa-phone fa-2x'></i>
            <h3>Phone</h3>
            <p>(647)-996-5681</p>
          </div>
          <div>
            <i class='fas fa-address-card fa-2x'></i>
            <h3>Address</h3>
            <p>40 Garden Park Ave.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
