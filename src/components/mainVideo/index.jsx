import React from "react";
import ReactPlayer from "react-player";

function MainVideo() {
  const width = '1070px';
  const height = '600px';
  const videoURL = 'https://youtu.be/JTPIJFzvpfY';

  const playerConfig = {
    youtube: {
      playerVars: {
        modestbranding: 1,
      },
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'90px'
      }}
    >
      <div
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {videoURL ? (
          <ReactPlayer
            url={videoURL}
            width={width}
            height={height}
            controls
            playing
            config={playerConfig}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default MainVideo;
