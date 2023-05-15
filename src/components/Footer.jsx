// NavLink component allows us to define an active CSS class for the page we are currently on
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="header">
      <div className="header__bottom">
        <Link className="header__logo" to="/">
          <p>&copy; 2023 Fit-Nez. All rights reserved.</p>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
