import React from "react";
import video from "../data/video.js";
import Video from "./Video";
import VideoDetails from "./VideoDetails";
import VotingButtons from "./VotingButtons";
import Comments from "./Comments";

function App() {
  const { title, embedUrl, views, createdAt, upvotes, downvotes, comments } =
    video;

  return (
    <div className="App">
      <Video url={embedUrl} title={title} />
      <VideoDetails title={title} views={views} date={createdAt} />
      <VotingButtons upvotes={upvotes} downvotes={downvotes} />
      <hr />
      <Comments comments={comments} />
    </div>
  );
}
export default App;
