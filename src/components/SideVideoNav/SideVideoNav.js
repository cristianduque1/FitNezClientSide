// import "./SideVideoNav.scss";
// import { Link } from "react-router-dom";

// function SideVideoNav({ video }) {
//   return (
//     <div className="sidevideodiv">
//       <a className="sidevideodiv__imagediv" href="#react-play">
//         <img
//           src={video.image}
//           alt="Placeholder Video"
//           className="sidevideodiv__imagediv--image"
//         />
//       </a>
//       {/* i need to from the parent passed down thru props and onclick handler
//       once in this i need to update the state of whatever is holding the video
//       player the information being hel there needs to be dynamic */}
//       <div className="sidevideodiv__text">
//         <h4 className="sidevideodiv__text--title">{video.title}</h4>
//         <span className="sidevideodiv__text--name">{video.channel}</span>
//       </div>
//     </div>
//   );
// }

// export default SideVideoNav;

// import "./SideVideoNav.scss";
import { Link } from "react-router-dom";

function SideVideoNav({ video }) {
  return (
    <div className="sidevideodiv">
      <Link className="sidevideodiv__imagediv" to={`/video/${video.id}`}>
        <img
          src={video.image}
          alt="Placeholder Video"
          className="sidevideodiv__imagediv--image"
        />
      </Link>
      <div className="sidevideodiv__text">
        <h4 className="sidevideodiv__text--title">{video.title}</h4>
        <span className="sidevideodiv__text--name">{video.channel}</span>
      </div>
    </div>
  );
}

export default SideVideoNav;
