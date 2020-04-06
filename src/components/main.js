import React, { Component } from 'react';
import Form from "./form";
import {faPhoneVolume,faShoppingBasket,faDollarSign} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Main extends Component {
  render() {
    return (
      <main>

          <a name="about" href=""></a>

        <section className="intro">
            <h2>Про нас</h2>
            <div>
             <p>В это трудное варемя наша компания <a href="http://shtychka.net/">shtychka.net</a> перешла на пошив масок. Являясь производителем, мы особо заинтересованы в продаже детской одежды одежды оптом и расширении нашей дистрибьюторской сети. Готовы предоставить максимально выгодные условия как для оптовых покупателей, дропшипперов и розничных покупателей.</p>
            </div>
        </section>
          <a name="price" href=""></a>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><FontAwesomeIcon icon={faPhoneVolume} /></p>
                <p className="service-title">Связь</p>
                <p>Просто наберите нас по телефону. Мы находимся в г.Бровары. Доставка "Новая почта", "Укрпочта" и можно самовывозом </p>
                </div>
                <div className="service-two">
                <p className="service-icon"><FontAwesomeIcon icon={faShoppingBasket} /></p>
                <p className="service-title">Заказ</p>
                <p>Для заказа оговорите количество и оплатите 100% или 50%, а 50% наложкой. Сагласуйте доставку. </p>

                </div>
                <div className="service-three">
                <p className="service-icon"><FontAwesomeIcon icon={faDollarSign} /></p>
                <p className="service-title">Цена</p>
                <p>Розница 25грн<br/>Оптом 20<br/>Есть разные цвета и размеры.</p>

          </div>
        </div>

            </div>



        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>

        </div>


          <a name="contact" href=""></a>
        <section>

            <h2>Наши контакты</h2>
            <Form />

        </section>


      </main>
    );
  }
}

export default Main;
