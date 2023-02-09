import { useState } from 'react'
import './App.css'


let tg = window.Telegram.WebApp



function App() {
  
  return (
      <div class="wrapper">
        <div class="product-img">
          <img src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>Jopa</h1>
            <p>Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</p>
          </div>
          <div class="product-price-btn">
            <p><span>78</span>$</p>
            <button type="button">Добавить в корзину</button>
          </div>
        </div>
      </div>
  )
}

export default App
