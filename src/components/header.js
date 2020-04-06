import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (

      <header>

        <div className="head">
            <h1>Мы шьём маски< br/> ✂✆☺☀☂✌♡</h1>
            <div>
              <p>Когда неизбежен близкий контакт с людьми, у которых наблюдаются симптомы вирусного заболевания, что передается воздушно-капельным путем, непременно используйте маску. А если сами входите в число таких больных, тогда надевайте маску обезательно.</p>
              <div><a className="contact" href="#contact">Свяжитесь с нами</a></div>
            </div>
        </div>

      </header>

    );
  }
}

export default Header;
