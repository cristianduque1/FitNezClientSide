import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="home-page">
      <div className="home-page__container">
        <Link className="home-page__link" to="/bulking" exact="true">
          <div className="home-page__item">
            <span className="home-page__item-label">BULK</span>
            <img
              className="home-page__item-image square"
              src="https://e1.pxfuel.com/desktop-wallpaper/517/655/desktop-wallpaper-big-ramy-a-neeeeew-mr-olympia-2020-mr-olympia-big-ramy-thumbnail.jpg"
              alt="Bodybuider posing for the victory"
            ></img>
          </div>
        </Link>
        <div className="home-page__separator">OR</div>
        <Link className="home-page__link" to="/strong" exact="true">
          <div className="home-page__item">
            <span className="home-page__item-label">STRENGTH</span>
            <img
              className="home-page__item-image square"
              src="https://nypost.com/wp-content/uploads/sites/2/2020/04/halfthor-bjornsson-deadlift-record.jpg?quality=75&strip=all"
              alt="Powerlifter barbells heavy"
            ></img>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
