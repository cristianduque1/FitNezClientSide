import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    // <section className="posts-page">
    //   <NavLink to="/bulking" exact="true">
    //     BULK<img src="" alt=""></img>
    //   </NavLink>
    //   <div>OR</div>
    //   <NavLink to="/strengthing" exact="true">
    //     STRENGTH <img src="" alt=""></img>
    //   </NavLink>
    // </section>
    // <main className="home-page">
    //   <div className="home-page__container">
    //     <NavLink className="home-page__link" to="/bulking" exact="true">
    //       <div className="home-page__item">
    //         <span className="home-page__item-label">BULK</span>
    //         <img
    //           className="home-page__item-image"
    //           src="bulking-image.jpg"
    //           alt="Bulking"
    //         ></img>
    //       </div>
    //     </NavLink>
    //     <div className="home-page__separator">OR</div>
    //     <NavLink className="home-page__link" to="/strengthening" exact="true">
    //       <div className="home-page__item">
    //         <span className="home-page__item-label">STRENGTH</span>
    //         <img
    //           className="home-page__item-image"
    //           src="strengthening-image.jpg"
    //           alt="Strengthening"
    //         ></img>
    //       </div>
    //     </NavLink>
    //   </div>
    // </main>
    <main className="home-page">
      <div className="home-page__container">
        <NavLink className="home-page__link" to="/bulking" exact="true">
          <div className="home-page__item">
            <span className="home-page__item-label">BULK</span>
            <img
              className="home-page__item-image square"
              src="https://e1.pxfuel.com/desktop-wallpaper/517/655/desktop-wallpaper-big-ramy-a-neeeeew-mr-olympia-2020-mr-olympia-big-ramy-thumbnail.jpg"
              alt="Bodybuider posing for the victory"
            ></img>
          </div>
        </NavLink>
        <div className="home-page__separator">OR</div>
        <NavLink className="home-page__link" to="/strong" exact="true">
          <div className="home-page__item">
            <span className="home-page__item-label">STRENGTH</span>
            <img
              className="home-page__item-image square"
              src="https://nypost.com/wp-content/uploads/sites/2/2020/04/halfthor-bjornsson-deadlift-record.jpg?quality=75&strip=all"
              alt="Powerlifter barbells heavy"
            ></img>
          </div>
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
