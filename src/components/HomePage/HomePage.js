import { Col, Row } from 'antd';
import React from 'react';
import Articles from '../Articles';
import './HomePage.scss';
import tree from '../../public/tree.svg';
import mgbig from '../../public/mgbig.png';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Content from '../Content';

function HomePage() {
  return (
    <div className="homepage">
      <div>
        <div className="homepage_banner-container">
          <Row justify="start">
            <Col xs={0} sm={0} md={0} lg={0} xl={24}>
              <img alt="example" className="homepage_circular-img" src={tree} />
              <img
                alt="magnifier"
                className="homepage_magnifier-img"
                src={mgbig}
              />
            </Col>
          </Row>
          <Row justify="end">
            <Col xs={24} sm={24} md={20} lg={20} xl={12} xxl={12}>
              <Content />
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={12} xxl={8}></Col>
          </Row>
        </div>
      </div>
      <div className="homepageContainer">
        <Articles />
        <VideoPlayer />
      </div>
    </div>
  );
}

export default HomePage;
