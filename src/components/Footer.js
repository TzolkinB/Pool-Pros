import React      from 'react';
import { Link }   from 'react-router-dom';
import LogoFooter from 'IMG/pool-pros-logo-footer.png';
import Twitter    from 'IMG/twitter-icon.png';
import Facebook   from 'IMG/facebook-icon.png';
import YouTube    from 'IMG/youtube-icon.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <img src={LogoFooter} alt="Pool Pros Logo" className="footer-logo" />
      <br/>
      <p>CONNECT WITH US</p>
      <img src={Twitter} alt="Twitter Icon" className="icon" />
      <img src={Facebook} alt="Facebook Icon" className="icon" />
      <img src={YouTube} alt="YouTube Icon" className="icon" />
      <div className="copyright">
        <p>&#169; {currentYear} Pool Pros |</p>
        <a href="#">Privacy Policy</a> |
        <a href="#">Terms and Conditions</a>
      </div>
    </footer>
  );
}

export default Footer;
