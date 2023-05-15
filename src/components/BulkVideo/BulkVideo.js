// import "./SideVideo.scss";
import SingleVideoNav from "../SingleVideoNav/SingleVideoNav";

function BulkVideo({ videos }) {
  return (
    <footer className="workout-video">
      <h4 className="workout-video__title">BULK TRAINING</h4>

      {videos.map((video) => (
        <SingleVideoNav key={video.id} video={video} />
      ))}
    </footer>
  );
}

export default BulkVideo;
