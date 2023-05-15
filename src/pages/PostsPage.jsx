// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
import { NavLink } from "react-router-dom";
const PostsPage = () => {
  return (
    <section className="posts-page">
      <NavLink>
        BULK<img src="" alt=""></img>
      </NavLink>
      <div>OR</div>
      <NavLink>
        STRENGTH <img src="" alt=""></img>
      </NavLink>
    </section>
  );
};

export default PostsPage;
