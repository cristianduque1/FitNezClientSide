// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
import { NavLink } from "react-router-dom";
const PostsPage = () => {
  return (
    <section className="posts-page">
      <NavLink to="/salsa" exact="true">
        BULK<img src="" alt=""></img>
      </NavLink>
      <div>OR</div>
      <NavLink to="/h" exact="true">
        STRENGTH <img src="" alt=""></img>
      </NavLink>
    </section>
  );
};

export default PostsPage;
