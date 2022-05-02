import { Row } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';

function VideoPlayer() {
  return (
    <Row justify="center">
      <div className="VideoPlayer player-wrapper">
        <ReactPlayer
          className="VideoPlayer_frame"
          url="not here yet"
          width="350px"
          height="230px"
        />
      </div>
    </Row>
  );
}

export default VideoPlayer;
