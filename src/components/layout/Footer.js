import React from "react";

const Footer = () => {
  return (
    <footer id='main-footer'>
      <div className='footer-content container'>
        <p>Copyright &copy; 2020. All Rights Reserved</p>
        <div className='social'>
          <a href='http://www.linkedin.com/in/hao-liang-uoft' target='blank'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='https://github.com/HaoLiangPao' target='blank'>
            <i className='fab fa-github'></i>
          </a>
          <a href='/'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='/'>
            <i className='fab fa-facebook'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
