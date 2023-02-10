import { useState } from "react";
import './cart.css'

function Cart({cart, setIsOpenCart }) {
  const totalPrice = cart.reduce((sum, obj) => obj.price * obj.quantity + sum, 0)
  console.log(totalPrice)
  return (
      <div className="parent-cart">
      {cart.map(obj => (
        <div className="wrapper-cart">
        <div className="product-img-cart">
          <img alt="" src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
        </div>
        <div className="product-info-cart">
          <div className="product-text-cart">
            <h1>{obj.title}</h1>
            <p>{obj.price}руб.</p>
            <p>{obj.quantity}</p>
          </div>
        </div>
      </div>
      ))}
      <p>{totalPrice}руб</p>
      </div>
  )
}

export default Cart;