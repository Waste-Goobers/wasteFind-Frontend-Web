import { Row } from 'antd';
import React from 'react';
import './Footer.scss';
import logo from '../../public/Group1.png';
import logoIcon from '../../public/Group3.png';
function Footer() {
  return (
    <div className="footer">
      <Row justify="space-around">
        <div>
          <Row justify="space-around">
            <div>
              <h3>Team</h3>
              <h5>Erkin</h5>
            </div>
            <div>
              <h3>Team</h3>
              <h5>Doki</h5>
            </div>
            <div>
              <h3>Team</h3>
              <h5>Qıral</h5>
            </div>
          </Row>
        </div>
        <div className="footer-logo-Icon-container">
          <img className="footer-logo-Icon" src={logoIcon} alt="logoIcon" />
        </div>
      </Row>
    </div>
  );
}

export default Footer;
