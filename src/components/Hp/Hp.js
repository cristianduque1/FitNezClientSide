// import SideVideo from "../SideVideo/SideVideo";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import MainVideo from "../MainVideo/MainVideo";
// import jsonData from "../../data/videoDetails.json";

// function HomeVideoPlayer() {
//   const { idFromParams } = useParams();
//   const [videos, setVideos] = useState([]);
//   const [videoo, setVideoo] = useState(null);

//   let defaultVideoId = null;

//   if (videos.length > 0) {
//     defaultVideoId = videos[0].id;
//   }

//   let videoIdToDisplay = idFromParams || defaultVideoId;

//   const filteredVideos = videos.filter(
//     (video) => video.id !== videoIdToDisplay
//   );

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/videos/")
//       .then((response) => {
//         console.log(response.data);
//         setVideos(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   useEffect(() => {
//     if (videoIdToDisplay === null) {
//       return;
//     }
//     axios
//       .get(`http://localhost:8080/videos/${videoIdToDisplay}`)
//       .then((response) => {
//         setVideoo(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [videoIdToDisplay]);

//   //   if (videoo === null) {
//   //     return <div>Loading!!</div>;
//   //   }

//   return (
//     <div className="BrainFlix-page">
//       <SideVideo videos={filteredVideos} />
//       <MainVideo selectedVideoId={videoo} />
//     </div>
//   );
// }

// export default HomeVideoPlayer;

// import SideVideo from "../SideVideo/SideVideo";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import MainVideo from "../MainVideo/MainVideo";
// import jsonData from "../../data/videoDetails.json";

// function HomeVideoPlayer() {
//   const { idFromParams } = useParams();
//   const [videos, setVideos] = useState([]);
//   const [videoo, setVideoo] = useState(null);

//   let defaultVideoId = null;

//   if (videos.length > 0) {
//     defaultVideoId = videos[0].id;
//   }

//   let videoIdToDisplay = idFromParams || defaultVideoId;

//   const filteredVideos = videos.filter(
//     (video) => video.id !== videoIdToDisplay
//   );

//   useEffect(() => {
//     // replace the axios call with setting the videos state variable to an array of video objects extracted from the imported JSON data
//     const videoData = jsonData.map((video) => {
//       return {
//         id: video.id,
//         title: video.title,
//         channel: video.channel,
//         image: video.image,
//       };
//     });
//     setVideos(videoData);
//   }, []);

//   useEffect(() => {
//     if (videoIdToDisplay === null) {
//       return;
//     }
//     // replace the axios call with finding the video object in the imported JSON data that matches the videoIdToDisplay
//     const videoData = jsonData.find((video) => video.id === videoIdToDisplay);
//     setVideoo(videoData);
//   }, [videoIdToDisplay]);

//   //   create function that accepts video.id as a parametor

//   if (videoo === null) {
//     return <div>Loading!!</div>;
//   }

//   return (
//     <div className="BrainFlix-page">
//       <SideVideo videos={filteredVideos} />
//       <MainVideo selectedVideoId={videoo} />
//     </div>
//   );
// }

// export default HomeVideoPlayer;

import MainVideo from "../../components/MainVideo/MainVideo";

import SideVideo from "../../components/SideVideo/SideVideo";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function HomeVideoPlayer() {
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
      <SideVideo videos={filteredVideos} />
      <MainVideo selectedVideoId={videoo} />
    </div>
  );
}

export default HomeVideoPlayer;
