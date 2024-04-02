import React, { useRef } from 'react';

const VideoPlayer = ({ videoSrc, width, height }) => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ width, height }}>
      <video ref={videoRef} width="100%" height="100%" controls>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default VideoPlayer;
