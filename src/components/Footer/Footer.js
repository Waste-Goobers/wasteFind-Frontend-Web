import { Row } from 'antd';
import React from 'react';
import './Footer.scss';
import logoIcon from '../../public/Group3.png';
function Footer() {
  return (
    <div className="footer">
      <Row justify="space-around">
        <div style={{ width: '30%' }}>
          <Row justify="space-around">
            <div>
              <h3 className="footer-title">Services</h3>
              <h5 className="footer-subtitle">Erkin</h5>
            </div>
            <div>
              <h3 className="footer-title">Solutions</h3>
              <h5 className="footer-subtitle">Erkin</h5>
            </div>
            <div>
              <h3 className="footer-title">Team</h3>
              <h5 className="footer-subtitle">Erkin</h5>
            </div>
          </Row>
        </div>
        <div className="footer-logo-Icon-container">
          <img className="footer-logo-Icon" src={logoIcon} alt="logoIcon" />
        </div>
      </Row>

      <Row justify="center">
        <small>
          <em>wasteFind is non profit graduation project</em>
        </small>
      </Row>
    </div>
  );
}

export default Footer;
