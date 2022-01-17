import { Row } from 'antd';
import React from 'react';
import './NavBar.scss';
import logo from '../../public/Group1.png';

function NavBar() {
  return (
    <div className="navbar">
      <Row justify="center">
        <img className="navbar-logo" src={logo} alt="logo" />
      </Row>
    </div>
  );
}

export default NavBar;
