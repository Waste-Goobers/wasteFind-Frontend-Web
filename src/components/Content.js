import { Col } from 'antd';
import React from 'react';
import logo from '../public/Group3.png';

function Content() {
  return (
    <Col>
      <div className="homepage_content">
        <h1 className="homepage_content_header">
          <img className="homepage_content_logo" src={logo} />
          WasteFind
        </h1>

        <h3 className="homepage_content_secondary_header">
          Even though it seems real startup, we are just 3 senior students!
        </h3>
        <p className="homepage_content_description">
          We did this project last semester as a university graduation project
          1, in order to show our skills in every aspect of software
          development!
          <br className="breakline" />
          The aim was a creating whole SaaS product with image processing,
          service-oriented architecture, and web-mobile applications as high
          quality as possible.
          <br className="breakline" />
          Do not miss to check out the project repositories!
          <br className="breakline" />
          We could not host our servers and published the mobile app but we hope
          the video below and GitHub organization will be explanatory for what
          we did 21-22 fall semester.
          <br className="breakline" />
        </p>
      </div>
    </Col>
  );
}

export default Content;
