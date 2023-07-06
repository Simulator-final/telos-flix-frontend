import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
import ReactPlayer from 'react-player';
import { AuthContext } from '../../contexts/AuthContext';
import ProtectedRoutes from '../protectedRoutes/protectedRoutes';

const VideoPlayer = () => {
  const { id } = useParams();
  const { moviesData } = useContext(MovieContext);
  const foundVideo = moviesData.find(video => video._id === id);
  const width = '1000px';
  const height = '550px';

  function getVideoUrl() {
    console.log(foundVideo);
    if (foundVideo) {
      return foundVideo.video;
    }
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {getVideoUrl() && (
          <ReactPlayer
            url={getVideoUrl()}
            width={width}
            height={height}
            controls
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
