import "./Form.scss";

function Form() {
  return (
    <div className="main-section__form">
      <div className="main-section__formtitle">
        <h4 className="main-section__formtitle--text">
          HOW DID YOU ENJOY THIS WORKOUT!!
        </h4>
      </div>
      <div className="main-section__formsection">
        <form action="" className="main-section__formsectionform">
          <textarea
            name="comment"
            form="usrform"
            className="main-section__formsectionform--input"
            placeholder="Add a new comment"
          ></textarea>
          <button className="main-section__formsectionform--button">
            SPEAK HOW YOU FEEL
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
