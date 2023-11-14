import { Link } from "react-router-dom";
import imgLogoFooter from "../assets/images/LogoBlanc.png"

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={imgLogoFooter} alt="Logo Kasa" />
      </Link>
      <p>&#169; 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
