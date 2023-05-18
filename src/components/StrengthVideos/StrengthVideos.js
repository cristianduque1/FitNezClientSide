import SingleVideoNavI from "../SingleVideoNavI/SingleVideoNavI";

function StrengthVideos({ videos }) {
  return (
    <footer className="workout-video">
      <h4 className="workout-video__title">STRENGTH TRAINING</h4>

      {videos.map((video) => (
        <SingleVideoNavI key={video.id} video={video} />
      ))}
    </footer>
  );
}

export default StrengthVideos;
