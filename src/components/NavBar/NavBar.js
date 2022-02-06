import { Button, Row } from 'antd';
import React from 'react';
import './NavBar.scss';
import logo from '../../public/Group1.png';
import { FaRecycle } from 'react-icons/fa';

function NavBar({ setPage, page }) {
  return (
    <div className="navbar">
      <Row justify="center">
        <div className="navbar-container">
          <Row justify="space-between">
            <img className="navbar-logo" src={logo} alt="logo" />
            <Button
              style={{
                marginTop: '20px',
              }}
              type="link"
              onClick={() => setPage('home-page')}
            >
              <h3 style={{ color: page === 'home-page' ? '#01a263' : '#444' }}>
                Home
              </h3>
            </Button>
            <Button
              style={{ marginTop: '20px' }}
              type="link"
              onClick={() => setPage('map-page')}
            >
              <h3 style={{ color: page === 'map-page' ? '#01a263' : '#444' }}>
                Find Recycle Centers
              </h3>
            </Button>
            <div>
              <FaRecycle className="navbar-logo-icon" />
              <div className="navbar-logo-icon-text">Ankara</div>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
}

export default NavBar;
