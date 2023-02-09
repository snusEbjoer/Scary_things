import { useState, useEffect } from 'react'
import { render } from 'react-dom'
import './App.css'


let tg = window.Telegram.WebApp


async function getAllItems() {
  const [items, setItems] = useState({})

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAllItems")
    .then((resp) => resp.json())
    .then((items) => setItems(items));
  }, []);
  return (
    <div>
  {Object.keys(items).map((key, index) =>
    <span key={index}>{key}:{items[key]}</span>
  )}
  </div>
  );
};



async function renderObject(items){
    return Object.keys(items).map((obj, i) => {
      return (
        <div class="wrapper">
        <div class="product-img">
          <img src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
        </div>
        <div class="product-info">
          <div class="product-text">
            <h1>{items[obj].title}</h1>
            <p>{items[obj].description}</p>
          </div>
          <div class="product-price-btn">
            <p><span>{items[obj].price}</span>руб.</p>
            <button type="button">Добавить в корзину</button>
          </div>
        </div>
      </div>
      )
})}


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5000/getAllItems")
    .then((resp) => resp.json())
    .then((items) => setItems(items));
  }, []);
  return Object.keys(items).map((obj, i) => {
    return (
      <div class="wrapper">
      <div class="product-img">
        <img src="https://sun9-north.userapi.com/sun9-78/s/v1/ig2/QnZ0OC_yLKyB02Qg1oJBd35r9CAiyoMEMYAQ0ocmSsHXlSeG1ivhH-M4nKlE6EzSuskkwZ8AjEqw_eSFa7p701S-.jpg?size=1200x797&quality=95&type=album" />
      </div>
      <div class="product-info">
        <div class="product-text">
          <h1>{items[obj].title}</h1>
          <p>{items[obj].description}</p>
        </div>
        <div class="product-price-btn">
          <p><span>{items[obj].price}</span>руб.</p>
          <button type="button">Добавить в корзину</button>
        </div>
      </div>
    </div>
    )
})}


export default App
