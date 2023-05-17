import { Link } from "react-router-dom";

function FeedBack() {
  return (
    <div className="main-section__form">
      <div className="main-section__formtitle">
        <h4 className="main-section__formtitle--text">
          What did you think about this workout?
        </h4>
      </div>
      <div className="main-section__formsection">
        <Link
          className="main-section__formsectionform--button"
          to="/contact-us"
        >
          GIVE US FEEDBACK!!
        </Link>
      </div>
    </div>
  );
}
export default FeedBack;
