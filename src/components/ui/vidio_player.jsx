import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ src }) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <ReactPlayer
        src={src}
        controls
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default VideoPlayer;

