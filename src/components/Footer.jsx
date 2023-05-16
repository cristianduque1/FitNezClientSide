// NavLink component allows us to define an active CSS class for the page we are currently on
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <section className="header">
    //   <div className="header__bottom">
    //     <Link className="header__logo" to="/">
    //       <p>&copy; 2023 Fit-Nez. All rights reserved.</p>
    //     </Link>
    //   </div>
    // </section>
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
