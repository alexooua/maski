import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">Шьём<span>Маски</span></li>
          </ul>
          <ul>
              <li><a href="#about">О нас</a></li>
              <li><a href="#price">Цена</a></li>
              <li><a href="#contact">Контакти</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;
