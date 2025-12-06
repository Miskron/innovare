import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <ReactPlayer
        src="https://youtu.be/4kb6K6u9EhI?si=SZY8P4KJsN_k2avm"
        controls={true}
        playing={false}
        width="100%"
        height="300px"
      />
    </div>
  );
};

export default VideoPlayer;
