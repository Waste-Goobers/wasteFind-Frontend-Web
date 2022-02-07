import { Col } from 'antd';
import React from 'react';
import Articles from '../Articles';
import './HomePage.scss';
import tree from '../../public/tree.svg';

function HomePage() {
  return (
    <div className="homepage">
      <div>
        <div>
          <Col xs={0} sm={0} md={0} lg={24} xl={24}>
            <img
              alt="example"
              style={{
                height: '420px',
                objectFit: 'cover',
                marginLeft: '30px',
              }}
              src={tree}
            />
          </Col>
        </div>
      </div>
      <div className="homepageContainer">
        <Articles />
      </div>
    </div>
  );
}

export default HomePage;
