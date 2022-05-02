import { Row } from 'antd';
import React from 'react';
import './Footer.scss';
import logoIcon from '../../public/Group3.png';
function Footer() {
  return (
    <div className="footer">
      <Row justify="space-around">
        <div style={{ width: '40%' }}>
          <Row justify="space-between">
            <div>
              <h3 className="footer-title">About Us</h3>
              <h5 className="footer-subtitle">
                WasteFind Gazi University graduation project which provides
                solutions for society and material collectors who want to
                recycle their waste with the help of Image processing and use
                the mapping/routing features for recycling centers in their
                living areas easily at once by earning coins. Our project aims
                to encourage recycling and turn it into a habit for everyone who
                wants to contribute to natural recycling but doesn't know-how.
              </h5>
            </div>
            <div>
              <h3 className="footer-title">Services</h3>
              <h5 className="footer-subtitle">Material Analysis</h5>
              <h5 className="footer-subtitle">Recycle Tracker</h5>
              <h5 className="footer-subtitle">Mapping Recycle Centers</h5>
            </div>
            <div>
              <h3 className="footer-title">Team</h3>
              <h5 className="footer-subtitle">
                Erkin Berk Türe
                <a
                  className="footer-subtitle-link"
                  href="https://github.com/configtheworld"
                >
                  configtheworld
                </a>
              </h5>
              <h5 className="footer-subtitle">
                Doğukan Okçu
                <a
                  className="footer-subtitle-link"
                  href="https://github.com/dogukan901"
                >
                  dogukan901
                </a>
              </h5>
              <h5 className="footer-subtitle">
                Mustafa Akgün
                <a
                  className="footer-subtitle-link"
                  href="https://github.com/mustafaakgunn"
                >
                  mustafaakgunn
                </a>
              </h5>
            </div>
            <div>
              <h3 className="footer-title">Github</h3>
              <h5 className="footer-subtitle">
                Organization
                <a
                  className="footer-subtitle-link"
                  href="https://github.com/Waste-Goobers"
                >
                  Waste-Goobers
                </a>
              </h5>
            </div>
          </Row>
        </div>
        <div className="footer-logo-Icon-container">
          <img className="footer-logo-Icon" src={logoIcon} alt="logoIcon" />
        </div>
      </Row>

      <Row justify="center">
        <small style={{ textAlign: 'center' }}>
          <em>
            Copyright © 2022 WasteFind
            <br />
            All Rights Reserved
          </em>
        </small>
      </Row>
    </div>
  );
}

export default Footer;
