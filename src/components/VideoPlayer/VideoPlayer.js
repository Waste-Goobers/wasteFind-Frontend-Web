import { Row } from 'antd';
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.scss';

function VideoPlayer() {
  return (
    <div>
      <Row justify="center">
        <h1 style={{ color: '#444', fontSize: '34px' }}>Video</h1>
      </Row>
      <Row justify="center">
        <div className="VideoPlayer player-wrapper">
          <ReactPlayer
            className="VideoPlayer_frame"
            url="https://youtu.be/7oJGNfsBcjQ"
            width="350px"
            height="230px"
          />
        </div>
      </Row>
    </div>
  );
}

export default VideoPlayer;
