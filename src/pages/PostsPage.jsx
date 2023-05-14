// const SERVER_URL = process.env.REACT_APP_SERVER_URL;
import { NavLink } from "react-router-dom";
const PostsPage = () => {
  return (
    <section className="posts-page">
      <NavLink>BULK</NavLink>
      <div>OR</div>
      <NavLink>STRENGTH</NavLink>
    </section>
  );
};

export default PostsPage;
