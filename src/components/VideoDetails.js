import React from "react";

function VideoDetails({ title, views, date }) {
  return (
    <div className="video-details">
      <h2>{title}</h2>
      <p>
        {views} Views | Uploaded {date}
      </p>
    </div>
  );
}

export default VideoDetails;
