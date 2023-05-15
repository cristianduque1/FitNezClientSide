import MainVideo from "../MainVideo/MainVideo";
import StrengthVideos from "../StrengthVideos/StrengthVideos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Strength() {
  const { idFromParams } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoo, setVideoo] = useState(null);

  let defaultVideoId = null;

  if (videos.length > 0) {
    defaultVideoId = videos[0].id;
  }

  let videoIdToDisplay = idFromParams || defaultVideoId;

  const filteredVideos = videos.filter(
    (video) => video.id !== videoIdToDisplay
  );

  useEffect(() => {
    axios
      .get("http://localhost:8080/vid/")
      .then((response) => {
        console.log(response.data);
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (videoIdToDisplay === null) {
      return;
    }
    axios
      .get(`http://localhost:8080/vid/${videoIdToDisplay}`)
      .then((response) => {
        setVideoo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [videoIdToDisplay]);

  if (videoo === null) {
    return <div>Loading!!</div>;
  }

  return (
    <div className="BrainFlix-page">
      <StrengthVideos videos={filteredVideos} />
      <MainVideo selectedVideoId={videoo} />
    </div>
  );
}

export default Strength;
