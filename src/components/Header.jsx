// NavLink component allows us to define an active CSS class for the page we are currently on
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    // <section className="header">
    //   <div className="header__bottom">
    //     <Link className="header__logo" to="/">
    //       <p> FIT-NEZ </p>
    //     </Link>
    //     <nav className="header__nav">
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "header__nav-link header__nav-link--active"
    //             : "header__nav-link"
    //         }
    //         to="/"
    //         exact="true"
    //       >
    //         HOME PAGE
    //       </NavLink>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "header__nav-link header__nav-link--active"
    //             : "header__nav-link"
    //         }
    //         to="/about-us"
    //         exact="true"
    //       >
    //         ABOUT US
    //       </NavLink>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "header__nav-link header__nav-link--active"
    //             : "header__nav-link"
    //         }
    //         to="/contact-us"
    //         exact="true"
    //       >
    //         CONTACT US
    //       </NavLink>
    //       <NavLink
    //         className={(navData) =>
    //           navData.isActive
    //             ? "header__nav-link header__nav-link--active"
    //             : "header__nav-link"
    //         }
    //         to="/support"
    //         exact="true"
    //       >
    //         SUPPORT
    //       </NavLink>
    //     </nav>
    //   </div>
    // </section>
    <section className="header">
      <div className="header__bottom">
        <NavLink className="header__logo" to="/">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/611/758/324/man-silhouette-fitness-wallpaper-preview.jpg"
            className="header__logo--image"
            alt=""
          />
          <p className="header__logo--text"> FIT-NEZ </p>
        </NavLink>
        <nav className="header__nav">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "header__nav-link header__nav-link--active"
                : "header__nav-link"
            }
            to="/about-us"
            exact="true"
          >
            ABOUT US
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "header__nav-link header__nav-link--active"
                : "header__nav-link"
            }
            to="/contact-us"
            exact="true"
          >
            CONTACT US
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "header__nav-link header__nav-link--active"
                : "header__nav-link"
            }
            to="/support"
            exact="true"
          >
            SUPPORT
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
