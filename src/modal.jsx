import React from "react";
import './card.css'

const Modal = ({ setIsOpen, currentItem, items }) => {
  return (
    <div className="wrapper-modal">
        <div onClick={() => {setIsOpen(!isOpen); setCurrentItem(currentItem);}} key={items.item_id} className="product-img-modal">
          <img alt="" src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
        </div>
        <div className="product-info-modal">
          <div className="product-text-modal">
            <h1>{currentItem.title}</h1>
            <p>{currentItem.description}</p>
          </div>
          <div className="product-price-btn-modal">
            <p>{currentItem.price}руб.</p>
            <button type="button">В корзину</button>
          </div>
        </div>
      </div>
  );
};

export default Modal;