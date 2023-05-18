import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link className="footer__logo" to="/">
          <p>&copy; 2023 FIT-NEZ. All rights reserved.</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
