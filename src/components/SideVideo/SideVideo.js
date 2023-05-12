// import "./SideVideo.scss";
import SideVideoNav from "../SideVideoNav/SideVideoNav";

function SideVideo({ videos }) {
  return (
    <footer className="workout-video">
      <h4 className="workout-video__title">WORKOUT</h4>

      {videos.map((video) => (
        <SideVideoNav key={video.id} video={video} />
      ))}
    </footer>
  );
}

export default SideVideo;
