import { Row } from 'antd';
import React from 'react';
import './NavBar.scss';
import logo from '../../public/Group1.png';
import { FaRecycle } from 'react-icons/fa';

function NavBar() {
  return (
    <div className="navbar">
      <Row justify="center">
        <div className="navbar-container">
          <Row justify="space-between">
            <img className="navbar-logo" src={logo} alt="logo" />
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
