import { Row } from 'antd';
import React from 'react';
import './Footer.scss';
import logoIcon from '../../public/Group3.png';
function Footer() {
  return (
    <div className="footer">
      <Row justify="space-around">
        <div style={{ width: '40%' }}>
          <Row justify="space-around">
            <div>
              <h3 className="footer-title">Services</h3>
              <h5 className="footer-subtitle">Material Analysis</h5>
              <h5 className="footer-subtitle">Recycle Tracker</h5>
              <h5 className="footer-subtitle">Mapping Recycle Centers</h5>
            </div>
            <div>
              <h3 className="footer-title">About Us</h3>
              <h5 className="footer-subtitle">
                WasteFind is Gazi University graduation project.
                <br />
                We developed multi service application for recycling.
                <br />
                Our project targets the SOA based professional <br />
                development principles.
              </h5>
            </div>
            <div>
              <h3 className="footer-title">Team</h3>
              <h5 className="footer-subtitle">Erkin Berk Türe</h5>
              <h5 className="footer-subtitle">Doğukan Okçu</h5>
              <h5 className="footer-subtitle">Mustafa Akgün</h5>
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
